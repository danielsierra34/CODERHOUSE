import './ItemDetail.css';
import { useEffect,useState } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = (props) => { 

  const [resultado,setResultado] = useState([])
  const [cantidad,setCantidad] = useState(0)
  useEffect(()=>{
    console.log("cambio la cantidad " + cantidad)
  },[cantidad])
  
 
  
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
          </div>
          <ItemCount cantidad={cantidad} />
        </div>
      )    
      
}
