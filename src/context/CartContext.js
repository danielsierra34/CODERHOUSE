import {createContext,useEffect,useState } from 'react'

export const CartContext = createContext()
export const CartProvider = (props) => {
    
    const [cart,setCart]=useState([])
    const [quantity,setQuantity]=useState(0)
    const [prueba,setPrueba]=useState({"nombre":"daniel","apellido":"sierra"})
    const handleCartClick = () =>{
        console.log("funciono")
    }
    const addToCart = (item,cantidad) => {  
        if(cart.some(e => e.id === item.idDrink)){
            alert("el producto ya existe en tu carrito")
        }else{
            setCart([...cart,{"id":item.idDrink, "name":item.strDrink, "img":item.strDrinkThumb, "price" : item.precio, "quantity": cantidad   }])
            alert("el producto se agrego a tu carrito")
        }
        
    }

 
    
    const removeFromCart = (itemId) => {
        alert("remove from cart")
        /*const newCart = cart.filter((item) => item.id !== itemId)
        setCart(newCart)*/
    }

    useEffect(() =>{
        setQuantity(cart.length)
        console.log(cart)
    },[cart])


    
    return (
        <CartContext.Provider value={{addToCart:addToCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

