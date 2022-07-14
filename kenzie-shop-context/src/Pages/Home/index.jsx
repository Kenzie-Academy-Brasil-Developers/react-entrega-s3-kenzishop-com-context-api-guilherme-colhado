import { useContext } from "react"
import { CardCellComponent } from "../../Components/CardCell"
import { HeaderComponet } from "../../Components/Header"
import { ProductsContext } from "../../Providers/Produtos"
import { Home } from "./style"

export const HomePage = () => {
    const { products } = useContext(ProductsContext)
    return <>
        <HeaderComponet home/>
        <Home>
            {products.map((product, index)=><CardCellComponent key={index} product={product}/>)}
        </Home>
    </>
}