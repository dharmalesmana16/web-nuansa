import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import TextHome from '@/Components/TextHome';
import BoxHome from '@/Components/BoxHome';
import Jumbotron from '@/Components/Jumbotron';
import Carousel from '@/Components/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';
import Gallery from '@/Components/Gallery';
import ConvertHTML from '@/Components/ConvertHTML';
export default function Homepage(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settingClient = {
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "20px",
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 1000,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settingProjects = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "20px",
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 2000,
        // rows: 2,
        // slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Layout>



            <Carousel />
            <TextHome data={props.DataService} />
            <BoxHome />
            <div className="container py-5">
                <Slider {...settings}>
                    {props.dataProduks.map((rek) => (
                        <div className="py-2 px-5">

                            <Link href={`/product/${rek.slug}`} >
                                <div className="card cardProductPage shadow border-0  " style={{ width: "18rem" }}>
                                    <div className=" align-self-center p-5">

                                        <img src={`/storage/${rek.photo}`} height="25" width="75"
                                            className='img-fluid    '
                                            alt="bullet-camera" style={{
                                                objectFit: 'fill',
                                                // height: "200px",
                                                borderRadius: "20px 20px 0px 0px"
                                            }} />
                                    </div>

                                    <div className="card-body text-center ">
                                        <p className="text-decoration-none">{rek.nama}</p>

                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))}

                </Slider>
            </div>
            <Jumbotron />
            <div className="container py-5">
                <Slider {...settingProjects}>
                    {props.dataprojects.map((data) => {
                        let judul = data.nama;
                        function countWords(str) {
                            const arr = str.split(' ');
                            return arr.filter(word => word !== '').length;
                        }
                        if (countWords(judul) > 5) {

                            judul = judul.substr(0, 30) + " ...";
                        }
                        return (
                            <div className="py-2">

                                <div className="card bg-white shadow-sm border-0 h-100 " style={{ width: "17rem", borderRadius: "20px 20px 0px 0px" }} >
                                    <img src={`/storage/${data.photo}`} className="card-img-top" style={{
                                        objectFit: 'fill',
                                        height: "16rem",
                                        borderRadius: "20px 20px 0px 0px"
                                    }} alt="..." />
                                    <div className="card-body ">
                                        <Typography variant="h6" className='fw-bold text-uppercase' gutterBottom>
                                            {judul}
                                        </Typography>
                                    </div>
                                    <div className="card-footer bg-white border-0 ">
                                        {/* <secondLink href={"/"}>Dhar</secondLink> */}
                                        <Link href='' className='secondLinks'>Selengkapnya {">"}</Link>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )}

                </Slider>
            </div>
            <div className="container mb-5">
                <div className="text-center">
                    <h3 className='fw-bold '>Client Kami</h3>
                </div>
                <div className="">
                    <Slider {...settingClient}>

                        {props.dataclients.map((res, o) => {
                            return (

                                <div className=" p-5" key={o}>
                                    <div className="d-flex justify-content-center">

                                        <img src={`/storage/${res.photo}`} className=' img-fluid' style={{ objectFit: 'fill', height: "100px", width: "100px" }} alt="user--v1" />
                                    </div>
                                    {/* <p className='text-muted'>{res.nama}</p> */}
                                </div>
                            )
                        })


                        }
                    </Slider>
                </div>

            </div>

        </Layout >
    )
}
