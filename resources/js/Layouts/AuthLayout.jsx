import { Head } from '@inertiajs/react'
import React from 'react'
import '../../assets/css/loginTwo.css'
import bgAuth from '../../assets/image/fo.jpg'
// import '../../assets/js/mainLogin.js'
// import '../../assets/js/jquery.min.js'
export default function AuthLayout({ children }) {

    return (
        <>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.1/mdb.min.css" rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-3.6.0.js"
                    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.1/mdb.min.js"></script>

            </Head>

            <section className="vh-100 gradient-form" >
                <div className="container py-5 vh-100">
                    <div className="row d-flex justify-content-center align-items-center vh-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            {children}

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center " style={{ backgroundImage: `url(${bgAuth})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "" }}>
                                        <div className="text-white px-3 py-4 p-md-2 mx-md-4">
                                            <h4 className='fw-bolder'>Dashboard Website Nuansa Inti Persada</h4>
                                            <p className="small mb-0">
                                                2023 CV. Nuansa Inti Persada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
