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
                {props.data ? props.data.map((data, i) => {
                    return (
                        <div className="col" key={i}>
                            <div className="card bg-white shadow border-0 h-100">
                                {/* <img src={dataProduct[i]["gambar"]} className="img-fluid w-100" style={{
                                    objectFit: 'fill',
                                    height: "250px",
                                }} alt="..." /> */}
                                <div className="card-body  text-center">
                                    <h3 className=" fw-bolder">{data.nama}</h3>
                                </div>
                                <div className="card-footer bg-white border-0 align-self-center">
                                    <BtnLink Name="See Detail" href={`/product/${data.slug}`} />
                                </div>
                            </div>
                        </div>
                    )
                }) : ""}

            </div>
            <div className="text-end py-4">
                <Link className='text-decoration-none fs-5 fw-lighter secondLink secondLink-grow-up  ' href='/product'>See More Our Products {'>'} </Link>
            </div>
        </div>
    )
}
