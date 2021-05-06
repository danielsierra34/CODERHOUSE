import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'





export const Item = (props) => {
    return(
    <div className="item">
        <div className="subItem">
            <h3>{props.drink}</h3>
            <div className="drinkImg"><img src={props.image}/></div>
            <hr/>
            <ul>             
                <li><b>ID:</b>{props.id}</li>
                <li><b>Category:</b>{props.category}</li>
                <li><b>Glass:</b>{props.glass}</li>
            </ul>
            <br/>
            
            <div className="verMas">
            <NavLink to={`/detail/${props.id}`} className="verMas"> Seleccionar</NavLink> 
            </div>  
        </div>      
    </div>
    )
}