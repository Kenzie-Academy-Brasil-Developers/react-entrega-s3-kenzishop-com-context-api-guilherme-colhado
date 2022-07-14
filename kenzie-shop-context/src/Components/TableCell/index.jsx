import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { TableCell } from "./style"

export const TableCellComponent = ({product}) => {
    return <TableCell>
        <td><img src={product.img} alt={product.title} /></td>
        <td><h3>{product.title}</h3></td>
        <td><h4>{product.price}</h4></td>
        <td><h4>{product.quantity}</h4></td>
    </TableCell>
}