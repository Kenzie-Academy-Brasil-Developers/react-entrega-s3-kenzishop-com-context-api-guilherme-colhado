import { useContext } from "react";
import { FinishComponent } from "../../Components/Finish";
import { HeaderComponet } from "../../Components/Header"
import { TableCellComponent } from "../../Components/TableCell";
import { CartContext } from "../../Providers/Cart";
import { Cart } from "./style"

export const CartPage = () => {
    const { productsCart } = useContext(CartContext);
    return <>
        <HeaderComponet/>
        <Cart>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Imagem do Produto</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsCart.length ? 
                            productsCart.map((product, index) => <TableCellComponent key={index} product={product}/>) 
                            :
                            <tr>
                                <td colSpan={4}><h1>Adicione produtos ao carrinho</h1></td>
                            </tr> 
                        }
                    </tbody>
                </table>
            </div>
            <FinishComponent/>
        </Cart>
    </>
}