import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import TextHome from '@/Components/TextHome';
import BoxHome from '@/Components/BoxHome';
import ProductComponentHome from '@/Components/ProductComponentHome';
import Jumbotron from '@/Components/Jumbotron';
import ThreeCard from '@/Components/ThreeCard';
import Carousel from '@/Components/Carousel';
export default function Homepage(props) {
    console.log("props : ", props);
    return (
        <Layout>
            <div>
                <Head
                    title={props.title}>
                </Head>

                <Carousel />
                <TextHome data={props.DataService} />
                <BoxHome />
                <ProductComponentHome />
                <Jumbotron />

                <ThreeCard data={props.dataprojects} />
                <div className="container mb-5">
                    <div className="text-center">
                        <h3 className='fw-bold '>Client Kami</h3>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-4 g-2  text-center">
                        {props.dataclients.map((res, o) => {
                            return (

                                <div className="col p-4 ">

                                    <img src={`/storage/${res.photo}`} className=' img-fluid h-75 w-50' alt="user--v1" />
                                    <p className='fw-light text-muted py-2'>{res.nama}</p>
                                </div>
                            )
                        })


                        }

                    </div>
                </div>
            </div >
        </Layout>
    )
}
