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
                <div className="mb-5">

                    <ThreeCard data={props.dataprojects} />
                </div>
                {/* <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-6">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ad dolore voluptatem beatae eos maxime, mollitia quo illum dicta quibusdam, quis quaerat officia architecto atque fugiat possimus sit? Omnis, nulla.</p>
                        </div>
                        <div className="col-6">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ad dolore voluptatem beatae eos maxime, mollitia quo illum dicta quibusdam, quis quaerat officia architecto atque fugiat possimus sit? Omnis, nulla.</p>

                        </div>
                    </div>
                </div> */}
            </div >
        </Layout>
    )
}
