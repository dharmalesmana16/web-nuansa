import Pagination from '@/Components/Pagination';
import Layout from '@/Layouts/Layout'
import React from 'react'
// import { Typography } from '@mui/material';
export default function Index(props) {

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    function isToday(date) {
        const today = new Date();

        // 👇️ Today's date
        console.log(today);

        if (
            today.getFullYear === date.getFullYear &&
            today.getMonth() === date.getMonth() &&
            today.getDate() === date.getDate()
        ) {
            return true;
        }

        return false;
    }
    return (
        <Layout >

            <div className="container  py-5">

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mx-auto ">

                    {/* Start Code */}

                    {props.dataproject.data.length != 0 ? props.dataproject.data.map((data, i) => {


                        return (
                            <>
                                <div className="col p-2  ">



                                    <div className="row">
                                        <div className="col-md-6">

                                            <img src={`/storage/${data.photo}`} className="img-fluid  rounded-4 " style={{
                                                objectFit: 'fill',
                                                width: "100%",
                                                height: "250px",
                                            }} alt="..." />
                                        </div>
                                        <div className="col-md-6">

                                            <div className="card border-0 h-100">

                                                <div className="card-body">
                                                    <Typography variant="h6" className='fw-bold text-uppercase' gutterBottom>
                                                        {data.nama}
                                                    </Typography>                                                </div>
                                                <div className="text-end">
                                                    <a className="secondLinks" href={`/project/${data.slug}`}>Selengkapnya {">"}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </>
                        )

                    }) : (<p className='text-center'>Berita Belum Tersedia</p>)}
                    {/* End Code */}
                </div>
                <div className="d-flex justify-content-center">

                    <Pagination links={props.dataproject.links} />
                </div>
            </div>

        </Layout >
    )
}
