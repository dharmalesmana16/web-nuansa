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
            <div className="container">
                <div className="py-2">


                    <Typography variant='h5' fontWeight={"700"} className='mt-3' >
                        {props.data.nama}
                    </Typography>
                    <Typography variant='caption' color={"text.secondary"} >
                        Dipublish pada tanggal : {props.data.tanggal}
                    </Typography>
                </div>

                {/* <div className="" style={{ border: "1px solid black" }}> */}
                {/* <div className="py-2"> */}

                <Box sx={{
                    width: "100%",
                    height: "50%",
                    // padding: "50px",
                    borderRadius: "20px",
                }}
                    className="mx-auto"
                >
                    <img src={`/storage/news/${props.data.photo}`} alt="" className='img-fluid' style={{ width: "100%", height: "100%", objectFit: "fill", borderRadius: "20px" }} />
                </Box>

                <Typography variant='body1' className='mt-3'>
                    <ConvertHTML name={props.data.description} />
                </Typography >

                <div className="text-center mt-5">
                    {props.data.file == null ? (

                        ""
                    ) : "test"}
                </div>

            </div>
        </Layout>
    )
}
