import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount'
export const Item = (props) => {
    const handleProduct = () => 
    alert(`Hola soy una ${props.item} de la marca ${props.brand} y mi precio es de  ${props.price}`)

    return(
    <div className="item" onClick={handleProduct}>
        <ul>
            <li><b>Item:</b>{props.item}</li>
            <li><b>Brand:</b>{props.brand}</li>
            <li><b>Price:</b>{props.price}</li>
            <li><b>Available:</b>{props.inventory}</li>
        </ul>
        <p className="clickMe">click me</p> 
        <ItemCount inventory={props.inventory}/>      
    </div>
    )
}




export const ItemListContainer = (props) => {
    
    return (
        
        props.products.map((xxx) => ( 
            
            <Item
                item={xxx.item}
                price={xxx.price}
                brand={xxx.brand}
            />
        
        )
       
      ))    
      
}

