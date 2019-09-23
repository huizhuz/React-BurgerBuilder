import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinners from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-order'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: '',
        },
        loading: false,

    }
    orderHandler = (event) => {
        event.preventDefault()
        console.log(this.props.ingredients)
        console.log(this.props.totalPrice)
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Marina',
                address: {
                    street: '5535 Love St',
                    zipCode: '71251',
                    country: 'USA',
                },
                email: 'marina@outlook.com',
            },
            deliverMethod: 'fastest'
        }
        this.setState({ loading: true })
        axios.post('/orders.json', order)
            .then(res => { this.setState({ loading: false }); this.props.history.push('/') })
            .catch(err => this.setState({ loading: false }))
    }
    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                <input className={classes.Input} type="email" name="email" placeholder="Your Email"></input>
                <input className={classes.Input} type="text" name="street" placeholder="Street"></input>
                <input className={classes.Input} type="text" name="zipcode" placeholder="Zipcode"></input>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinners></Spinners>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact information</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;