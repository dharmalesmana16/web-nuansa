import TopJumbotron from '@/Components/TopJumbotron'
import Layout from '@/Layouts/Layout'
import { Grid, Typography, Box, Button } from '@mui/material'
import React from 'react'
import styled from '@mui/system/styled';

export default function ContactPage() {
    let data = [
        { "nama": "Email", "value": "inf@nuansaintipersada.co.id" },
        { "nama": "Hubungi Kami", "value": "+6281239483800, +6282145554374" },
        { "nama": "Toko Online Kami", "value": "Tokopedia, Facebook - Marketplace" },
    ]
    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(1),
    }));
    return (
        <Layout>
            <TopJumbotron>
                Kontak Kami
            </TopJumbotron>

            <div className="container ">
                <div className="google-map-code pt-5">
                    <iframe src="https://maps.google.com/maps?q=nuansa inti persada&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <Box className="" >
                            {data.map((res, i) => {
                                return (

                                    <>

                                        <Typography variant='h6' fontWeight={"800"} className='py-4'>
                                            {res.nama}
                                        </Typography>
                                        <Typography variant='body1' color={"text.secondary"}>
                                            {res.value}
                                        </Typography>
                                    </>
                                )
                            })}

                        </Box>
                    </div>

                </div>
            </div>
        </Layout >
    )
}
