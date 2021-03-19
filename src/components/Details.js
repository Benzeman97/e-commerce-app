import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {
                   value=>{
                       const {prodId,prodName,price,img,desc,inCart,madeBy} = value.detail;
                          return(
                            <div className="container py-5">
                           
                           {/*start title*/}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                               <h1>{prodName}</h1>

                               </div>
                           </div>
                           {/*end title*/}

                          {/*product info*/}
                          <div className="row">
                              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                              <img src={img} alt="product" className="img-fluid"/>
                              </div>
                              {/*product text*/}
                              <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                              <h3>model: {prodName}</h3>
                              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                  madeBy: <span className="text-uppercase">{madeBy}</span> </h4>
                              <h4 className="text-blue mt-3 mb-2">
                                  <strong>
                                  price: <span>$</span> {price}
                                  </strong>
                              </h4>
                              <p className="text-capitalize font-weight-bold mt-3 mb-2">some info about product: </p>
                              <p className="text-muted lead">{desc}</p>
                              {/* buttons */}
                                <Link to="/">
                             <ButtonContainer>Back to Products</ButtonContainer>
                                </Link>
                                <ButtonContainer cart disabled={inCart? true : false}
                                onClick={()=>value.addToCart(prodId)}>
                                    {inCart? "InCart" : "Add to Cart"}
                                </ButtonContainer>
                                    
                              </div>{/*end product-text*/}
                          </div> {/*end product-info*/}

                          {/*end container*/}  </div> 
                          );
                   }
               }
           </ProductConsumer>
        );
    }
}

export default Details;