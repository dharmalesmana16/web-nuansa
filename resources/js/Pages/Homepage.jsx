import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Box, Card, CardMedia, CardContent, Button, CardActions } from '@mui/material';
import TextHome from '@/Components/TextHome';
import BoxHome from '@/Components/BoxHome';
import Jumbotron from '@/Components/Jumbotron';
import Carousel from '@/Components/Carousel';
import Slider from "react-slick";
import example from "../../assets/image/cctv.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';
import Gallery from '@/Components/Gallery';
import ConvertHTML from '@/Components/ConvertHTML';
import Cards from '@/Components/ProductCard';

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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // initialSlide: 3,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    // centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
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
        slidesToShow: 3,
        slidesToScroll: 1,
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



            <Carousel data={props.carousel} >

            </Carousel>
            <TextHome data={props.DataService} />
            <BoxHome />
            <div className="container py-5">
                <Slider {...settings}>
                    {props.dataProduks.map((rek) => (
                        <div className="py-2 px-5">

                            <Link href={`/product/${rek.slug}`} >
                                <div className="card cardProductPage shadow border-0  " style={{ width: "18rem" }}>
                                    <div className=" align-self-center p-5">

                                        <img src={`/storage/public/${rek.photo}`} height="25" width="75"
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
            <div className="container py-5">
                <Slider {...settingProjects}>
                    {props.news.map((res, i) => {
                        let judul = res.nama;
                        function countWords(str) {
                            const arr = str.split(' ');
                            return arr.filter(word => word !== '').length;
                        }
                        if (countWords(judul) > 8) {
                            judul = judul.substr(0, 50) + " ...";
                        }
                        let newDeskripsi;
                        if (res.description.length > 100) {
                            newDeskripsi = res.description.substring(0, 99) + " ..."
                        } else {
                            newDeskripsi = res.description
                        }
                        return (
                            <Card sx={{ maxWidth: 275, borderRadius: "20px" }} key={i}>
                                <CardMedia
                                    sx={{ objectFit: "fill", padding: "10px", borderRadius: "20px" }}
                                    component="img"
                                    height="200"
                                    alt="green iguana"
                                    src={`/storage/news/${res.photo}`}
                                />
                                <CardContent sx={{ minHeight: 175 }}>
                                    <Typography gutterBottom variant="body1" component="div" fontWeight={"800"} className='text-uppercase' >
                                        {judul}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <ConvertHTML name={newDeskripsi} />
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button href={`/news/${res.slug}`} className='text-capitalize'>
                                        Selengkapnya
                                    </Button>
                                </CardActions>
                            </Card>
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
                                        <Box
                                            component="img"
                                            src={`/storage/public/${res.photo}`}
                                            sx={{
                                                border: "0px solid black",
                                                borderRadius: "50%",
                                                width: "100px",
                                                height: "75px",
                                                objectFit: "fill",
                                                boxShadow: "1px 1px",
                                                display: "inline-block",
                                                // padding: "5px",
                                                // backgroundSize: "contain"
                                            }}
                                        >
                                        </Box>
                                        {/* <img src={`/storage/public/${res.photo}`} className=' img-fluid' style={{ objectFit: 'fill', height: "100px", width: "100px" }} alt="user--v1" /> */}
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
