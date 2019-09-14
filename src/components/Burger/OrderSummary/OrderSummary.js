import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
                                    .map(eachIngredient =>{
                                        return <li key={eachIngredient}>{eachIngredient}: {props.ingredients[eachIngredient]}</li>
                                    });
    return(
        <Aux>
            <h3>Your order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong>${props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancel} btnType="Danger">Cancel</Button>
            <Button clicked={props.continue} btnType="Success">Continue</Button>
        </Aux>
    )
}

export default orderSummary