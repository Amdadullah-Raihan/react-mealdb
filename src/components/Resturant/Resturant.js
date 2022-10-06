import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Resturant.css'

const Resturant = () => {

    const [foods,setFoods] = useState([]);
    const [order, setOrder] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res=>res.json())
            .then(data=> setFoods(data.meals)) // convert obj into array
           
    },[])
    const handleAddToCart = (food) =>{
        const newOrder = [...order, food];
        setOrder(newOrder);
        // console.log(food );

    }

    return (
        <div className='container'>
            <div className='food-container'>
               
                {
                    foods.map(food=><Food key = {food.idMeal} food ={food} handleAddToCart={handleAddToCart}></Food>)
                }
            </div>
            <div className='cart-container'>
               <Cart orders = {order}></Cart>
            </div>
        </div>
    );
};

export default Resturant;