import React from 'react'
import './MenuCard.css'

export default function MenuCard(props) {
    return (
        <div className="menu-card-container">
            <div className="menu-card-top-row">
                <h1 className="menu-item-name">{props.itemName}</h1>
                <h1 className="menu-item-price">{props.itemPrice}</h1>
            </div>
            <h1 className="menu-item-description">
                {props.itemDescription}
            </h1>
        </div>
    )
}
