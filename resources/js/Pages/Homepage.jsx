import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Card, CardContent, CardMedia, Typography, Button, Container, CardActions, Grid, Box, Table, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import TextHome from '@/Components/TextHome';
import BoxHome from '@/Components/BoxHome';
import Jumbotron from '@/Components/Jumbotron';
import Carousel from '@/Components/Carousel';
import Slider from "react-slick";
import example from "../../assets/image/cctv.jpg";
import Gallery from '@/Components/Gallery';
import ConvertHTML from '@/Components/ConvertHTML';
import Cards from '@/Components/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./../../assets/js/main";
import main from './../../assets/js/main';
import { useEffect } from 'react';
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
        // autoplaySpeed: 1000,
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
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
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
    // main()
    return (
        < Layout >
            <Carousel data={props.carousel} >
            </Carousel>
            <Box className="container-fluid " sx={{ padding: 5 }}  >
                <div className="row align-items-center">
                    <div className="col-md-3">


                        <Typography variant='h4' fontWeight={"800"} className='subheaderblueHome text-capitalize'>
                            Layanan Kami
                        </Typography>
                    </div>

                    <div className=" col-md-9">


                        <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            {
                                props.DataService.map((res, i) => {
                                    if (res.description == null) {
                                        res.description = "";
                                    }
                                    let newDeskripsi;
                                    if (res.description.length > 300) {
                                        newDeskripsi = res.description.substring(0, 299) + " ..."
                                    } else {
                                        newDeskripsi = res.description
                                    }
                                    return (

                                        <>

                                            <Grid item xs={4} sm={4} md={2} >

                                                <Box
                                                    component="img"
                                                    sx={{
                                                        width: "100%",
                                                        height: 150,
                                                        borderRadius: "15px",

                                                    }}
                                                    src={`/storage/service/${res.photo}`}
                                                >
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4} sm={4} md={4} >
                                                <Typography variant='h6' fontWeight={"700"}>
                                                    {res.nama}
                                                </Typography>
                                                <Typography variant='body1' color={"text.secondary"}>
                                                    <ConvertHTML name={newDeskripsi} />
                                                </Typography>
                                            </Grid>
                                        </>
                                    )
                                })
                            }

                        </Grid>
                    </div>
                    {/* <Grid container columns={{ xs: 4, sm: 8, md: 6 }} columnSpacing={{ md: 10 }}>
                    {
                        dataLayanan.map((res, i) => {
                            return (
                                <>
                                    <Grid item md={2} >
                                        <Card sx={{ borderRadius: "20px" }} className="cardHover">
                                            <CardMedia
                                                sx={{ objectFit: "fill", p: 1, borderRadius: "20px" }}
                                                component="img"
                                                height="275"
                                                alt="green iguana"
                                                image={Deposit}
                                            />
                                            <CardContent sx={{ minHeight: "175px" }}>
                                                <Typography variant='h6' fontWeight={"700"}>
                                                    {res.nama}
                                                </Typography>
                                                <Typography variant='body1' color={"text.secondary"}>
                                                    {res.deskripsi}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                </>
                            )
                        })
                    }
                </Grid> */}
                </div>
            </Box>
            <Box sx={{ p: 5 }}>

                <Typography variant='h4' fontWeight={"800"} className='subheaderblueHome'>
                    Produk Kami
                </Typography>
            </Box>
            <Slider {...settings}>

                {
                    props.dataProduks.map((res, i) => {
                        return (
                            // <Grid item md={3}>
                            // <Box
                            //     component="img"
                            //     sx={{
                            //         width: "100%",
                            //         height: "300px",
                            //         // borderRadius: "15px"
                            //     }}
                            //     src={`/storage/${res.photoPage}`}
                            // >
                            // </Box>
                            <Link href={`/product/${res.slug}`} >

                                <ImageListItem className='cardProductPage' sx={{ width: "100%", height: "25%" }} >
                                    {/* <img
                                        srcSet={`/storage/public/${res.photo}?w=10&fit=fill&auto=format&dpr=2 2x`}
                                        src={`/storage/public/${res.photo}?w=10&fit=fill&auto=format`}
                                        alt={res.nama}
                                        loading="lazy"
                                    /> */}

                                    <Box
                                        component="img"
                                        className='d-flex align-self-center align-items-center'
                                        sx={{
                                            p: 15,
                                            width: "100%",
                                            height: "25%",

                                            // borderRadius: "15px"
                                        }}
                                        src={`/storage/public/${res.photo}`}
                                    >
                                    </Box>
                                    <ImageListItemBar
                                        title={res.nama}
                                    // subtitle={res.author}


                                    />

                                </ImageListItem>
                            </Link>
                            // </Grid>
                        )
                    })
                }
            </Slider>
            <Box className="container-fluid" sx={{ padding: 5 }} >
                <div data-aos="fade-right">
                    <div className="row align-items-center">
                        <div className="col-md-3 ">


                            {/* <div className="d-flex "> */}
                            <Typography variant='h4' fontWeight={"800"} className='subheaderblueHome'>
                                Berita Terkini
                            </Typography>
                        </div>
                        <div className="col-md-9">

                            <div className="container-fluid" style={{ padding: 0 }}>

                                <Slider {...settingProjects}>
                                    {
                                        props.news.map((res, i) => {
                                            let newDeskripsi;
                                            let hDesc;
                                            if (res.description.length > 100) {
                                                newDeskripsi = res.description.substring(0, 99) + " ..."
                                            } else {
                                                newDeskripsi = res.description
                                                // hDesc =
                                            }
                                            return (
                                                <Card sx={{ maxWidth: 275, borderRadius: "20px" }} key={i}>
                                                    <CardMedia
                                                        sx={{ objectFit: "fill", p: 1, borderRadius: "20px" }}
                                                        component="img"
                                                        height="200"
                                                        alt="green iguana"
                                                        image={`/storage/news/${res.photo}`}

                                                    />
                                                    <CardContent sx={{ backgroundColor: "transparent", minHeight: "175px" }}>
                                                        <Typography variant="h6" fontWeight={"700"} >
                                                            {res.title}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary" gutterBottom>
                                                            {res.tanggal}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            <ConvertHTML name={newDeskripsi} />
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions className='d-flex justify-content-end text-end'>
                                                        <Link href={`/news/${res.slug}`} className='text-decoration-none '>
                                                            {"Selengkapnya"}
                                                        </Link>
                                                    </CardActions>

                                                </Card>
                                            )

                                        })
                                    }
                                </Slider>

                                {/* </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </Box>
            <Box className="container-fluid" sx={{ padding: 5 }} >
                <div data-aos="fade-right">
                    <div className="row align-items-center">
                        <div className="col-md-3 ">


                            {/* <div className="d-flex "> */}
                            <Typography variant='h4' fontWeight={"800"} className='subheaderblueHome'>
                                Client Kami
                            </Typography>
                        </div>
                        <div className="col-md-9">

                            <div className="container-fluid" style={{ padding: 0 }}>

                                <Slider {...settingClient}>
                                    {
                                        props.dataclients.map((res, i) => {

                                            return (
                                                <div className=" p-5" key={i}>
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

                                {/* </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </Box>
            <Box className="container-fluid" sx={{ paddingLeft: 5, paddingRight: 0, paddingBottom: 0, backgroundColor: "#ecf0f1" }} >
                <div data-aos="zoom-in">

                    <div className="row  ">

                        <div className="col-md-3 align-self-center">

                            <Typography variant='h4' fontWeight={"800"} className='subheaderblueHome'>
                                Kontak Kami
                            </Typography>

                        </div>
                        <div className=" col-md-4">



                            <div className="py-2">

                                <Typography variant='h5' fontWeight={"700"} >
                                    Kantor Nuansa Inti Persada:
                                </Typography>
                                <Typography variant='body1' fontWeight={"500"} color={"text.secondary"} >
                                    Jl. Gunung Bromo No.6, Tegal Kertha, Denpasar Barat, Bali 80119
                                </Typography>
                            </div>
                            <div className="py-2">

                                <Typography variant='h6' fontWeight={"700"} >
                                    Email:
                                </Typography>
                                <Typography variant='body1' fontWeight={"500"} color={"text.secondary"} >
                                    info@nuansaintipersada.co.id
                                </Typography>
                            </div>
                            <div className="py-2">

                                <Typography variant='h6' fontWeight={"700"} >
                                    Telp:
                                </Typography>
                                <Typography variant='body1' fontWeight={"500"} color={"text.secondary"} >
                                    +6281239483800
                                </Typography>
                            </div>

                        </div>

                        <div className="col-md-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3086378741286!2d115.1949263744497!3d-8.662168991385236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240b1048b42e3%3A0x9f3f3a69c0937ea8!2sNuansa%20Inti%20Persada.%20CV!5e0!3m2!1sen!2sid!4v1701244674281!5m2!1sen!2sid" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
            </Box>

        </Layout >
    )
}
