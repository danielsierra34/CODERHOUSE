import './ItemCount.css';
import { Item } from '../Item/Item'
import { useState } from 'react'
export const ItemCount = (props) => {
    const [quantity, setQuantity]=useState(0)
    const incrementarCantidad = (e) => { 
        e.stopPropagation()
        if (quantity < props.inventory) setQuantity(quantity + 1)
        else alert(`no hay mas unidades disponibles en inventario`)
        //alert(`estoy incrementando la cantidad hay ${props.inventory} en inventario`)
    }
    const disminuirCantidad = (e) => {
        e.stopPropagation()
        if (quantity > 0) setQuantity(quantity - 1);
        else alert(`no se permiten cantidades negativas`)
        //alert(`estoy disminuyendo la cantidad hay ${props.inventory} en inventario`)
    }
    const addToCart =(e) =>{
        e.stopPropagation()
        if (quantity > 0) 
        alert(`se han agregado ${quantity} unidades de '${props.drink.drink}' a tu orden`)
        else alert(`debes seleccionar por lo menos 1 unidad`)
    }

    return (    
        <div className="ItemCount">
            <div className="quantities">
                <div className="botonDisminuir boton" onClick={disminuirCantidad}>-</div>
                <input className="field" type="text" value={quantity}/>
                <div className="botonIncrementar boton" onClick={incrementarCantidad}>+</div> 
            </div>            
            <div className="addToCart" onClick={addToCart}>Comprar</div>           
        </div>
      )    
      
}
