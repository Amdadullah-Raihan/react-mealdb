import React from 'react';
import './Items.css'

const Items = ({item}) => {

 
    

    return (
        <div className='ordered-items'>
            <img className='item-img' src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
            <div className='quantity'>

            <h4>+</h4> <h3> {item.quantity} </h3> <h4> - </h4>
            </div>
        </div>
    );
};

export default Items;