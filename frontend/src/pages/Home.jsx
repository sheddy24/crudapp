import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/home.css'
//import{BsArrowLeft,} from 'react-icons/bs'

function Home() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/products");
        // console.log(response);
        setFoods(response.data);
      } catch (error) {
        console.log("error fetching products", error);
      }
    };

    fetchFoods();
  }, []);
  return (
    <div className="available-foods">
        <h3>available items</h3>
      {foods.map((food) => (
        <ul key={food._id}>
          <li>{food.name}</li>
          <li>{food.price}</li>
          <li>{food.quantity}</li>
          <Link to={`/foods/show/${food._id}`}  className="links">Details</Link>
          <Link to={`/foods/edit/${food._id}`} className="links">Edit</Link>
          <Link to={`/foods/delete/${food._id}`} className="links">Delete </Link>
          {/* <Link to={`/foods/show/${food._id}}`}>Details</Link> */}
        </ul>
      ))}
      <Link to={`/foods/create`} className="create-food-link">+Food</Link>
    </div>
  );
}

export default Home;
