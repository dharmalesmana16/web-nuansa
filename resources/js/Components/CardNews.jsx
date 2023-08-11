import React from 'react'
import BtnLink from './BtnLink'
import Logo from '../../assets/image/logonuansa.png';
import gambarIoT from '../../assets/image/iotProduct.jpg';
import gambarCCTV from '../../assets/image/cctvProduct.jpg';
import gambarVideotron from '../../assets/image/digitalLed2.jpg';
import gambarOFE from '../../assets/image/Office Equipment.jpg';
import { Link } from '@inertiajs/react';
import './../../css/app.css'
export default function CardNews(props) {

    const dataProduct = [
        { "nama": "Security Surveillance", "deskripsi": "Ini untuk mengawas", "gambar": gambarCCTV },
        { "nama": "Videotron", "deskripsi": "Ini untuk mengawas", "gambar": gambarVideotron },
        { "nama": "Internet of Things", "deskripsi": "Ini untuk mengawas", "gambar": gambarIoT },
        { "nama": "Office Equipment", "deskripsi": "Ini untuk mengawas", "gambar": gambarOFE }
    ]
    console.log(props.data.length);
    return (
        <div className='container'>
            <div className="row row-cols-2 row-cols-md-4 ">
                {props.data ? props.data.map((data, i) => {
                    return (
                        <div className="col">


                            <div className="card bg-white shadow border-0 rounded-3" style={{ display: 'inline-block' }}  >
                                <img src={`/storage/${data.photo}`} className="img-fluid " style={{
                                    objectFit: 'fill',
                                    height: "200px",
                                    borderRadius: "20px 20px 0px 0px"
                                }} alt="..." />
                                <div className="card-body ">
                                    <h5 className="fw-bold judul">{data.nama}</h5>
                                    <p className='paragraph2'>{data.deskripsi}</p>
                                </div>
                                <div className="card-footer bg-white border-0 ">
                                    {/* <secondLink href={"/"}>Dhar</secondLink> */}
                                    <Link href='' className='secondLinks'>Selengkapnya {">"}</Link>
                                </div>
                            </div>
                        </div>
                    )
                }) : (
                    <div className="card bg-white  border-0 h-100 " style={{ width: "16rem", borderRadius: "20px 20px 0px 0px" }} >
                        <img src={`/storage/${data.photo}`} className="img-fluid " style={{
                            objectFit: 'fill',
                            height: "200px",
                            borderRadius: "20px 20px 0px 0px"
                        }} alt="..." />
                        <div className="card-body ">
                            <h5 className="fw-bold judul">{data.nama}</h5>
                        </div>
                        <div className="card-footer bg-white border-0 ">
                            {/* <secondLink href={"/"}>Dhar</secondLink> */}
                            <Link href='' className='secondLinks'>Selengkapnya {">"}</Link>
                        </div>
                    </div>
                )}
            </div>
            {props.data.length == 0 ? (
                ""

            ) : (<div className="text-end py-4">
                <Link className='text-decoration-none fs-5 fw-lighter secondLink secondLink-grow-up' href='/project'>See More Our Projects {'>'} </Link>
            </div>)
            }
        </div>
    )
}
