import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'





export const Item = (props) => {
    
    const [idP,setIdP]=useState([])
    const [detail,setDetail]= useState([])
    const [textoDetalle,setTextoDetalle]= useState([])


    const handleClick = async ()=>{ 
        setDetail([])
        setIdP(props.id)
        if(idP!=""){
            let llamarDetalle = async () => {
                const xx =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idP}`)
                const yy=xx.json()               
                return yy
            } 
            const p= await llamarDetalle() 
            props.bajarDetalle(p.drinks[0])
        }        
    }


    return(
    <div className="item">
        <h3>{props.drink}</h3>
        <div className="drinkImg"><img src={props.image}/></div>
        <hr/>
        <ul>             
            <li><b>ID:</b>{props.id}</li>
            <li><b>Category:</b>{props.category}</li>
            <li><b>Glass:</b>{props.glass}</li>
        </ul>
        <br/>
        <ItemCount inventory={100} drink={props}/>
        <div className="verMas">
        <Link to={`/detail/:${props.drink}`}> Home</Link> 
        </div>        
    </div>
    )
}