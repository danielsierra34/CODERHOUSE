import './ItemCount.css';
import { Item } from '../Item/Item'
import { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
export const ItemCount = ({onAdd}) => {

    
    let [cantidad,setCantidad]= useState(0)

    const incrementarCantidad = (e) => { 
        e.stopPropagation()
        if (cantidad < 5){
            setCantidad(++cantidad)
        }            
        else alert(`no hay mas unidades disponibles en inventario`)
    }

    const disminuirCantidad = (e) => {
        e.stopPropagation()
        if (cantidad > 0){
            setCantidad(--cantidad)
        }    
        else alert(`no se permiten cantidades negativas`)
    }

    useEffect((e)=>{
        onAdd(cantidad) 
    },[cantidad])




     /*const goToCart =(e) =>{
        e.stopPropagation()
        if (quantity > 0) {
        alert(`se han agregado ${quantity} unidades de producto a tu orden`)
        }
        else alert(`debes seleccionar por lo menos 1 unidad`)
    }*/
    
    return (    
        <div className="ItemCount">
            <div className="quantities">
                <div className="botonDisminuir boton" onClick={disminuirCantidad}>-</div>
                <input className="field" type="text" value={cantidad}/>
                <div className="botonIncrementar boton" onClick={incrementarCantidad}>+</div> 
            </div>
            <div onClick={onAdd}>
                add to Cart
            </div>
        </div>
      )    
      
}
