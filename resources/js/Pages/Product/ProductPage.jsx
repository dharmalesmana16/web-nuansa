import BtnLink from '@/Components/BtnLink'
import Pagination from '@/Components/Pagination'
import Layout from '@/Layouts/Layout'
import React from 'react'
export default function ProductPage(props) {
    let data;
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }
    // const resizeImage = (imageFile) => {
    //     try {
    //         Resizer.imageFileResizer(
    //             imageFile,
    //             150,
    //             150,
    //             "JPEG",
    //             100,
    //             0,
    //             callback,
    //         );
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
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
                    {props.data_cat ? props.data_cat.data.map((res, i) => {
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

                                    </div>
                                    <div className="card-footer bg-white border-0 align-self-center">
                                        <BtnLink href={`/product/${res.slug}`} Name="See More" />

                                    </div>
                                </div>
                            </div>
                        )
                    }) : ""
                    }

                    <Pagination links={props.data_cat.links} />


                </div>
            </div>

        </Layout >
    )
}
