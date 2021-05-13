import {useContext} from 'react'
import shopping from '../../images/shopping.svg'
import './CartWidget.css';
import {CartContext} from '../../context/CartContext'


export const CartWidget=({quantity=1})=>{

    
    
  

    return(
        <div className="CartWidget">
            <img src={shopping} className="shopping" />
            <span class="quantity" >{quantity}</span>
            <span></span>
        </div>
    )

}