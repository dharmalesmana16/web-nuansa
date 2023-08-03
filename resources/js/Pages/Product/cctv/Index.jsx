import BtnLink from '@/Components/BtnLink'
import ConvertHTML from '@/Components/ConvertHTML'
import Pagination from '@/Components/Pagination'
import ThreeCard from '@/Components/ThreeCard'
import Layout from '@/Layouts/Layout'
import React from 'react'
import FileResizer from 'react-image-file-resizer'
export default function Index(props) {
    let data;
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

            <div className="container">
                <div className="card mb-3">
                    <div className="card-body d-flex ">

                        <form action="">
                            <div className="d-flex">


                            </div>
                        </form>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5">
                    {/* Start Code */}
                    {props.datacctv ? props.datacctv.data.map((res, i) => {
                        // let deskripsi = res.deskripsi;
                        // if (deskripsi.length > 50) {
                        //     deskripsi = res.deskripsi.substr(0, 50);
                        // } else {
                        //     deskripsi = res.deskripsi;
                        // }
                        return (
                            <div className="col-md-3 mb-5 " key={i}>
                                <div className="card bg-white shadow border-0 h-100">

                                    <img src={`/storage/${res.photo}`} className="img-fluid w-100 " style={{
                                        objectFit: 'fill',
                                        height: "250px",
                                    }} alt="..." />
                                    <div className="card-body text-center">
                                        <p className=" fs-5">{res.nama}</p>
                                        <p className="card-text fw-bolder fs-5">{rupiah(res.harga)}</p>

                                    </div>
                                    <div className="card-footer bg-white border-0 align-self-center">
                                        <BtnLink href={`/product/cctv/${res.slug}`} Name="See Detail" />

                                    </div>
                                </div>
                            </div>
                        )
                    }) : ""
                    }

                    <Pagination links={props.datacctv.links} />


                </div>
            </div>

        </Layout >
    )
}
