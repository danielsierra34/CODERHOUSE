import {createContext} from 'react'
import { useEffect,useState } from 'react'

export const CartContext = createContext()
export const CartProvider = (props) => {
    const [prueba,setPrueba]=useState({
        "nombre":"daniel",
        "apellido":"sierra"
    })
    return (
        <CartContext.Provider value={{
            prueba:prueba
        }}>
            {props.children}
        </CartContext.Provider>
    )
}