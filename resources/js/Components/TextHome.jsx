import React from 'react'
import BtnLink from './BtnLink'
export default function TextHome(props) {


    return (
        <div>
            <section className="py-1 border-bottom container" id="features">
                <div className="container my-2">
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
            </section >
        </div >
        // backup
        // <section className="py-3 border-bottom my-1 container" id="features">
        //     <div className="container px-5 my-5">
        //         <div className="row gx-5">
        //             <div className="col-lg-6 mb-5 mb-lg-0">
        //                 <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
        //                 <h2 className="h4 fw-bolder">Title</h2>
        //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus aut tempore nostrum facilis, a non facere placeat magnam ipsam ducimus eos reiciendis quos inventore quod nulla debitis officia libero?</p>
        //                 <BtnLink />
        //             </div>
        //             <div className="col-lg-6 mb-5 mb-lg-0">
        //                 <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
        //                 <h2 className="h4 fw-bolder">Featured title</h2>
        //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla saepe, nesciunt eius nam excepturi reprehenderit eum perferendis voluptas voluptate consequuntur nostrum! Debitis culpa optio officiis illo doloremque molestiae sint.</p>
        //                 <BtnLink />

        //             </div>
        //             <div className="col-lg-6">
        //                 <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
        //                 <h2 className="h4 fw-bolder">Featured title</h2>
        //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla saepe, nesciunt eius nam excepturi reprehenderit eum perferendis voluptas voluptate consequuntur nostrum! Debitis culpa optio officiis illo doloremque molestiae sint.</p>
        //                 <BtnLink />

        //             </div>
        //             <div className="col-lg-6">
        //                 <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
        //                 <h2 className="h4 fw-bolder">Featured title</h2>
        //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla saepe, nesciunt eius nam excepturi reprehenderit eum perferendis voluptas voluptate consequuntur nostrum! Debitis culpa optio officiis illo doloremque molestiae sint.</p>
        //                 <BtnLink />

        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}
