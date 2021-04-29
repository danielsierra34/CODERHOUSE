import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList'
import { useState } from 'react'

export const ItemListContainer = (props) => {
    const [buscador,setBuscador]=useState([])
    const [tragos,setTragos]=useState([])
    const [items,setItems]= useState([])
    const [textoBoton,setTextoBoton]=useState('Descargar Catálogo');
    const descargarCatalogo=()=>{
        setItems(props.items) 
        setTextoBoton("Actualizar")
    }
    const handleClick = async ()=>{
        setItems([])
        setTextoBoton("Descargando...")
        //Solo TimeOut
        /*setTimeout(()=>{
            descargarCatalogo()
        },2000) */

        //Version Antigua
        /*let llamarProductos = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },2000) 
        }).then((success)=>{
                descargarCatalogo()        
        }).catch((e)=>{
            setTextoBoton("Descargar")
            alert("Hay problemas descargando el catalogo") 
        })*/
        //Version ECMAScript6
        let llamarCatalogo = async (nombre) => {
            try{
                const xx =await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
                const yy=xx.json()
                descargarCatalogo()
                return yy
            }catch{
                console.warn("error") 
            }finally{
                console.log("finalizada la descarga")
            }
        } 
        const p= await llamarCatalogo(buscador) 
        console.log(p)
        setTragos(p.drinks)

    }

    
    return ( 
        <div className="ItemListContainer">
            <ItemList products={items}/>
            <input type="text" placeholder="Buscar..." value={buscador} onChange={(e) => setBuscador(e.target.value)}/>
            <input type="button" value={textoBoton} onClick={handleClick}/>
            {tragos && tragos.length>0?(tragos.map((trago) => <p>{trago.strDrink}</p>)):("no hay nada")}
        </div>
        
      )    
      
}
