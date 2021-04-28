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
        },()=>{
            console.log(this.state)
            this.addTotals();
        });
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

    let tempCart= [...this.state.cart];
    const index = tempCart.indexOf(this.getProduct(id));
    const product = tempCart[index];
    product.count=product.count+1;
    product.total= product.price * product.count;
    this.setState(()=>{
        return {cart: [...tempCart]}
    },()=>{
        this.addTotals();
    })
}

decrement=id=>{
  
   let tempCart=[...this.state.cart];
   const index = tempCart.indexOf(this.getProduct(id));
   const product = tempCart[index];
   product.count=product.count-1;
   product.total=product.price*product.count;

   this.setState({
       cart:[...tempCart]
   },()=>{
       if(product.count<=0)
         this.removeItem(id);
         this.addTotals();
 });

}

removeItem=id=>{
    let tempProducts=[...this.state.products];
    let tempCart=[...this.state.cart];

    tempCart = tempCart.filter(prod=>prod.prodId!==id);

    const index= tempProducts.indexOf(this.getProduct(id));
    const product = tempProducts[index];
     
    product.inCart=false;
    product.count=0;
    product.total=0;

    this.setState({
        cart:[...tempCart]
    },()=>{
        this.addTotals();
    })
}

clearCart()
{
    let tempProducts = [...this.state.products];
    tempProducts.map(prod=>prod.inCart=false);

    this.setState({
        products:[...tempProducts],
        cart:[]
    });

    this.setState({
        cart:[]
    },()=>{
         this.setProducts();
         this.addTotals();
    });
}
   
addTotals=()=>{
    let subTotal=0;
    const tempCart = [...this.state.cart];
    tempCart.map(c=>subTotal+=c.total);
    const tax = parseFloat((subTotal*0.1).toFixed(2));
    const total = subTotal+tax;
    this.setState({
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal:total
    })
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