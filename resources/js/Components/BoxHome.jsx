import React from 'react'
import GovLogo from '../../assets/image/gov.png'
import logoProduct from '../../assets/image/product-white.png'
import logoService from '../../assets/image/service-white-2.png'
import logoUsers from '../../assets/image/user-white.png'
import CountUp from 'react-countup';
// import CountUp from 'react-countup/build/CountUp'
export default function BoxHome() {
    return (
        <div className='container-fluid'>
            <div className="card mb-5 container-fluid " style={{ backgroundColor: '#023e8a' }}>
                <div className="card-body text-light">
                    <p className='text-center'>Sejak 2009 <b> Nuansa Inti Persada</b> Sudah Melayani </p>
                    <div className="d-flex align-items-center justify-content-center  overflow-auto">

                        <div className="d-flex  ">
                            <div className="align-self-center">
                                <img width="75" height="75" src={logoUsers} alt="user--v1" />
                            </div>
                            <div className="p-4 align-self-center">
                                <h3 className='fw-bolder'><CountUp end={10000} duration={5} decimal="." enableScrollSpy={true} /> +</h3>
                                <div style={{ width: '9rem' }} className="text-wrap">Client kami dengan pihak pemerintah maupun swasta</div>
                            </div>
                        </div>

                        <div className="d-flex ">
                            <div className="align-self-center">
                                <img width="75" height="75" src={logoProduct} alt="user--v1" />
                            </div>
                            <div className="p-4 align-self-center">
                                <h3 className='fw-bolder'><CountUp end={9} duration={5} decimal="." enableScrollSpy={true} /></h3>
                                <div style={{ width: '9rem' }} className="text-wrap">Kategori Produk untuk kebutuhan infrastruktur IT anda</div>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="align-self-center">
                                <img width="75" height="75" src={logoService} alt="user--v1" />
                            </div>
                            <div className="p-4 align-self-center">
                                <h3 className='fw-bolder'><CountUp end={6} duration={5} decimal="." enableScrollSpy={true} /></h3>
                                <div style={{ width: '9rem' }} className="text-wrap">Layanan yang tersedia sebagai solusi IT untuk perusahaan anda</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
