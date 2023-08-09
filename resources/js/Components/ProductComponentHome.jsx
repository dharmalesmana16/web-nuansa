import React from 'react'
import BtnLink from './BtnLink'
import gambarIoT from '../../assets/image/iot.jpg';
import gambarCCTV from '../../assets/image/cctv.jpg';
import gambarVideotron from '../../assets/image/digitalLed2.jpg';
import gambarOFE from '../../assets/image/networking.jpg';
import { Link } from '@inertiajs/react';
import './../../css/app.css'
export default function ProductComponentHome(props) {
    let deskripsi = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in";
    const dataProduct = [
        { "nama": "Security Surveillance", "deskripsi": "Ini untuk mengawas", "gambar": gambarCCTV },
        { "nama": "Videotron", "deskripsi": "Ini untuk mengawas", "gambar": gambarVideotron },
        { "nama": "Internet of Things", "deskripsi": deskripsi, "gambar": gambarOFE },
        { "nama": "Office Equipment", "deskripsi": deskripsi, "gambar": gambarIoT }
    ]
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {props.data.length <= 4 ? props.data.map((data, i) => {
                    return (
                        <div className="col" key={i}>
                            <div className="card bg-white shadow border-0 h-100">
                                <img src={dataProduct[i].gambar} className="img-fluid w-100" style={{
                                    objectFit: 'fill',
                                    height: "250px",
                                }} alt="..." />
                                <div className="card-body  text-center">
                                    <h5 className="fw-bold">{data.nama}</h5>
                                </div>
                                <div className="card-footer bg-white border-0 align-self-center">
                                    <BtnLink Name="See Detail" href={`/product/${data.slug}`} />
                                </div>
                            </div>
                        </div>
                    )
                }) : (
                    props.data.map((rek, k) => {
                        return (
                            <Link href={`/product/${rek.slug}`} key={k}>

                                <div className="card cardProductPage shadow border-0 w-100 h-100 ">

                                    {/* <img src={`/storage/${res.photo}`} className="img-fluid w-100 " style={{
                                        objectFit: 'fill',
                                        height: "250px",
                                    }} alt="..." /> */}
                                    <div className="text-center p-5">

                                        <img width="75" height="75" src={`/storage/${rek.photo}`}
                                            className='img-fluid ' alt="bullet-camera" />
                                    </div>
                                    <div className="card-body text-center">
                                        <p className=" fs-5">{rek.nama}</p>

                                    </div>

                                </div>
                            </Link>
                        )
                    })
                )}

            </div>
            <div className="text-end py-4">
                <Link className='text-decoration-none fs-5 fw-lighter secondLink secondLink-grow-up  ' href='/product'>See More Our Products {'>'} </Link>
            </div>
        </div>
    )
}
