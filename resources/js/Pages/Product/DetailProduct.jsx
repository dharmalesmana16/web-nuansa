// import DetailProduct from '@/Components/DetailProduct'
import BtnLink from '@/Components/BtnLink';
import ConvertHTML from '@/Components/ConvertHTML';
import Layout from '@/Layouts/Layout'
import { Link } from '@inertiajs/react';
import React from 'react'

export default function Detail(props) {
    console.log(props.data);
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    // function detailPreview(e) {
    //     e.preventDefault();
    //     // let btnDetail = document.querySelector('.btnDetail');
    //     let deskripsi = document.querySelector('.deskripsi');


    //     // deskripsi.innerHTML = props.data.deskripsi;
    //     deskripsi.name = props.data.deskripsi;
    // }
    // function spesifikasiPreview(e) {
    //     e.preventDefault();
    //     let deskripsi = document.querySelector('.deskripsi');


    //     deskripsi.innerHTML = props.data.harga;
    // }
    return (
        <Layout>

            <div className="container py-5">

                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-5 text-center">
                        <img className="card-img-top mb-5 mb-md-0 img-fluid" src={`/storage/public/${props.data.gambar}`} style={{
                            objectFit: 'fill', width: "500px",
                            height: "500px",
                            border: "1px solid black"
                        }} alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card border-0 bg-white">
                            <div className="card-body">

                                <h3 className=" fw-bolder">{props.data.names}</h3>
                                <div className="small mb-1 text-uppercase">Kode Produk : {props.data.kode}</div>
                                <div className="small mb-1 text-uppercase">Kategori Produk : <Link aria-current="page" className=' text-dark ' href={`/product/${props.data.slugProduct}`} > {props.data.name}</Link></div>
                                <p className='fw-bolder fs-3' >{rupiah(props.data.price)}</p>
                                <a href="https://wa.me/6282145554374/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target="_blank" className="btn btn-outline-primary" rel="noopener noreferrer">Contact us to Purchase</a>
                                <hr />
                                <div className="card border-0 ">

                                    <div className="d-flex">
                                        <div className="p-2 px-5">
                                            <p aria-selected="true" className=' fw-bold text-muted text-decoration-none btnDetail' >Detail & Spesifikasi</p>
                                        </div>
                                        {/* <div className="p-2 px-5">
                                                <Link aria-selected="false" className=' fw-bold text-muted text-decoration-none btnSpesifikasi' onClick={spesifikasiPreview}>Spesifikasi</Link>
                                            </div> */}
                                    </div>
                                </div>
                                <hr />
                                <ConvertHTML name={props.data.description} />
                                {/* {props.data.deskripsi} */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout >
    )
}
