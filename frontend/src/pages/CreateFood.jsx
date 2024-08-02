import axios from "axios";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import '../styles/createfood.css' 

function CreateFood() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={
      name,
      quantity,
      price
    }
    try {
    await axios.post('http://localhost:3002/api/products',data)

    setName('')
    setQuantity(0)
    setPrice(0)

    console.log('form submitted');
    } catch (error) {
      console.log("cannot create the new food",error);
    }
  }
  return (
    <div className="whole-form">
      {/* <BackButton/> */}
      <h3 className="heading">Enter the new food details </h3>
      <form onSubmit={handleSubmit} className="form">
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
        <input
        className="formfield"
        id="quantity"
          type="number"
          placeholder="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label htmlFor="price">Enter the price</label>
        <input
        className="formfield"
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

export default CreateFood;
