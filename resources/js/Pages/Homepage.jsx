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
            </div >
        </Layout>
    )
}
