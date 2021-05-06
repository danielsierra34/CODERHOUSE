import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList'
import { useEffect,useState } from 'react'
//import {useParams} from 'react-router'


export const ItemListContainer = (props) => {   

    //const {busc} = useParams()
    const [buscador,setBuscador]=useState([])
    const [items,setItems]= useState([])
    const [filteredItems,setFilteredItems]=useState(items)
    const [textoBoton,setTextoBoton]=useState('Descargar Catálogo');
    const bajarDetalle = (p) =>{
        console.log("bajo a ItemListContainer")
        console.log(p)  
        props.bajarDetalle(p)
    }


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
        //setTextoBoton("Descargando...")
        let llamarCatalogo = async (nombre) => {
                const xx =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
                const yy=xx.json()               
                return yy
        } 
        const p= await llamarCatalogo(buscador) 
        
        setItems((p.drinks)?p.drinks:[]) 
        //setTextoBoton("Actualizar") 
    }
    
    return ( 
        <div className="ItemListContainer">  

           
            <input type="text" className="formControl" placeholder="Buscar..." value={buscador} onChange={(e) => setBuscador(e.target.value)}/>
            <div className="container">
            <ItemList items={items} buscador={buscador} bajarDetalle={bajarDetalle}/>
            
            </div>
             
        </div>        
      )    
      
}
