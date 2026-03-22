import {Link} from 'react-router-dom'

export default function AppFooter() {


    return (

        <footer id='bg_footer'>
            <div className="container py-5">
                <div className="row">
                    <div className="col text_funny">
                        <h3>Perché <span className='indie-flower-regular'>Sumba Teka</span></h3>
                        <ul className='list-unstyled'>
                            <li className='py-1'><Link className='list-group-item d-inline'>Chi Siamo?</Link></li>
                            <li className='py-1'><Link className='list-group-item d-inline'>Perché sceglierci</Link></li>
                            <li className='py-1'><Link className='list-group-item d-inline'>Negozi Associati</Link></li>
                        </ul>
                    </div>
                    <div className="col text_funny">
                        <h3>Assistenza</h3>
                        <ul className='list-unstyled'>
                            <li className='py-1'><Link className='list-group-item d-inline'>Contatti</Link></li>
                            <li className='py-1'><Link className='list-group-item d-inline'>Segnala un Errore</Link></li>
                            <li className='py-1'><Link className='list-group-item d-inline'>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col text_funny">
                        <h3>Lingua</h3>
                        <ul className='list-unstyled'>
                            <li className='py-1'><Link className='list-group-item d-inline'>Italiano</Link></li>
                            <li className='py-1'><Link className='list-group-item d-inline'>Inglese</Link></li>
                            <li className='py-1'><Link className='list-group-item d-inline'>Kongo</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}