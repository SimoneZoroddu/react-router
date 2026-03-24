import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'


import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import Prodotti from "./pages/Prodotti"
import ChiSiamo from "./pages/ChiSiamo"
import SingleProduct from "./pages/SingleProduct"
import BudgetContext from './contexts/BudgetContext'


function App() {


  const [budgetMode, setBudgetMode] = useState(false)


  return (
    <>
      <BudgetContext.Provider value={{budgetMode, setBudgetMode}} >
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
      </BudgetContext.Provider>
    </>
  )
}

export default App