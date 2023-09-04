import React from 'react'
import Layout from '@/Layouts/Layout'
import TopJumbotron from '@/Components/TopJumbotron'
export default function GalleryPage(props) {
    return (
        <Layout>
            <TopJumbotron>
                Galeri
            </TopJumbotron>
            <div className="container">

                <div className="row gx-4 gx-lg-5">
                    {/* Start Code */}
                    {props.data_gal.data.length > 0 ? props.data_gal.data.map((res, i) => {
                        // let deskripsi = res.deskripsi;
                        // if (deskripsi.length > 50) {
                        //     deskripsi = res.deskripsi.substr(0, 50);
                        // } else {
                        //     deskripsi = res.deskripsi;
                        // }
                        return (
                            <div className="col-md-3 mb-5 " key={i} >
                                <div className="card bg-white shadow border-0 h-100" >

                                    <img src={`/storage/${res.gambar}`} className="img-fluid w-100 " style={{
                                        objectFit: 'fill',
                                        height: "250px",
                                    }} alt="..." />
                                    <div className="card-body text-center">
                                        <p className=" fs-5">{res.namaproduct}</p>
                                        <p className="card-text fw-bolder fs-5">{rupiah(res.harga)}</p>

                                    </div>
                                    <div className="card-footer bg-white border-0 align-self-center">
                                        <BtnLink href={`/product/show/${res.slugProduct}`} Name="See Detail" />

                                    </div>
                                </div>
                            </div>
                        )
                    }) : <p className='fs-5 text-center'>Gallery Belum Tersedia</p>
                    }
                    <div className="d-flex justify-content-end">
                        {props.data_gal.data.length > 0 ? (

                            <Pagination links={props.data_gal.links} />
                        ) : ""}
                    </div>


                </div>
            </div>
        </Layout>
    )
}
