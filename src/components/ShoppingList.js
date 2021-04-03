import React from 'react'
import PlantItem from "./PlantItem"
import {plantList} from "../data/PlantList"
import "../styles/ShoppingList.css"

export default function ShoppingList({addItem}) {

    return (
        <section id="shopping-list" className="shopping-list">
            <div className="section__heading">
                <h1 className="section-title">Toutes nos Plantes</h1>
            </div>
            <ul className="tabs">
                <li></li>
            </ul>
            <ul className="plant-list">
            {plantList.map(({id, cover, name, water, light}) => (
                <PlantItem
                    id={id}
                    key={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                    addItem={addItem}
                />
            ))}
        </ul>
        </section>
    )
}
