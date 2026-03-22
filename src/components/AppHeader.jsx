import { NavLink } from 'react-router-dom'
import menuheader from '../assets/menuheader'


export default function AppHeader() {




    return (
        <header id='bg_header'>
            <nav>
                {
                    menuheader.map(item => (
                        <NavLink key={item.id} to={item.path}>{item.text}</NavLink>
                    ))
                }
            </nav>
        </header>
    )
}