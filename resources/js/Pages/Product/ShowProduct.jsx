import BtnLink from '@/Components/BtnLink'
import ConvertHTML from '@/Components/ConvertHTML'
import Pagination from '@/Components/Pagination'
import ThreeCard from '@/Components/CardNews'
import Layout from '@/Layouts/Layout'
import React from 'react'
import FileResizer from 'react-image-file-resizer'
export default function show(props) {
    console.log(props.data.data.length);


    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }
    const resizeImage = (imageFile) => {
        try {
            Resizer.imageFileResizer(
                imageFile,
                150,
                150,
                "JPEG",
                100,
                0,
                callback,
            );
        } catch (err) {
            console.log(err);
        }
    }
    return (
        < Layout >

            <div className="container py-5">

                <div className="row gx-4 gx-lg-5">
                    {/* Start Code */}
                    {props.data.data.length > 0 ? props.data.data.map((res, i) => {
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
                    }) : <p className='fs-5 text-center'>Produk Belum Tersedia, Hubungi kami jika ingin menanyakan produk ini</p>
                    }
                    <div className="d-flex justify-content-end">
                        {props.data.data.length > 0 ? (

                            <Pagination links={props.data.links} />
                        ) : ""}
                    </div>


                </div>
            </div>

        </Layout >
    )
}
