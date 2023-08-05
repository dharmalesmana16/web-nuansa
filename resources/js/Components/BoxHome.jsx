import React from 'react'
import GovLogo from '../../assets/image/gov.png'
import PartnerLogo from '../../assets/image/Partner.png'
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
                                <img width="75" height="75" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
                            </div>
                            <div className="p-3 align-self-center">
                                <h3 className='fw-bolder'><CountUp end={23} duration={5} decimal="." enableScrollSpy={true} /></h3>
                                <div style={{ width: '8rem' }} className="text-wrap">Mitra kerja kami dengan pihak pemerintah maupun swasta</div>
                            </div>
                        </div>

                        <div className="d-flex ">
                            <div className="align-self-center">
                                <img width="75" height="75" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
                            </div>
                            <div className="p-3 align-self-center">
                                <h3 className='fw-bolder'><CountUp end={1000} duration={5} decimal="." enableScrollSpy={true} /></h3>
                                <div style={{ width: '8rem' }} className="text-wrap">Client yang sudah kami layani, di kawasan Bali maupun Luar Bali</div>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="align-self-center">
                                <img width="75" height="75" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
                            </div>
                            <div className="p-3 align-self-center">
                                <h3 className='fw-bolder'><CountUp end={14} duration={5} decimal="." enableScrollSpy={true} /></h3>
                                <div style={{ width: '8rem' }} className="text-wrap">Produk dan layanan kami yang tersedia sebagai solusi bagi perusahaan anda</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
