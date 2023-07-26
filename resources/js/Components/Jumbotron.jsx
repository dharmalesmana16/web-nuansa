import React from 'react'
import Partner from '../../assets/image/contract.jpeg';
export default function Jumbotron() {
    return (
        <div>

            <div className=" my-5 container ">
                <div className="position-relative p-5 text-center text-muted border border-dashed rounded-3 img-fluid" style={{ backgroundImage: `url(${Partner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <svg className="bi mt-5 mb-3" width="48" height="48"><use xlinkHref="#check2-circle" /></svg>
                    <h1 className="text-body-emphasis fw-bolder display-5">Your IT Solution</h1>
                    <p className="col-lg-6 mx-auto mb-4">
                        Mari Bekerjasama Dengan Kita
                    </p>
                    <a className="btn btn-primary px-5 mb-5" href="https://wa.me/6282145554374/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target='_blank'>
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}
