import React from 'react'
import classes from './Order.css'

const Order = (props) => {
    const ingredientsObject = [];
    for (let ingredient in props.ingredients) {
        ingredientsObject.push({ ig: ingredient, amount: props.ingredients[ingredient] })
    }

    let ingredients = ingredientsObject.map(ig => {
        return <span 
                    key={ig.ig}
                    style={{
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid #ccc',
                        padding: '5px'
                        }}>{ig.ig}({ig.amount}) </span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>${props.price}</strong></p>
        </div>
    )
}
export default Order