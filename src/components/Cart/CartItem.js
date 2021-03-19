import React from 'react';

export const CartItem=({item,value})=>{

    const {prodId,prodName,price,img,total,count} = item;
    const {increment,decrement,removeItem} = value;

    return (
        <div className="container">
            <div className="row text-center text-capitalize my-2">
                <div className="col-10 mx-auto col-md-5 col-lg-2">
                    <img src={img} alt="product" className="img-fluid" style={{width:'5rem',height:'5rem'}}/>
                </div>
            </div>
        </div>
    );
}
