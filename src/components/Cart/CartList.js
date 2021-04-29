import React from 'react';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';

export const CartList=({value}) =>{

    const{cart} =value;
    return (
        <div className="container-fluid">
            {
                cart.map(item=>{
                   return <CartItem key={item.prodId} item={item} value={value}/>
                })
            }
        </div>
    );
}

