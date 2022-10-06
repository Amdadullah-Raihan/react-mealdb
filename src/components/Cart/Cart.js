import React from 'react';
import Items from '../Items/Items';

const Cart = (props) => {
    // console.log(props);
    return (
        <div>
            <div>
                <h1>Order List</h1>
                <h3>Total Ordered Items: {props.orders.length}</h3>
            </div>
            <div>
               {
                 props.orders.map( item => <Items item={item}></Items>)
               }
            </div>

        </div>
    );
};

export default Cart;