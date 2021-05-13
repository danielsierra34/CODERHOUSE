import {useContext} from 'react'
import shopping from '../../images/shopping.svg'
import './CartWidget.css';
import {CartContext} from '../../context/CartContext'


export const CartWidget=({quantity=3})=>{

    const {prueba}=useContext(CartContext)
    
    const handleCartClick = () =>{
        console.log("-")
        console.log(prueba)
        console.log("-")
    }
    
    console.log(prueba)

    return(
        <div className="CartWidget">
            <img src={shopping} className="shopping" />
            <span class="quantity" onClick={handleCartClick}>{quantity}</span>
        </div>
    )

}