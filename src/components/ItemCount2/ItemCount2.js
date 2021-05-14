import './ItemCount2.css';
import { Item } from '../Item/Item'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
export const ItemCount2 = ({ quantity , increase, decrease}) => {

    
    let [agregado,setAgregado]= useState(false)

    


    return (    
        <div className="ItemCount">
            <div>
                <div className="quantities">
                    <div className="botonDisminuir boton1" onClick={decrease}>-</div>
                    <input className="field" type="text" value={quantity}/>
                    <div className="botonIncrementar boton1" onClick={increase}>+</div> 
                </div>
            </div>
        </div>
      )    
      
}
