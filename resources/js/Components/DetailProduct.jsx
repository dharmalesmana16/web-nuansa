import React from 'react'
import BtnLink from './BtnLink';

export default function DetailProduct(props) {

    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={`/uploads/${props.data.photo}`} alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">{props.data.kode}</div>
                            <h1 className="display-5 fw-bolder">{props.data.nama}</h1>
                            <div className="fs-5 mb-5">
                                <span>{props.data.harga}</span>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: props.data.deskripsi }}></div>

                            <div className="d-flex">
                                <BtnLink Name="Contact Us" href="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
