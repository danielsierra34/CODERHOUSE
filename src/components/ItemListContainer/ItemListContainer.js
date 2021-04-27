import './ItemListContainer.css';
import { Item } from '../Item/Item'

export const ItemListContainer = (props) => {
    
    return (
        
        props.products.map((xxx) => ( 
            
            <Item
                item={xxx.item}
                price={xxx.price}
                brand={xxx.brand}
                inventory={xxx.inventory}
            />
        
        )
       
      ))    
      
}
