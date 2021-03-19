import React from 'react';
import { CartItem } from './CartItem';

export const CartList=({value}) =>{

    const{cart} =value;
    return (
        <div className="container-fluid">
            hello from cart CartList
            {
                cart.map(item=>{
                   return <CartItem key={item.prodId} item={item} value={value}/>
                })
            }
        </div>
    );
}

