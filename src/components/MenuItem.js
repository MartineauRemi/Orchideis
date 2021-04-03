import React from 'react'
import {useMenuContext} from "../contexts/MenuProvider"

export default function MenuItem({label, link}) {
    const {activeLink, setActiveLink} = useMenuContext()
    
    function onClickHandler(){setActiveLink(link)}

    return (
        <li
            className={activeLink === link? "active" : ""}
            onClick={onClickHandler}
        >
                <a href={link}>{label}</a>
        </li>
    )
}