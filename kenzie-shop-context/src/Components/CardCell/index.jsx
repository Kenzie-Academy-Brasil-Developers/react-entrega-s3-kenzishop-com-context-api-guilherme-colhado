import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { ButtonComponent } from "../Button"
import { CardCell } from "./style"

export const CardCellComponent = ({product}) => {
    const {addToCart} = useContext(CartContext);
    return <CardCell>
        <div>
            <figure>
                <img src={product.img} alt={product.title} />
            </figure>
            <div>
                <h2>{product.title}</h2>
                <p>R$ {product.price}</p>
            </div>
        </div>
        <ButtonComponent cb={()=>addToCart(product)}>Comprar</ButtonComponent>
    </CardCell>
}