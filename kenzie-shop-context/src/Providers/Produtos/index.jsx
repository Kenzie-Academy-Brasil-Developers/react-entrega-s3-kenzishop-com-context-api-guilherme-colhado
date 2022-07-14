import { createContext } from "react";
import Cell1 from "../../Imgs/Cell1.jpg";
import Cell2 from "../../Imgs/Cell2.jpg";
import Cell3 from "../../Imgs/Cell3.jpg";
import Cell4 from "../../Imgs/Cell4.jpg";

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const products = [
        {
            title: 'Xiaomi Redmi Note 10S',
            price: 1999.99,
            img: Cell1
        },
        {
            title: 'Apple iPhone 11',
            price: 4099.00,
            img: Cell2
        },
        {
            title: 'Smartphone Motorola Moto G22',
            price: 1699.00,
            img: Cell3
        },
        {
            title: 'Smartphone Nokia C20',
            price: 999.00,
            img: Cell4
        }
    ];

    return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>

}