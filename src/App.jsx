import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/Homepage"
import Prodotti from "./pages/Prodotti"
import ChiSiamo from "./pages/Chi siamo"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App