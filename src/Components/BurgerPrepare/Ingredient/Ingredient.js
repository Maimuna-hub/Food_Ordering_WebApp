import React from "react";
import BreadTop from '../../../assets/images/top.png';
import BreadBottom from '../../../assets/images/bottom.png';
import Meat from '../../../assets/images/meat.png';
import Salad from '../../../assets/images/salad.png';
import Cheese from '../../../assets/images/cheese.png';
import './Ingredient.css';

const Ingredient = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt="Bottom Braed" /></div>
            break;
        case 'braed-top':
            ingredient = <div><img src={BreadTop} alt="Top Braed" /></div>
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;
        case 'salad':
            ingredient = <div><img src={Salad} alt="Salad" /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt="Cheese" /></div>
            break;
        default:
            ingredient = null;
    }
    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;