import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const obToArrIngredients = Object.entries(props.ingredients);
    let arrIngredientsFull = [];
    for (let i = 0; i < obToArrIngredients.length; i++) {
        for (let j = 0; j < obToArrIngredients[i][1]; j++) {
            arrIngredientsFull.push(obToArrIngredients[i][0]);
        }
    }
    let ingredientsToShow = arrIngredientsFull.map((eachIngredient, index) => {
        return <BurgerIngredient key={index} type={eachIngredient}></BurgerIngredient>
    })
    if(ingredientsToShow.length === 0){
        ingredientsToShow = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {ingredientsToShow}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger 