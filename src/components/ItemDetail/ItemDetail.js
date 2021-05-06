import './ItemDetail.css';
import { useEffect,useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = (props) => {

  const [resultado,setResultado] = useState([])
    return (    
        <div className="ItemDetail {hidden}">
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
          <p className="instructions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <ItemCount />
        </div>
      )    
      
}
