
import axios from "axios";
//import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/deletefood.css'

function DeleteFood() {
  const navigate=useNavigate();
  const {id}=useParams();

  const handleDelete=async()=>{
   try {
    await axios.delete(`http://localhost:3002/api/products/${id}`)
   } catch (error) {
    console.log('cannot delete this',error);
   }
  }
  return (
    <div className="delete">
      {/* <BackButton/> */}
      <p>are sure you want to delete this???</p>
      <button onClick={handleDelete} className="deletebtn">yes delete</button>
    </div>
  )
}

export default DeleteFood