import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

//need props.ingredients

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good</h1>
            <div style= {{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button 
                btnType='Danger'
                clicked={props.cancel}>Cancel</Button>
            <Button 
                btnType='Success'
                clicked={props.continue}>Continue</Button>
        </div>
    )
}

export default checkoutSummary