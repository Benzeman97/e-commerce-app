import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from "../context";
import styled from 'styled-components';

export default class ProductList extends Component {


    render() {
        return (
            <React.Fragment>
                <ProductWrapper className="py-5">
                    <div className="container"></div>
                <Title name="Medical " title="Products"/>

                <div className="row">
                       <ProductConsumer>
                           {
                               value=>{
                                    return value.products.map(prod=>{
                                        return <Product key={prod.prodId} product={prod}/>
                                    })
                               }
                           }
                       </ProductConsumer>
                </div>
                </ProductWrapper>
            </React.Fragment>
        );
    }
}

const ProductWrapper = styled.section``;