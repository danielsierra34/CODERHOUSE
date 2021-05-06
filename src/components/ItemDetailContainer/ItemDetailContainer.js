import './ItemDetailContainer.css';
import {ItemDetail} from '../ItemDetail/ItemDetail'

import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'


export const ItemDetailContainer = (props) => {

  const {id} = useParams()
  const [idP,setIdP]=useState([])
  const [detail,setDetail]= useState([])
  const [textoDetalle,setTextoDetalle]= useState([])
  const [detalle,setDetalle] = useState([])

  useEffect(()=>{
    handleClick()
  },[id])

  const handleClick = async ()=>{ 
    setDetail([])
    setIdP(props.id)
    if(id!=""){
        let llamarDetalle = async () => {
            const xx =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const yy=xx.json()               
            return yy
        } 
        const p= await llamarDetalle() 
        setDetalle(p.drinks[0])
    }        
}


    return (    
      <div className="ItemDetailContainer">
        <ItemDetail detalle={detalle}/>        
      </div>
    )    
      
}
/**/