import React, {useState} from 'react'
import "../styles/Menu.css"
import Banner from "./Banner"
import {AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai"
import {GiVineFlower} from "react-icons/gi"
import Hamburger from './Hamburger'
import MenuItem from './MenuItem'
import {useMenuContext} from "../contexts/MenuProvider"

export default function Menu() {
    const {showMenu} = useMenuContext()
    
    return (
        <div className="menu-container">
            <Banner
                logo={<GiVineFlower className="icon--logo"/>}
                title="Orchideis"
            />
            <ul className={`main-menu ${showMenu? "main-menu--active" : ""}`}>
                <MenuItem
                    label="Accueil"
                    link="#"
                />
                <MenuItem
                    label="Nos plantes"
                    link="#shopping-list"
                />
                <MenuItem
                    label="Contact"
                    link="#footer"
                />
            </ul>
            <div className="menu-buffer"></div>
            <ul className="user-menu">
                <li>
                    <a href="#">
                        <AiOutlineShoppingCart className="icon--menu-item"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AiOutlineHeart className="icon--menu-item"/>
                    </a>
                </li>
                <Hamburger/>
            </ul>
        </div>
    )
}
