import { CartProvider } from "./Cart"
import { ProductsProvider } from "./Produtos"

export const Providers = ({ children }) => {
    return <CartProvider>
        <ProductsProvider>
            {children}
        </ProductsProvider>
    </CartProvider>
}