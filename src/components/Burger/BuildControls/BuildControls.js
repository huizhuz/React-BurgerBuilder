import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price}</strong></p>
            {
                controls.map(each =>
                    <BuildControl key={each.label}
                        label={each.label}
                        adding={() => props.adding(each.type)}
                        removing={() => props.removing(each.type)}
                        disabled={props.disabledInfo[each.type]}></BuildControl>
                )
            }
            <button className={classes.OrderButton} disabled={!props.canOrder} onClick={props.ordering}>Order Now</button>
        </div >
    )
}

export default buildControls;