import Layout from '@/Layouts/Layout'
import React from 'react'

export default function Index(props) {
    // console.log(props.dataprojects);
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
                                {props.dataproject ? props.dataproject.map((data, i) => {
                                    if (isToday(data.created_at)) {
                                        return (
                                            <div className="card mb-4">

                                                <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                                <div className="card-body">
                                                    <div className="small text-muted">January 1, 2023</div>
                                                    <h2 className="card-title">Featured Post Title</h2>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                                </div>
                                            </div>
                                        )
                                    } else {


                                        return (

                                            <div className="col-lg-6">
                                                <div className="card mb-4">
                                                    <a href="#!">
                                                        <img className="card-img-top" src={`/uploads/${data.photo}`} height={350} alt="..." /></a>
                                                    <div className="card-body">
                                                        <div className="small text-muted">{data.created_at}</div>
                                                        <h2 className="card-title h4">{data.nama}</h2>
                                                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                                        <a className="btn btn-primary" href="#!">Read more →</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }) : "Berita Belum Tersedia"}
                                {/* End Code */}
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
