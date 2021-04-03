import React from 'react'
import "../styles/Hamburger.css"
import {useMenuContext} from "../contexts/MenuProvider"

export default function Hamburger() {
    const {showMenu, setShowMenu} = useMenuContext()
    const onClickHandler = () => setShowMenu(!showMenu)
    
    return (
        <div className={`hamburger ${showMenu? "hamburger--active" : ""}`} onClick={onClickHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
