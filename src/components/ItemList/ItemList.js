import './ItemList.css';
import { Item } from '../Item/Item'
import { useState } from 'react'

export const ItemList = (props) => {

    const bajarDetalle = (p) =>{
        console.log("bajo a ItemList")
        console.log(p)   
        props.bajarDetalle(p)
    }
    
    
    
    return (  
        <div className="ItemList"> 
            {
                props.items.map((xxx) => (             
                    <Item 
                        id={xxx.idDrink}
                        drink={xxx.strDrink}
                        category={xxx.strCategory}
                        glass={xxx.strGlass}
                        image={xxx.strDrinkThumb}
                        bajarDetalle={bajarDetalle}
                    />        
                ))
            }       
        </div> 
      )         
}
