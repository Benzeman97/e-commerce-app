import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class PayPalButton extends Component {
     onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
        this.props.clearCart();
        this.props.history.push('/');
}

 onCancel = (data) => {
    console.log('The payment was cancelled!', data);
}

 onError = (err) => {
    console.log("Error!", err);
}

    render() {

        let env = 'production'; 
        let currency = 'USD';
        
        const client = {
         //   sandbox: 'AQ5aZOIVRgybGlenp6lJmwo4le3NN8c5VFuyAIyWqXjecAAXOTDQWAl4hVd22MipibQG6-s5ODMxap04',
            production: process.env.REACT_APP_PROD_APP_ID,
        }

        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={this.onError} onSuccess={this.onSuccess} onCancel={this.onCancel} />
        );
    }
}

export default PayPalButton;