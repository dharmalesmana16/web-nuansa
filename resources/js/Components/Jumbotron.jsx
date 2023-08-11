import React from 'react'
import Partner from '../../assets/image/jumbotron.jpg';
export default function Jumbotron() {
    return (
        <div>
            <div className="container">
                <div className="position-relative py-5 text-center text-muted border border-dashed rounded-3 img-fluid" style={{ backgroundImage: `url(${Partner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
                    <div className="text-white" >
                        <svg className="bi mt-5 mb-3" width="48" height="48" ><use xlinkHref="#check2-circle" /></svg>
                        <h1 className=" fw-bolder display-5 text-white">Nuansa Inti Persada</h1>
                        <p className="col-lg-6 mx-auto mb-4 text-white">
                            Kami Hadir Sebagai penyedia solusi sistem informasi
                            terintergasi yang inovatif
                        </p>
                        <a className="btn btn-primary px-5 mb-5" href="https://wa.me/6282145554374/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target='_blank'>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
