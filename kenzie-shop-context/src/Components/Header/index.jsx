import { Link } from "react-router-dom";
import { Header } from "./style";
import { BsCart3 } from 'react-icons/bs'
import { RiLoginBoxLine } from 'react-icons/ri'
import { BiHome } from 'react-icons/bi'
import { AiOutlineShop } from 'react-icons/ai'
import { CartContext } from "../../Providers/Cart";
import { useContext } from "react";
export const HeaderComponet = ({home}) => {
    const {itensInCart} = useContext(CartContext);
    console.log(itensInCart)
    return <Header>
        <h1><AiOutlineShop/>Kenzie Shop</h1>
        <nav>
            <h2>{
                home ? 
                    <>
                        <Link to={'/cart'}>
                                <div>
                                    <BsCart3/> 
                                    {itensInCart > 0 && <span>{itensInCart}</span>}
                                </div>
                                Carrinho
                            </Link>
                    </>
                :
                    <>
                        <Link to={'/'}><BiHome/> Home</Link>
                    </>
            }</h2>
            <h2>
            <Link to='#'>
                <RiLoginBoxLine/> Sair
            </Link>
            </h2>
        </nav>
    </Header>
}