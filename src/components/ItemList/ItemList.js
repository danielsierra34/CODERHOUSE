import './ItemList.css';
import { Item } from '../Item/Item'

export const ItemList = (props) => {

    
    
    return (  
        <div className="ItemList"> 
            {
                props.products.map((xxx) => (             
                    <Item
                        item={xxx.item}
                        price={xxx.price}
                        brand={xxx.brand}
                        inventory={xxx.inventory}
                    />        
                ))
            }       
        </div> 
      )         
}
