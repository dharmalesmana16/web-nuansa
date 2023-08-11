import Layout from '@/Layouts/Layout'
import { Link, Head } from '@inertiajs/react'
import React from 'react'
export default function Page(props) {
    return (
        <Layout>
            {/* <Head
                title={props.title}>
            </Head> */}
            <div className="container mb-5">
                <div className="text-center">
                    <h3 className='fw-bold '>Client Kami</h3>
                </div>
                <div className="row row-cols-2 row-cols-lg-4 g-2  text-center">
                    {props.data.map((res, o) => {
                        return (

                            <div className="col p-4 ">

                                <img src={`/storage/${res.photo}`} className=' img-fluid h-75 w-50' alt="user--v1" />
                                <p className='fw-light text-muted py-1'>{res.nama}</p>
                                <Link className='text-decoration-none' href={`/client/show/${res.id}`}>See Task</Link>
                            </div>
                        )
                    })


                    }

                </div>
            </div>
        </Layout>
    )
}
