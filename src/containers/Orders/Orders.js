import React, { Component } from 'react'
import axios from '../../axios-order'
import Order from '../Orders/Order/Order'

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    }
    componentDidMount() {
        axios.get('./orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({ ...res.data[key], id: key });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}></Order>
                )}
            </div>
        )
    }
}

export default Orders