import React from 'react'
import gambarItem from '../../assets/image/contract.jpeg';


export default function Carousel() {
    return (
        <>

            <div id="carouselExampleInterval" className="carousel slide  " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="500">
                        <img src={gambarItem} className="d-inline-block w-100" style={{ objectFit: 'cover', filter: "brightness(50%)" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className=' fw-bold text-white fs-3'>Your IT Solution</h5>
                            <p className='lead'>Mari Bekerjasama dengan kami </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="500">
                        <img src={`/storage/walpapperCarousel.jpg`} className="d-block w-100" style={{ objectFit: "fill", filter: "brightness(50%)" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className=' fw-bold text-white fs-3'>Produk Kami</h5>
                            <p className='lead'>Surveillance Security Camera, Videotron, Internet of Things, <br />Office Equipment, PABX  </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="500">
                        <img src={`/storage/walpapperCarousel3.jpg`} className="d-block w-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className=' fw-bolder text-white'>Layanan Kami</h5>
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
        </>
    )
}
