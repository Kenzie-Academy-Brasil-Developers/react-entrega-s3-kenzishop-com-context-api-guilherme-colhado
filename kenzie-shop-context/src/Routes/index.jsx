import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { CartPage } from '../Pages/Cart'

export const RoutesComponent = () => {
    return <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
    </Routes>

}