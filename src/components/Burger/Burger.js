import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
    // convert an Object to an Array to update the DOM through Render()
    let transformedIngredients = Object.keys(props.ingredients) //return an array of properties
    .map( igKey => {
        // Array(ingredients['salad']) = Array(1) = [undefined]
        // Array(ingredients['bacon']) = Array(1) = [undefined]
        // Array(ingredients['cheese']) = Array(2) = [undefined, undefined]
        // Array(ingredients['meat']) = Array(2) = [undefined, undefined]
        return [...Array(props.ingredients[igKey])].map((_, i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        } );
    } )
    //Reduce to transform an Array of empty arrays to one array with length 0
    .reduce((acc,el) => {
        return acc.concat(el);
    },[]);

    //Check if there is any ingredient in Burger to display

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients !</p>
    }

    console.log(transformedIngredients)
    /*[ [<BurgerIngredient key={salad1} type="salad"/>,
        <BurgerIngredient key={bacon1} type="bacon"/>,

     ]*/
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type ="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type ="bread-bottom"/>
        </div>
    );
}

export default burger;