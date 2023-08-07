import ConvertHTML from '@/Components/ConvertHTML'
import DetailNews from '@/Components/DetailNews'
import Layout from '@/Layouts/Layout'
import React from 'react'

export default function DetailProject(props) {
    return (
        <Layout>
            <div className="container mt-5">
                <div className=""  >
                    <h1 className="fw-bolder mb-1">{props.data.nama}</h1>
                    <div className="text-muted fst-italic mb-2">Posted on </div>
                </div>
                <div class="mx-auto text-center" >

                    <img src={`/storage/${props.data.photo}`} className="img-fluid" style={{
                        objectFit: 'fill',
                        width: "900px",
                        height: "400px"
                    }} alt="..." />
                    <section className="mb-5 fs-4">
                        <ConvertHTML name={props.data.description} />
                    </section>
                </div>






            </div>

        </Layout>
    )
}
