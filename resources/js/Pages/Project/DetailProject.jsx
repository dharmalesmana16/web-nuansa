import ConvertHTML from '@/Components/ConvertHTML'
import DetailNews from '@/Components/DetailNews'
import Layout from '@/Layouts/Layout'
import React from 'react'
// import { Typography } from '@mui/material'
export default function DetailProject(props) {
    return (
        <Layout>
            <div className="container">
                <div className="mx-auto ">
                    <div className=""  >
                        <h1 className="fw-bolder mb-1">{props.data.nama}</h1>
                        <div className="text-muted fst-italic mb-2">Posted on </div>
                    </div>
                    <div class="mx-auto " >
                        <img src={`/storage/${props.data.photo}`} className="img-fluid" style={{
                            objectFit: 'fill',
                            width: "1200px",
                            height: "600px"
                        }} alt="..." />
                    </div>
                    <section className="py-5">
                        <Typography variant="body1" gutterBottom>
                            <ConvertHTML name={props.data.description} />
                        </Typography>
                    </section>
                </div>
            </div>
        </Layout>
    )
}
