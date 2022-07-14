import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [productsCart, setProductsCart] = useState(JSON.parse(localStorage.getItem('@KenzieShop: Cart')) || []);
    
    const addToCart = (product) => {
        let newCart = null
        if(productsCart.map(productCart=>productCart.title).includes(product.title)){
            newCart = productsCart.map(productCart => productCart.title === product.title ? 
                {...productCart, quantity: productCart.quantity+1} : productCart)
            setProductsCart(newCart)
        }else{
            newCart = [...productsCart, {...product, quantity: 1}]
            setProductsCart(newCart)
        }
        localStorage.setItem('@KenzieShop: Cart', JSON.stringify(newCart))
    }

    const itensInCart = productsCart.reduce((acc, cv)=>acc+cv.quantity,0)

    const cleanCart = () =>{
        setProductsCart([])
        localStorage.removeItem('@KenzieShop: Cart')
    }

    const total = productsCart.reduce((acc,cv)=> acc+(cv.quantity*cv.price), 0)
    console.log(total)
    return <CartContext.Provider value={{ productsCart, total, cleanCart, addToCart, itensInCart }}> {children} </CartContext.Provider>

}