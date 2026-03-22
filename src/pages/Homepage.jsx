

export default function Home() {




    return (
        <>

            <main className="bg_main">
                <div className="container">
                    <div className="row py-4">
                        <div className="col text-center text-white">
                            <h1>Il tuo <span className="indie-flower-regular text_confident">Shop</span> di <span className="text_funny">Fiducia</span> <br /> con <span className="text-danger-emphasis">Offerte</span> diverse ogni giorno e sconti pazzeschi</h1>
                        </div>
                    </div>
                    <div className="row py-4 text-center text-white gap-5">
                        <div className="col border rounded p-3 bg_confident">
                            <h3 className="text_funny">🚚 Consegna veloce</h3>
                            <p className="pt-4">Per tutti gli ordini sopra i 20€</p>
                        </div>
                        <div className="col border rounded p-3 bg_confident">
                            <h3 className="text_funny">🪙 Spedizione Gratuita</h3>
                            <p className="pt-4">Per tutti gli ordini sopra i 20€</p>
                        </div>
                        <div className="col border rounded p-3 bg_confident">
                            <h3 className="text_funny">🪖 Super Sicuro</h3>
                            <p className="px-4 py-2">Minima Garanzia per tutti i prodotti di 14 giorni dall arrivo del prodotto</p>
                        </div>
                    </div>
                    <div className="row py-4 text-center text-white gap-5">
                        <div className="col border rounded p-3 bg_confident">
                            <h2 className="text-danger-emphasis">💎 MIGLIOR OFFERTA DEL GIORNO</h2>
                            <div className="card bg_confident border-0" >
                                <h5 className="card-title text_funny">Tablet 24 Pollici</h5>
                                <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"><span className="text_funny">Design</span> unico nel suo genere <br /> Perfetto per ogni evenienza grazie al suo <span className="text_funny">SNAPDRAGON</span> 20 ultra <br /> <span className="text_funny">Compatto</span> perfetto per portarlo dove vuoi quando vuoi</p>
                                    <h6 className="d-flex justify-content-end text-muted ">Valutazione: 4,7</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col border rounded p-3 bg_confident">
                            <h2 className="text-danger-emphasis">💸 MIGLIOR SCONTO DEL GIORNO</h2>
                            <div className="card bg_confident border-0" >
                                <h5 className="card-title text_funny">Tablet 24 Pollici</h5>
                                <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"><span className="text_funny">Design</span> unico nel suo genere <br /> Perfetto per ogni evenienza grazie al suo <span className="text_funny">SNAPDRAGON</span> 20 ultra <br /> <span className="text_funny">Compatto</span> perfetto per portarlo dove vuoi quando vuoi</p>
                                    <h6 className="d-flex justify-content-end text-muted ">Valutazione: 4,7</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}