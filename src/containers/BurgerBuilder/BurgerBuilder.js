import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1,
    bacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        canOrder: false,
        ordering: false,
        loading: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data});
            })
    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updateCanOrder(updatedIngredients);
    }
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updateCanOrder(updatedIngredients);
    }
    updateCanOrder = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(eachIngredient => { return ingredients[eachIngredient] })
            .reduce((sum, eachQuantity) => {
                return sum + eachQuantity;
            }, 0);
        this.setState({ canOrder: sum > 0 });
    }
    order = () => {
        this.setState({ ordering: true })
    }
    hide = () => {
        this.setState({ ordering: false })
    }
    continue = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
            .then(res => { this.setState({ loading: false }); this.hide() })
            .catch(err => this.setState({ loading: false }))
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let each in disabledInfo) {
            disabledInfo[each] = disabledInfo[each] <= 0;
        }
        let orderSummary = null;
        let burger = <Spinner></Spinner>;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls adding={this.addIngredient}
                        removing={this.removeIngredient}
                        disabledInfo={disabledInfo}
                        price={this.state.totalPrice}
                        canOrder={this.state.canOrder}
                        ordering={this.order}>
                    </BuildControls>
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                cancel={this.hide}
                continue={this.continue}
                price={this.state.totalPrice}>
            </OrderSummary>
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        return (
            <Aux>
                <Modal show={this.state.ordering} hide={this.hide}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default BurgerBuilder;