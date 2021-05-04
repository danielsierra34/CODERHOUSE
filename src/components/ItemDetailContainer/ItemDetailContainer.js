import './ItemDetailContainer.css';
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useEffect,useState } from 'react'
export const ItemDetailContainer = (props) => {

 useEffect(()=>{
    console.log("llego a ItemDetailContainer") 
    console.log(props.detalle)   
  },[props.detalle])



    return (    
      <div className="ItemDetailContainer">
        <ItemDetail detalle={props.detalle}/>
      </div>
    )    
      
}
/**/