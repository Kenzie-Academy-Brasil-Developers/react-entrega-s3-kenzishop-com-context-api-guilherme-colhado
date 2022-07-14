import { useContext } from "react";
import { CartContext }  from '../../Providers/Cart'
import { ButtonComponent } from "../Button";
import { Finish } from "./style";

export const FinishComponent = () =>{
    const { itensInCart, cleanCart, total } = useContext(CartContext);
    return <Finish>
        <div>
            <h2>
                Resumo do Pedido
            </h2>
        </div>
        <div>
            <h3>Itens: {itensInCart}</h3>
            <h3>Total: {total.toFixed(2).toLocaleString('pt-BR')}</h3>
            <ButtonComponent cb={cleanCart}>Limpar carrinho</ButtonComponent>
        </div>
    </Finish>
}