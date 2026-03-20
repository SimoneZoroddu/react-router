import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contacs from "./pages/Contacts"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App