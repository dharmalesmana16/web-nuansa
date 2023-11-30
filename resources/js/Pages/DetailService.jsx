import TopJumbotron from '@/Components/TopJumbotron'
import Layout from '@/Layouts/Layout'
import React from 'react'
import { Typography, Box } from '@mui/material'
import ConvertHTML from '@/Components/ConvertHTML'
export default function DetailService(props) {
    return (
        <Layout>
            <TopJumbotron>
                News
            </TopJumbotron>
            <div className="container mt-5 ">

                <Typography variant='h4' className='fw-bold' gutterBottom>
                    {props.data.nama}
                </Typography>

                {/* <div className="" style={{ border: "1px solid black" }}> */}
                <div className="mb-5 ">

                    <Box sx={{
                        width: "100%",
                        // height: "50%",
                        maxHeight: "50%",
                        // padding: "50px",
                        borderRadius: "20px",
                    }}
                        className="mx-auto"
                    >
                        <img src={`/storage/service/${props.data.photo}`} alt="" className='img-fluid' style={{ objectFit: "fill", borderRadius: "20px" }} />
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
