import React from 'react'
import BtnLink from './BtnLink'
import Logo from '../../assets/image/logonuansa.png';
import gambarIoT from '../../assets/image/iotProduct.jpg';
import gambarCCTV from '../../assets/image/cctvProduct.jpg';
import gambarVideotron from '../../assets/image/digitalLed2.jpg';
import gambarOFE from '../../assets/image/Office Equipment.jpg';
export default function ThreeCard(props) {
    const dataProduct = [
        { "nama": "Security Surveillance", "deskripsi": "Ini untuk mengawas", "gambar": gambarCCTV },
        { "nama": "Videotron", "deskripsi": "Ini untuk mengawas", "gambar": gambarVideotron },
        { "nama": "Internet of Things", "deskripsi": "Ini untuk mengawas", "gambar": gambarIoT },
        { "nama": "Office Equipment", "deskripsi": "Ini untuk mengawas", "gambar": gambarOFE }
    ]
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {props.data ? props.data.map((data, i) => {
                    return (
                        <div className="col" key={i}>
                            <div className="card bg-white shadow border-0 h-100">
                                <img src={`/storage/${data.photo}`} className="img-fluid w-100 " style={{
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

            </div>
        </div>
    )
}
