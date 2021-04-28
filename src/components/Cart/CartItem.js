import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons';


export const CartItem=({item,value})=>{

    const {prodId,prodName,price,img,total,count} = item;
    const {increment,decrement,removeItem} = value;

    return (
        <div className="container">
            <div className="row text-center text-capitalize my-2">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} alt="product" className="img-fluid" style={{width:'5rem',height:'5rem'}}/>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <span className="d-lg-none">product : </span>
                   {prodName}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <span className="d-lg-none">price : </span>
                   {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                    <span className="btn btn-black mx-1" onClick={()=>decrement(prodId)}>
                        -
                    </span>
                    <span className="btn btn-black mx-1">
                        {count}
                    </span>
                    <span className="btn btn-black mx-1" onClick={()=>increment(prodId)}>
                        +
                    </span>
                    </div>
                    </div>
                </div>
                {/*  */}
                <div className="col-10 mx-auto col-lg-2">
                    <div className="btn cart-icon" onClick={()=>removeItem(prodId)}>
                <FontAwesomeIcon icon={faTrash}/>
                   </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                   <strong> item total : </strong>
                   {total}
                </div>

               
            </div>
        </div>
    );
}
