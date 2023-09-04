import TopJumbotron from '@/Components/TopJumbotron'
import Layout from '@/Layouts/Layout'
import React from 'react'
import ConvertHTML from '@/Components/ConvertHTML'
import { Link } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { Button, CardActionArea, CardActions, Typography, Box, Container, Grid, CardContent } from '@mui/material';
import { useEffect } from 'react';

export default function ServicePage(props) {

    return (
        <Layout>
            <TopJumbotron>
                Layanan Kami
            </TopJumbotron>


            <div className="bg-white ">



                {props.data.data != 0 ? props.data.map((data, i) => {
                    if (data.description == null) {
                        data.description = "";
                    }
                    let newDeskripsi;
                    if (data.description.length > 300) {
                        newDeskripsi = data.description.substring(0, 299) + " ..."
                    } else {
                        newDeskripsi = data.description
                    }
                    return (
                        <>
                            {i % 2 != 0 ?
                                (
                                    <Box sx={{ backgroundColor: "rgb(247, 249, 252)" }} className="py-5" data-aos="fade-left" >
                                        <div className="container">

                                            <div className="row ">


                                                <div className="col-md-8">

                                                    {/* <Card sx={{ minWidth: 275 }} className=''> */}
                                                    <CardContent >
                                                        <Typography variant='h5' color="text.dark" className='fw-bold' gutterBottom>
                                                            {data.nama}
                                                        </Typography>

                                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                            <ConvertHTML name={newDeskripsi} />
                                                        </Typography>

                                                        <Button href={`/service/${data.slug}`} className='text-capitalize'>
                                                            Selengkapnya
                                                        </Button>
                                                    </CardContent>

                                                </div>
                                                <div className="col-md-4">
                                                    <Box
                                                        // component="img"
                                                        sx={{
                                                            width: "100%",
                                                            height: "100%",
                                                            borderRadius: "20px",
                                                            '&:hover': {
                                                                backgroundColor: 'primary.main',
                                                                opacity: [0.9, 0.8, 0.7],
                                                            },


                                                        }
                                                        }
                                                    // src={`/storage/service/${data.photo}`}
                                                    >
                                                        <img src={`/storage/service/${data.photo}`} className="img-fluid rounded-4 " style={{
                                                            objectFit: 'fill',
                                                            width: "100%",
                                                            height: "100%",
                                                        }} alt="..." />
                                                    </Box>
                                                </div>
                                            </div>

                                        </div>
                                    </Box>
                                ) :
                                <Box sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "20px",



                                }}
                                    data-aos="fade-right"
                                >
                                    <div className="container">
                                        <div className="row p-5">
                                            <div className="col-md-4" >
                                                <img src={`/storage/service/${data.photo}`} className="img-fluid rounded-4 " style={{
                                                    objectFit: 'fill',
                                                    width: "100%",
                                                    height: "100%",
                                                }} alt="..." />
                                            </div>
                                            <div className="col-md-8">

                                                {/* <Card sx={{ minWidth: 275 }} className=''> */}
                                                <CardContent >
                                                    <Typography variant='h5' color="text.dark" className='fw-bold' gutterBottom>
                                                        {data.nama}
                                                    </Typography>

                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        <ConvertHTML name={newDeskripsi} />
                                                    </Typography>

                                                    <Button href={`/service/${data.slug}`} className='text-capitalize'>
                                                        Selengkapnya
                                                    </Button>
                                                </CardContent>

                                            </div>
                                        </div>
                                    </div>
                                </Box >
                            }
                        </>
                    )

                }) : (<p className='text-center'>Berita Belum Tersedia</p>)}
                {/* End Code */}
            </div>

        </Layout>
    )
}
