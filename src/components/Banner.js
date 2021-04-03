import React from 'react'
import "../styles/Banner.css"

export default function Banner({logo}) {
    return (
        <div className="banner">
            {logo}
            <h1 className="banner__title">Orchideis</h1>
        </div>
    )
}
