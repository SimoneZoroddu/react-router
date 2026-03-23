import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import axios from "axios";

const urlProduct = 'https://fakestoreapi.com/products'


export default function SingleProduct() {

    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState([])


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setSingleProduct([response.data])
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <>

            <main className="bg_main pb-4">
                <div className="container bg_confident">
                    <div className="row">
                        {
                            singleProduct.map(item => (
                                <div className="col g-4 text-center" key={item.id}>
                                    <div className="card bg_confident border-0 h-100 position-relative text-white">
                                        <h5 className="card-title text_funny" style={{ height: "4rem" }} >{item.title}</h5>
                                        <img src={item.image} className="card-img-top bg-white" alt={item.title} />
                                        <div className="card-body">
                                            <h6 className="card-subtitle mb-2 text-muted ">{item.category}</h6>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text text-primary">{item.price} €</p>
                                            <div className="position-absolute bottom-0 end-0">Voto:{item.rating.rate} Recensioni: {item.rating.count}</div>
                                            <Link to={`/prodotti`}>Dettagli Prodotto</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>

        </>
    )
}