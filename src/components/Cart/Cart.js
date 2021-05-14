import './Cart.css';
import { useEffect,useState,useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import {NavLink} from 'react-router-dom'
import {ItemCart} from '../ItemCart/ItemCart.js'

export const Cart = (props) => {

    const contexto=useContext(CartContext)

    return(
        <div className="Cart"> 
            {contexto.cart.length>0 ? (
                <div>
                {contexto.cart.map((xxx) => (             
                    <ItemCart 
                        id={xxx.id}
                        name={xxx.name}
                        img={xxx.img}
                        price={xxx.price}
                        quantity={xxx.quantity}
                        remove={contexto.removeFromCart}
                        increase={contexto.increase}
                        decrease={contexto.decrease}
                    />        
                ))}
                <div className="total"> 
                    <b>Total:</b> {contexto.total}
                </div>
                <hr/>
                    <NavLink to={`/products/w`}>Seguir Comprando</NavLink> 
                </div>

            ) : (
                <div>
                    <p>Tu carrito se encuentra vacio</p>
                    <NavLink to={`/products/w`}>Ir a comprar</NavLink> 
                </div>
            )}  
                                 
        </div> 
    )
}