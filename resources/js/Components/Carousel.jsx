import React from 'react'
import gambarItem from '../../assets/image/contract.jpeg';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={gambarItem} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='display-6 fw-bolder text-dark'>Your IT Solution</h5>
                            <p className='lead'>Mari Bekerjasama dengan kami </p>
                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={gambarItem} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='display-6 fw-bolder text-dark'>Produk Kami</h5>
                            <p className='lead'>Surveillance Security Camera, Videotron, Internet of Things, <br />Office Equipment, PABX  </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={gambarItem} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='display-6 fw-bolder text-dark'>Layanan Kami</h5>
                            <p className='lead'>IT Infrastructure & Service, IT Manage Service, IT Solution For Busines Development,<br /> System Integrator For Your Business </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
