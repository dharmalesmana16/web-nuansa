import React from 'react'
import BtnLink from './BtnLink'
import gambarIoT from '../../assets/image/iotProduct.jpg';
import gambarCCTV from '../../assets/image/cctvProduct.jpg';
import gambarVideotron from '../../assets/image/digitalLed2.jpg';
import gambarOFE from '../../assets/image/Office Equipment.jpg';
export default function ProductComponentHome() {
    let deskripsi = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in";
    const dataProduct = [
        { "nama": "Security Surveillance", "deskripsi": "Ini untuk mengawas", "gambar": gambarCCTV },
        { "nama": "Videotron", "deskripsi": "Ini untuk mengawas", "gambar": gambarVideotron },
        { "nama": "Internet of Things", "deskripsi": deskripsi, "gambar": gambarIoT },
        { "nama": "Office Equipment", "deskripsi": deskripsi, "gambar": gambarOFE }
    ]
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {dataProduct ? dataProduct.map((data, i) => {
                    return (
                        <div className="col">
                            <div className="card bg-white shadow border-0 h-100">
                                <img src={data.gambar} className="img-fluid w-100 " style={{
                                    objectFit: 'fill',
                                    height: "250px",
                                }} alt="..." />
                                <div className="card-body  text-center">
                                    <h3 className=" fw-bolder">{data.nama}</h3>
                                    <p className="card-text">{data.deskripsi}</p>
                                </div>
                                <div className="card-footer bg-white border-0 align-self-center">
                                    <BtnLink Name="See Detail" />
                                </div>
                            </div>
                        </div>
                    )
                }) : ""}
                {/* <div className="col">
                    <div className="card h-100 border-0">
                        <img src={gambarVideotron} className="card-img-top rounded-3 h-100" alt="..." />

                        <div className="card-body pt-3">

                            <h2 className=" fw-bolder">Videotron</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti non tempore doloribus vitae dolor nihil quas suscipit exercitationem magni pariatur, maxime illo sit animi, eum modi, mollitia fugiat laudantium!</p>
                        </div>
                        <div className="card-footer bg-light border-0">
                            <BtnLink />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={gambarIoT} className="card-img-top rounded-3 h-100" alt="..." />
                        <div className="card-body pt-3">
                            <h2 className=" fw-bolder">Internet of Things</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa odit voluptate eligendi et iusto vitae atque ex nostrum assumenda optio, pariatur ad eaque. Natus nulla laborum vel assumenda dolorum dicta!</p>
                        </div>
                        <div className="card-footer bg-light border-0">
                            <BtnLink />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={gambarCCTV} className="card-img-top rounded-3 h-100" alt="..." />
                        <div className="card-body pt-3">
                            <h2 className=" fw-bolder">Fingerprint</h2>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In soluta quam quia eveniet accusantium ullam odio optio, ut repudiandae unde magni harum. Facere consectetur natus, cum eaque nobis saepe consequuntur.</p>
                        </div>
                        <div className="card-footer bg-light border-0">
                            <BtnLink />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
