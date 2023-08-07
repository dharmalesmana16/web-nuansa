// import DetailProduct from '@/Components/DetailProduct'
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

            <section className="">
                <div className="container px-4 px-lg-5 ">

                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-7 text-center">
                            <img className="card-img-top mb-5 mb-md-0 img-fluid" src={`/storage/${props.data.photo}`} style={{
                                objectFit: 'fill', width: "500px",
                                height: "500px",
                                border: "1px solid black"
                            }} alt="..." />
                        </div>
                        <div className="col-md-5">
                            <div className="card border-0 bg-white">
                                <div className="card-body">

                                    <h3 className=" fw-bolder">{props.data.nama}</h3>
                                    <div className="small mb-1 text-uppercase">Tahun Bermitra / Menjadi Client : {props.data.from_year} </div>

                                    <div className="card-footer border-0 ">

                                        <p aria-selected="true" className=' fw-bold text-muted text-decoration-none btnDetail' >Detail Pekerjaan / Bentuk Kerjasama</p>

                                    </div>
                                    <ConvertHTML name={props.data.deskripsi} />
                                    {/* {props.data.deskripsi} */}
                                </div>
                            </div>


                            {/* <div className="position-absolute mt-auto mb-auto">


                            </div> */}

                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}
