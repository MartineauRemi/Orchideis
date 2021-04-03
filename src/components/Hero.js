import React, {useState, useEffect} from 'react'
import "../styles/Hero.css"
import {useMenuContext} from "../contexts/MenuProvider"


export default function Hero() {
    const {setActiveLink} = useMenuContext()

    const [offset, setOffset] = useState(0)
    //update the menu active link when scrolling through the application
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    console.log(offset)

    
    

    
    return (
        <div id="home" className="hero">
            <div className="glass"></div>
            <div className="hero__content">
                <h1>Des plantes d'intérieur</h1> 
                <h2>pour embellir votre lieu de vie</h2>
                <a
                    className="btn btn--link"
                    href="#shopping-list"
                    onClick={() => setActiveLink("#shopping-list")}
                >
                        Voir notre collection
                </a>
                <svg className="hero-style-elt" width="100%" height="auto">
                        <polygon points="0,100 0,450 750,450 850,350 850,0 100,0" style={{fill:"none",
                                                                      stroke:"#7aac95",
                                                                      strokeWidth:"5px"
                                                                    }}/>
                    </svg>
            </div>
        </div>
    )
}
