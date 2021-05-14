import './ItemDetail.css';
import { useEffect,useState,useContext } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {CartContext} from '../../context/CartContext'
import {NavLink} from 'react-router-dom'
export const ItemDetail = (props) => { 
   
  const contexto=useContext(CartContext)

  const handleCartClick = (cantidad) =>{
      contexto.addToCart(props.detalle,cantidad)
  }
 

    return (    
        <div className="ItemDetail">
          <h2>{props.detalle.strDrink}</h2>
          <hr/>
          <div className="drinkImgn">
            <img src={props.detalle.strDrinkThumb}/>
          </div>
          <div className="variables">
            <p className="category"><b>Categoria:  </b>{props.detalle.strCategory}</p>
            <p className="copa"><b>Copa:  </b>{props.detalle.strGlass}</p>
            <p className="tipo"><b>Tipo:  </b>{props.detalle.strAlcoholic}</p>
            <p className="tipo"><b>Price:  </b>$ {props.detalle.precio}</p>
          </div>
          
          <br/>
          <div className="description">
            <p className="instructions"><b>Instrucciones:</b>{props.detalle.strInstructions}</p>
          </div>
          
          <ItemCount onAdd={handleCartClick}/>
          <NavLink to={`/products/w`}>Seguir comprando</NavLink> 
        </div>
      )    
      
}