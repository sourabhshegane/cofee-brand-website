import React from 'react'
import MenuCard from '../../components/MenuCard/MenuCard';
import './Menu.css'
import {menuList} from './MenuList'

export default function Menu() {

    const getMenuItems = menuList.map(({ name, price,description }, index) => {
        return (
            <MenuCard itemName={name} itemPrice = {price} itemDescription = {description}/>
        );
    });

    return (
        <div className="menu-container">
            <div className="menu-title-container">
                <h1 className="menu-main-title">
                    What kind of Coffee we serve you
                </h1>
                <h1 className="menu-sub-title">
                    We put our love and passion into our coffee
                </h1>
            </div>
            <div className="menu-items-container">
                {getMenuItems}
            </div>
        </div>
    )
}
