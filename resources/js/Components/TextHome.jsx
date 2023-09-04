import React from 'react'
import BtnLink from './BtnLink'
import { Link } from '@inertiajs/react'
export default function TextHome(props) {


    return (
        <div>
            <section className="py-1 border-bottom container" id="features">
                <div className="container my-1">
                    <div className="row gx-5">
                        {props.data ? props.data.map((res, i) => {
                            return (
                                <div className="col-lg-6 mb-5 mb-lg-0" key={i}>
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                                    <h2 className="h4 fw-bolder">{res.nama}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: res.description }}></div>
                                </div>
                            )
                        }) : ""}
                    </div>
                </div>
                <div className="text-end py-4">
                    <Link className='text-decoration-none fs-5 fw-lighter secondLink secondLink-grow-up  ' href='/service'>Selengkapnya  {'>'} </Link>
                </div>
            </section >
        </div >

    )
}
