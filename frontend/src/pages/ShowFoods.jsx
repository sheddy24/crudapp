import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/showfoods.css'


function ShowFoods() {
  const[food,setFood]=useState({})
  const {id}=useParams();

  console.log(id);

  useEffect(()=>{
    const fetchFood=async()=>{
      try {
        const response=await axios.get(`http://localhost:3002/api/products/${id}`)
        console.log(response.data);
        setFood(response.data)
      } catch (error) {
        console.log("cant get this book:", error);
      }
    }

    fetchFood();
  },[])
  return (
    <div className='food-div'>
      {/* <BackButton/> */}
      <p>{food.name}</p>
      <p>{food.price}</p>
      <p>{food.quantity}</p>
    </div>
  )
}

export default ShowFoods