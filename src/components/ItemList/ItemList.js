import './ItemList.css';
import { Item } from '../Item/Item'
import { useState } from 'react'

export const ItemList = (props) => {

     
    
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
                        
                    />        
                ))
            }       
        </div> 
      )         
}
