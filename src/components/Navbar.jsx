import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    return (
        <>
            {
                console.log(budgetMode)
            }
            <input type="checkbox" value={budgetMode} onChange={(e) => setBudgetMode(e.target.checked)} />
        </>
    )
}