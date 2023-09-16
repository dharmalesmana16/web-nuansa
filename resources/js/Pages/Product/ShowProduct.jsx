import BtnLink from '@/Components/BtnLink'
import ConvertHTML from '@/Components/ConvertHTML'
import Pagination from '@/Components/Pagination'
import ThreeCard from '@/Components/CardNews'
import Layout from '@/Layouts/Layout'
import React from 'react'
import FileResizer from 'react-image-file-resizer'
import ProductCard from '@/Components/ProductCard'
import { Grid } from '@mui/material'
export default function show(props) {
    console.log(props.datas);


    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        < Layout >

            <div className="container " style={{ marginTop: "75px" }}>

                <Grid container spacing={{ md: 2, xs: 2 }} columns={{ xs: 4, md: 12 }}  >
                    {/* Start Code */}
                    {props.data.data.length > 0 ? props.data.data.map((res, i) => {
                        // let deskripsi = res.deskripsi;
                        // if (deskripsi.length > 50) {
                        //     deskripsi = res.deskripsi.substr(0, 50);
                        // } else {
                        //     deskripsi = res.deskripsi;
                        // }
                        return (
                            <Grid item md={3} xs={4} >


                                {/* <div className="card bg-white shadow border-0 h-100" >

                                    <img src={`/storage/${res.gambar}`} className="img-fluid w-100 " style={{
                                        objectFit: 'fill',
                                        height: "250px",
                                    }} alt="..." />
                                    <div className="card-body text-center">
                                        <p className=" fs-5">{res.namaproduct}</p>
                                        <p className="card-text fw-bolder fs-5">{rupiah(res.harga)}</p>

                                    </div>
                                    <div className="card-footer bg-white border-0 align-self-center d-flex">
                                        <BtnLink href={`/product/show/${res.slugProduct}`} Name="See Detail" />
                                        {res.namaKatalog == "Brochure" ?
                                            (
                                                <BtnLink href={`/product/download/${res.slugProduct}`} Name="Download File" />
                                            ) : ""}
                                    </div>
                                </div> */}
                                <ProductCard photo={`/storage/public/${res.gambar}`} judul={res.namaproduct} deskripsi={rupiah(res.harga)} link={`/product/show/${res.slugProduct}`} className={"cardShowProduct"} catalog={res.namaKatalog} linkDownload={`/download/product/${res.gambar}`} />
                            </Grid>
                        )
                    }) :
                        <div className='d-flex justify-content-center'>

                            <p className='fs-5 text-center' style={{ marginTop: "75px" }}>Produk Belum Tersedia, Hubungi kami jika ingin menanyakan produk ini</p>
                        </div>
                    }


                </Grid>
                <div className="d-flex justify-content-center py-3">
                    {props.data.data.length > 0 ? (

                        <Pagination links={props.data.links} />
                    ) : ""}
                </div>
            </div >

        </Layout >
    )
}
