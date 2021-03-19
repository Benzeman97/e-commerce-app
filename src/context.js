import React, { Component } from 'react';
import {medicalProducts,detailProduct} from './data';

const ProductContext = React.createContext();
//create a context object then you can access property of that object
//properties - provider and consumer

class ProductProvider extends Component {

    state={
        products:[],
        detail:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0

    }

    componentDidMount()
    {
        this.setProducts();
    }

    setProducts=()=>{
          let tempProducts=[];
          medicalProducts.forEach(prod=>{
              const singleProduct = {...prod};
              tempProducts = [...tempProducts,singleProduct];
          });

          this.setState(()=>{
              return {products:tempProducts};
          })

    }

    getProduct = (id) =>{
         const product =  this.state.products.find(prod=> prod.prodId === id);
         return product;
    }

    handleDetail=(id)=>{
       this.setState(()=>{
          return {detail:this.getProduct(id)}
       })
    }

    addToCart=(id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getProduct(id));
        const product = tempProducts[index];
        product.inCart =true;
        product.count = 1;
        const price = product.price;
        product.total = price;
      
        this.setState(()=>{
             return {products:tempProducts,cart:[...this.state.cart,product]}
        },()=>console.log(this.state));
    }

openModal=id=>{
    const product = this.getProduct(id);
    this.setState({
        modalProduct:product,
        modalOpen:true
    })
}

closeModal=()=>{
    this.setState({
        modalOpen:false
    })
}

increment=id=>{
    console.log('this is increment method');
}

decrement=id=>{
    console.log('this is decrement method');
}

removeItem=id=>{
    console.log(`remove the item from the cart`);
}

clearCart()
{
    console.log('cart was cleared');
}
   
    render() {
        return (
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal
            ,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart.bind(this)}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};