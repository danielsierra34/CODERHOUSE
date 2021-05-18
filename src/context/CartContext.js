import {createContext,useEffect,useState } from 'react'

export const CartContext = createContext()
export const CartProvider = (props) => {
    
    const [cart,setCart]=useState([])
    //const [change,setChange]=useState([])
    const [quantityCart,setQuantityCart]=useState(0)
    const [total,setTotal]=useState(0)
    const [prueba,setPrueba]=useState({"nombre":"daniel","apellido":"sierra"})
    const handleCartClick = () =>{
        console.log("funciono")
    }
    const addToCart = (item,cantidad) => {  
        let newCart=[...cart];
        if(newCart.some(e => e.id === item.idDrink)){
            alert("el producto ya existe en tu carrito")
        }else{
            setCart([...newCart,{"id":item.idDrink, "name":item.strDrink, "img":item.strDrinkThumb, "price" : item.precio, "quantity": cantidad   }])
            alert("el producto se agrego a tu carrito")
        }        
    }
      
    const removeFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)
        setCart(newCart)
    }

    
    useEffect(() =>{
        setQuantityCart(cart.length)
        //const newCart=cart
        setTotal(cart.reduce(( total, currentValue ) =>total + currentValue.price*currentValue.quantity,0))
        //setCart([newCart])
        //setChange(0)
    },[cart])

    const increase = (itemId) => {
        const newCart=cart
        newCart[newCart.findIndex(x => x.id === itemId)].quantity ++ //intentar con el ++ al final
        setCart([...newCart])
        //setChange(1)
    }

    const decrease = (itemId) => {
        const newCart=cart
        if(newCart[newCart.findIndex(x => x.id === itemId)].quantity>1){
            --newCart[newCart.findIndex(x => x.id === itemId)].quantity
            setCart([...newCart])
        }else{
            removeFromCart(itemId)
        }
        //setChange(1)
    }

    
    return (
        <CartContext.Provider value={{addToCart:addToCart, cart:cart,removeFromCart:removeFromCart, quantityCart:quantityCart, total:total, decrease:decrease, increase:increase }}>
            {props.children}
        </CartContext.Provider>
    )
}

