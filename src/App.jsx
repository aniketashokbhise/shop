import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product_det from "./pages/Product_det"
import Create_account from "./pages/Create_account"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

// import OrderSuccess from "./pages/Order_list"
import Order_list from "./pages/Order_list"
import Order_det from "./pages/Order_det"
import Profile from "./pages/Profile"

function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/product_det/:product_id" element={<Product_det/>}></Route>
      <Route path="/create_account" element={<Create_account/>}></Route>
      <Route path="/login"element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/Order_list" element={<Order_list/>}></Route>
      <Route path="/Order_det/:order_id" element={<Order_det/>}></Route>
      <Route path="/profile"element={<Profile/>}></Route>

    </Routes>
    </BrowserRouter>

  )
}

export default App
