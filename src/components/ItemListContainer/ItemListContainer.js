import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList'
import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'


export const ItemListContainer = (props) => {   
    const {search} = useParams()
    const [buscador,setBuscador]=useState([])
    const [items,setItems]= useState([])
    const [filteredItems,setFilteredItems]=useState(items)
    const [textoBoton,setTextoBoton]=useState('Descargar Catálogo');

    useEffect(()=>{
       setBuscador(search)      
    },[search])

    useEffect(()=>{
        handleClick()
    },[buscador])

    /*useEffect(()=>{
        setBuscador(busc)
    },[busc])*/

    /*useEffect(()=>{
        handleClick();
    },[])*/
    
    const handleClick = async ()=>{
        setItems([])
        let llamarCatalogo = async (nombre) => {
                const xx =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buscador}`)
                const yy=xx.json()               
                return yy
        } 
        const p= await llamarCatalogo(buscador)         
        setItems((p.drinks)?p.drinks:[]) 
    }
    
    return ( 
        
        <div className="ItemListContainer">  
            <input type="text" className="formControl" placeholder="Buscar..." value={buscador} onChange={(e) => setBuscador(e.target.value)}/>
            <div className="container">
            <ItemList items={items} buscador={buscador}/>            
            </div>             
        </div>        
      )          
}
