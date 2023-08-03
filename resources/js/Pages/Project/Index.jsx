import Pagination from '@/Components/Pagination';
import Layout from '@/Layouts/Layout'
import React from 'react'

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

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">


                            <div className="row">
                                {/* Start Code */}
                                {props.dataproject.data.length != 0 ? props.dataproject.data.map((data, i) => {


                                    return (

                                        <div className="col-lg-6">
                                            <div className="card mb-4" key={i}>
                                                <a href="#!">
                                                    <img className="card-img-top" src={`/storage/${data.photo}`} height={350} alt="..." /></a>
                                                <div className="card-body">
                                                    <div className="small text-muted">{data.created_at}</div>
                                                    <h2 className="card-title h4">{data.nama}</h2>
                                                    <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                                    <a className="btn btn-primary" href={`/project/${data.slug}`}>Read more →</a>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                }) : (<p className='text-center'>Berita Belum Tersedia</p>)}
                                {/* End Code */}
                            </div>
                            <div className="d-flex justify-content-center">

                                <Pagination links={props.dataproject.links} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-header">Search</div>
                                <div className="card-body">
                                    <h4 className='fw-bold'>Project Terpopuler</h4>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
