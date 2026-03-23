import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import axios from "axios";

const urlProduct = 'https://fakestoreapi.com/products'


export default function Prodotti() {
    const [productArray, setProductArray] = useState([])




    useEffect(() => {
        axios.get(urlProduct)
            .then(response => {
                setProductArray(response.data)
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
                    <div className="row row-cols-3">
                        {
                            productArray.map(singleProduct => (
                                <div className="col g-4 text-center" key={singleProduct.id}>
                                    <div className="card bg_confident border-0 h-100 position-relative text-white">
                                        <h5 className="card-title text_funny" style={{height: "4rem"}} >{singleProduct.title}</h5>
                                        <img src={singleProduct.image} className="card-img-top bg_funny" alt={singleProduct.title}  style={{height: "30rem"}}/>
                                        <div className="card-body">
                                            <h6 className="card-subtitle mb-2 text-muted ">{singleProduct.category}</h6>
                                            <p className="card-text">{singleProduct.description}</p>
                                            <p className="card-text text-primary">{singleProduct.price} €</p>
                                            <div className="position-absolute bottom-0 end-0">Voto:{singleProduct.rating.rate} Recensioni: {singleProduct.rating.count}</div>
                                            <Link to={`/prodotti/${singleProduct.id}`}>Dettagli Prodotto</Link>
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