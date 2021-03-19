import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import { ButtonContainer } from './Button';

export class Modal extends Component {
    render() {
        return (
            <div>
               <ProductConsumer>
                 {
                     value =>{
                         const {openModal,closeModal} = value;
                         const {prodName,img,price} = value.modalProduct;

                         if(!value.modalOpen)
                              return null;
                         else{
                             return(
                                 <ModalContainer>
                                 <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                           <h4>Item added to cart</h4>
                                       <img src={img} alt="Product" className="img-fluid"/>   
                                       <h5>{prodName}</h5> 
                                       <h5 className="text-muted">price : <span>$</span> {price}</h5>
                                       <Link to="/">
                                       <ButtonContainer onClick={closeModal}>
                                           store
                                       </ButtonContainer>
                                       </Link>
                                       <Link to="/cart">
                                          <ButtonContainer cart onClick={()=>{closeModal()}}>
                                          go to cart
                                          </ButtonContainer>
                                       </Link>
                                    </div>
                                </div>
                                </div>
                                </ModalContainer>
                             );
                         }     
                     }
                 }
               </ProductConsumer>
            </div>
        );
    }
}

const ModalContainer = styled.div`
 position:fixed;
 top:0;
 right:0;
 bottom:0;
 left:0;
 background: rgba(0,0,0,0.3);
 display:flex;
 align-items:center;
 justify-content:center;
 #modal{
     background: var(--mainWhite);
 }
`;