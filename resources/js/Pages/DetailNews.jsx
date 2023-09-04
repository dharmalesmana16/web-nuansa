import TopJumbotron from '@/Components/TopJumbotron'
import Layout from '@/Layouts/Layout'
import React from 'react'
import { Typography, Box } from '@mui/material'
import ConvertHTML from '@/Components/ConvertHTML'
export default function DetailNews(props) {
    return (
        <Layout>
            <TopJumbotron>
                News
            </TopJumbotron>
            <div className="container mt-5 ">

                <Typography variant='h4' className='fw-bold' gutterBottom>
                    {props.data.nama}
                </Typography>
                <Typography variant='body2' color={"text.secondary"} gutterBottom>
                    {props.data.tanggal}
                </Typography>
                {/* <div className="" style={{ border: "1px solid black" }}> */}
                <div className="mb-5 ">

                    <Box
                        sx={{

                            width: "75%",
                            height: "100%",
                            borderRadius: "20px",
                        }}
                        className="mx-auto"

                    >

                        <img src={`/storage/news/${props.data.photo}`} alt="" className='img-fluid' style={{ width: "100%", height: "100%", objectFit: "fill", borderRadius: "20px" }} />
                    </Box>
                </div>

                <Typography variant='body1'>
                    <ConvertHTML name={props.data.description} />
                </Typography >

                <div className="text-center mt-5">
                    {props.data.file == null ? (

                        ""
                    ) : "test"}
                </div>

            </div>
        </Layout >
    )
}
