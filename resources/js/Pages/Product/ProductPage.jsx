import BtnLink from '@/Components/BtnLink'
import Pagination from '@/Components/Pagination'
import Layout from '@/Layouts/Layout'
import { Link, Head } from '@inertiajs/react';
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
            <Head
                title={props.title}>
            </Head>
            <div className="container   ">

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
                            <div className="col-md-4  mb-5 " key={i}>
                                <Link href={`/product/${res.slug}`} className='text-decoration-none'>

                                    <div className="card cardProductPage shadow border-0 w-100  ">

                                        {/* <img src={`/storage/${res.photo}`} className="img-fluid w-100 " style={{
                                        objectFit: 'fill',
                                        height: "250px",
                                    }} alt="..." /> */}
                                        <div className="text-center p-5">

                                            <img width="75" height="75" src={`/storage/${res.photo}`}
                                                className='img-fluid ' alt="bullet-camera" />
                                        </div>
                                        <div className="card-body text-center text-decoration-none">
                                            <p className=" fs-5">{res.nama}</p>

                                        </div>

                                    </div>
                                </Link>
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
