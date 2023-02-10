import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './components/BurgerPane'

const BurgerStacker = () => {
    const ingredients = [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Cheese', color: 'gold'}
        ]
        const [burgerIngredients, setBurgerIngredients] = useState([])
    }

    
const addToStack = (e) => {
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor

    setBurgerIngredients(
            [{ name: ingName, color: ingColor }, ...burgerIngredients]
            
    )
}

    
const removeFromStack = (e) => {
        const clickIndex = e.target.id        
        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)
                
        setBurgerIngredients(currBurger)
    }

    
    clearBurger = () => {
        setBurgerIngredients([])
    }

    return (
        <div>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngredientList 
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    remove={removeFromStack}
                    clear={clearBurger}
                />
            </div>
        </div>
    )

export default BurgerStacker