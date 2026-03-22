import { NavLink } from 'react-router-dom'
import menuheader from '../assets/menuheader'


export default function AppHeader() {




    return (
        <header id='bg_header' className='d-flex justify-content-between align-items-center '>
            <h1 className='indie-flower-regular px-4 pt-2 text_confident'>Sumba Teka</h1>
            <nav>
                {
                    menuheader.map(item => (
                        <NavLink className='mx-3 pacifico-regular d-inline text_confident' key={item.id} to={item.path}>{item.text}</NavLink>
                    ))
                }
            </nav>
        </header>
    )
}