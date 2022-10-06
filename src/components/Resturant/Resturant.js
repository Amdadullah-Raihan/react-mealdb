import React, { useEffect, useState } from 'react';
import { addToLs, getDb } from '../../localStorage/local-storage';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Resturant.css'

const Resturant = () => {

    const [foods,setFoods] = useState([]);
    const [order, setOrder] = useState([])

    console.log(order);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res=>res.json())
            .then(data=> setFoods(data.meals)) // convert obj into array
           
    },[foods])
    //collect data form LS
    useEffect(()=>{
        if(foods.length){
            const savedCart = getDb();
            const savedItems = [];
            for(const mealId in savedCart){
                const food = foods.find(fd=> fd.idMeal === mealId)
                savedItems.push(food);
                const quantity = savedCart[mealId];
                food.quantity = quantity;
            }
            setOrder(savedItems)
        }
    },[foods])
    const handleAddToCart = (food) =>{
        food.quantity =1;
        const newOrder = [...order, food];

        setOrder(newOrder);
        // console.log(food );
       addToLs(food.idMeal);
       

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