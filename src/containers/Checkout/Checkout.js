import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import queryString from 'query-string'
import { Route } from 'react-router-dom'
import ContactData from '../../containers/Checkout/ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    }
    componentDidMount(){
        let query = queryString.parse(this.props.location.search);
        let ingredients = {...query};
        delete ingredients.price;
        this.setState({ingredients: ingredients, totalPrice: query.price});
    }
    cancel = () => {
        this.props.history.goBack();
    }
    continue = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    cancel={this.cancel} 
                    continue={this.continue}></CheckoutSummary>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props)=><ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}></ContactData>}/>
            </div>
        )
    }
}

export default Checkout
