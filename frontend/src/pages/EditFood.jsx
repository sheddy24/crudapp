import axios from "axios";
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/createfood.css' 

function EditFood() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  //const navigate=useNavigate()
  const {id}=useParams();


  useEffect(()=>{
    const fetchFood=async()=>{
      try {
        const response=await axios.get(`http://localhost:3002/api/products/${id}`)
        setName(response.data.name)
        setQuantity(response.data.quantity)
        setPrice(response.data.price)
      } catch (error) {
        
      }
    }
    fetchFood()
  },[])

  const handleEdit=async(e)=>{
    e.preventDefault();
    const data={
      name,
      quantity,
      price
    }
    try {
    await axios.put(`http://localhost:3002/api/products/${id}`,data)

    setName('')
    setQuantity(0)
    setPrice(0)

    console.log('form submitted');
    } catch (error) {
      console.log("could not edit this food ",error);
    }
  }
  return (
    <div className="whole-form"> 
      {/* <BackButton/> */}
      <h3 className="heading">edit food details </h3>
      <form onSubmit={handleEdit} className="form">
        <label htmlFor="name">Enter the food name</label>
        <input className="formfield"
        id="name"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="quantity">Enter the amount available</label>
        <input className="formfield"
        id="quantity"
          type="number"
          placeholder="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label htmlFor="price">Enter the price</label>
        <input className="formfield"
        id="price"
          type="number"
          placeholder="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit" disabled={!name || !quantity || !price} className="button">submit</button>
      </form>
    </div>
  );
}

export default EditFood;
