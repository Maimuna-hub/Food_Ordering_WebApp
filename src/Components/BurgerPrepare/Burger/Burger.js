import React from "react";
import Ingredient from "../Ingredient/Ingredient";
import './Burger.css';

const Burger = props => {
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()} />
        })
    })
        .reduce((arr, element) => {
            //console.log(arr);
            //console.log(element);
            return arr.concat(element);
        }, []);

    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please put some ingredient!</p>;
    }

    return (
        <div className="Burger">
            <Ingredient type="braed-top" />
            {ingredientArr}
            <Ingredient type="bread-bottom" />
        </div>
    );
}

export default Burger;