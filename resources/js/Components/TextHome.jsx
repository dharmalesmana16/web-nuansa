import React from 'react'
import BtnLink from './BtnLink'
import { Link } from '@inertiajs/react'
import { Button, Typography } from '@mui/material'
export default function TextHome(props) {


    return (
        <section className="py-1 border-bottom " id="features">
            <div className="row gx-5">
                {props.data ? props.data.map((res, i) => {
                    return (
                        <div className="col-lg-6 mb-5 mb-lg-0" key={i}>
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                            <Typography variant='body1' fontWeight={"800"}>
                                {res.nama}
                            </Typography>
                            <div dangerouslySetInnerHTML={{ __html: res.description }}></div>
                        </div>
                    )
                }) : ""}
            </div>
            <div className="text-end py-4">
                <Button className='text-capitalize' href='/service' >
                    Selengkapnya
                    {/* <Link className='text-decoration-none fw-lighter secondLink secondLink-grow-up  ' href='/service'>Selengkapnya  {'>'} </Link> */}
                </Button>
            </div>
        </section >

    )
}
