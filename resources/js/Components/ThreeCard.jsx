import React from 'react'
import gambarCCTV from '../../assets/image/cctvProduct.jpg';
import BtnLink from './BtnLink';

export default function ThreeCard(props) {
    return (
        <div className="container  d-flex justify-content-center">

            <div className="row gx-4 gx-lg-5 ">
                {/* Start Code */}
                {props.data ? props.data.map((res, i) => {
                    return (
                        <div className="col-md-3 mb-5 " key={i}>
                            <div className="card h-100 border-0 ">
                                <img src={`/uploads/${res.photo}`} className="card-img-top rounded-3 h-100" alt="..." />
                                <div className="card-body pt-3">
                                    <h4 className=" fw-bolder">{res.nama}</h4>
                                    <div dangerouslySetInnerHTML={{ __html: res.description }}></div>
                                </div>
                                <div className="card-footer bg-light border-0">
                                    <BtnLink href={`/product/cctv/${res.slug}`} Name="See Detail" />
                                </div>
                            </div>
                        </div>
                    )
                }) : (
                    <p className='Lead'> Belum ada produk yang tersedia</p>
                )
                }
                {/* End Code */}
            </div>
        </div >
    )
}
