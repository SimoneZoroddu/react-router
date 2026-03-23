import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/Homepage"
import Prodotti from "./pages/Prodotti"
import ChiSiamo from "./pages/Chi siamo"
import SingleProduct from "./pages/SingleProduct"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/prodotti/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App