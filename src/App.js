import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Menu from "./pages/menu/menu"
import About from "./pages/about/about"
import OrderOnline from "./pages/order-online/order-online"


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderOnline />} />
      </Routes>
  )
}

export default App