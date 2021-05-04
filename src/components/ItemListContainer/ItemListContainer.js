import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList'
import { useEffect,useState } from 'react'

export const ItemListContainer = (props) => {   
    
    const [buscador,setBuscador]=useState([])
    const [items,setItems]= useState([])
    const [filteredItems,setFilteredItems]=useState(items)
    const [textoBoton,setTextoBoton]=useState('Descargar Catálogo');
    const bajarDetalle = (p) =>{
        console.log("bajo a ItemListContainer")
        console.log(p)  
        props.bajarDetalle(p)
    }

    /*useEffect(()=>{
        const newFilteredItems=items
        setFilteredItems(newFilteredItems)
    },[buscador])*/

    /*useEffect(()=>{
        handleClick();
    },[])*/
    
    const handleClick = async ()=>{
        setItems([])
        setTextoBoton("Descargando...")
        let llamarCatalogo = async (nombre) => {
                const xx =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
                const yy=xx.json()               
                return yy
        } 
        const p= await llamarCatalogo(buscador) 
        setItems(p.drinks) 
        setTextoBoton("Actualizar") 
    }
    
    return ( 
        <div className="ItemListContainer">
            
            <input type="text" placeholder="Buscar..." value={buscador} onChange={(e) => setBuscador(e.target.value)}/>
            <input type="button" value={textoBoton} onClick={handleClick}/>
            <ItemList items={items} buscador={buscador} bajarDetalle={bajarDetalle}/>
        </div>        
      )    
      
}
