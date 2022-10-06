import React from 'react';
import './Items.css'

const Items = ({item}) => {

    console.log(item);
    

    return (
        <div className='ordered-items'>
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
        </div>
    );
};

export default Items;