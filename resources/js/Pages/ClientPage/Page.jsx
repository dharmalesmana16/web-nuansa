import Layout from '@/Layouts/Layout'
import { Link, Head } from '@inertiajs/react'
import React from 'react'
import { Box, Typography } from '@mui/material'
import TopJumbotron from '@/Components/TopJumbotron'
import { height, padding } from '@mui/system'
export default function Page(props) {
    return (
        <Layout>
            <TopJumbotron>
                Client Kami
            </TopJumbotron>
            {/* <Head
                title={props.title}>
            </Head> */}
            <div className="container mb-5">

                <div className="row row-cols-2 row-cols-lg-4 g-2  text-center">
                    {props.data.map((res, o) => {
                        return (

                            <div className="col p-4 ">
                                <Box
                                    component="img"
                                    src={`/storage/public/${res.photo}`}
                                    sx={{
                                        border: "0px solid black",
                                        borderRadius: "50%",
                                        width: "100px",
                                        height: "75px",
                                        objectFit: "fit",
                                        boxShadow: "1px 1px",
                                    }}
                                >
                                </Box>
                                <Typography variant='body2' color={"text.secondary"}>
                                    {res.nama}
                                </Typography>
                                {/* <Link className='text-decoration-none' href={`/client/show/${res.id}`}>See Task</Link> */}
                            </div>
                        )
                    })


                    }

                </div>
            </div>
        </Layout >
    )
}
