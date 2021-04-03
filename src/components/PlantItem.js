import React from 'react'
import "../styles/PlantItem.css"

export default function PlantItem({name, cover, id, light, water, addItem}) {
    function onClickHandler(e){
        console.log(e)
    }

    function addPlantItemToCart(){addItem(name)}

    return (
        <li key={id} className="plant-item" onClick={onClickHandler}>
            <img className="plant-item-cover" src={cover} alt={`${name} cover`} />
            <div className="plant-item-description">
                <h2>{name}</h2>
                <p>100€</p>
            </div>
        </li>
    )
}
