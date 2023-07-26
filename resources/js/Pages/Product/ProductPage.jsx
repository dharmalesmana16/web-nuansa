import BtnLink from '@/Components/BtnLink'
import Pagination from '@/Components/Pagination'
import ThreeCard from '@/Components/ThreeCard'
import Layout from '@/Layouts/Layout'
import React from 'react'
export default function ProductPage(props) {
    return (
        < Layout >

            <div className="container">
                <div className="row gx-4 gx-lg-5">
                    {/* Start Code */}
                    {props.data ? props.data.map((res, i) => {
                        return (
                            <div className="col-md-4 mb-5 " key={i}>
                                <div className="card h-100 border-0">
                                    <img src={`/uploads/${res.photo}`} className="img-thumbnail" width="200" alt="..." />
                                    <div className="card-body pt-3">
                                        <h1 className="display-6 fw-bolder">{res.nama}</h1>
                                        <div dangerouslySetInnerHTML={{ __html: res.deskripsi }}></div>
                                    </div>
                                    <div className="card-footer bg-light border-0">
                                        <BtnLink href={`/product/${res.slug}`} Name="See Detail" />

                                    </div>
                                </div>
                            </div>
                        )
                    }) : ""
                    }
                    {/* <Pagination datas={props.datacctv} /> */}


                </div>
            </div>

        </Layout >
    )
}
