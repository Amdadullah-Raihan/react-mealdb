import React from 'react';
import "./Food.css"

const Food = (props) => {
    // console.log(props);
    const {strMeal,strCatagory,strMealThumb} = props.food;
    const {handleAddToCart} = props;
    return (
        <div className='food-card'>
            <img className='thumb' src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <h1>{strCatagory}</h1>
            <button onClick={()=> handleAddToCart(props.food) }>Add This to List</button>
        </div>
    );
};

export default Food;