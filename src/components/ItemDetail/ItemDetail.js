import './ItemDetail.css';
import { useEffect,useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = (props) => { 

   
  const onAdd = (e) => {
    alert(e)
  }

 
  
    return (    
        <div className="ItemDetail">
          <h2>{props.detalle.strDrink}</h2>
          <hr/>
          <div className="drinkImgn">
            <img src={props.detalle.strDrinkThumb}/>
          </div>
          <div className="variables">
            <p className="category"><b>Categoria:</b>{props.detalle.strCategory}</p>
            <p className="copa"><b>Copa:</b>{props.detalle.strGlass}</p>
            <p className="tipo"><b>Tipo:</b>{props.detalle.strAlcoholic}</p>
          </div>
          
          <br/>
          <div className="description">
          <p className="instructions"><b>Instrucciones:</b>{props.detalle.strInstructions}</p>
          </div>
          <ItemCount onAdd={onAdd}/>
        </div>
      )    
      
}
