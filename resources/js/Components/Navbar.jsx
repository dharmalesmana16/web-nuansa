import React from 'react'
import Logo from '../../assets/image/logonuansaputih.png';
import logoLocation from '../../assets/image/location-white.png'
import logoTelephone from '../../assets/image/telephone-white.png'
import logoEmail from '../../assets/image/email-white.png'
import logoUser from '../../assets/image/login-white.png'
import logoTokped from '../../assets/image/tokped-2.png'
import { AiFillAlipayCircle } from "react-icons/ai";
import logoLinkedin from '../../assets/image/linkedin-white.png'
import logoInstagram from '../../assets/image/isntagram-color.png'

import { BsChevronDown } from "react-icons/bs";// import usePage from '@inertiajs/react';
import { BsCart4 } from "react-icons/bs";// import usePage from '@inertiajs/react';
import { BsPersonFill } from "react-icons/bs";// import usePage from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import LogoNuansa from './LogoNuansa';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Navbar(props) {
    const [service, setService] = useState([])
    useEffect(() => {
        // let data = { "category_product_id": kategori };

        axios.get('/data/getService').then((response) => {
            setService(response.data);
        });
    }, [])
    // console.log(service.data);
    let pathName = window.location.pathname;
    // function handleClick(e) {
    //     e.preventDefault();
    //     let dataContent = document.querySelector('.firstContentNavbar');
    //     let tampung = document.querySelector('.contentFirstNavbar');
    //     t
    // let dataprops = usePage().props;
    // let role;
    // if (dataprops.auth.user != null) {
    //     role = dataprops.auth.user.role;
    // }
    // console.log(dataprops.auth.user.role)
    // }
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg  navbar-light navbarWeb firstNavbar firstContentNavbar" id="navbarWeb" >
                    <div className="container ">
                        <div className="navbar-collapse collapse  " id="navbarSupportedContent">

                            <div className="p-1 flex-grow-1 bd-highlight">
                                <img width="30" height="30" src={logoLocation} alt="whatsapp--v1" />

                                <a href="https://www.google.com/maps/place/Nuansa+Inti+Persada.+CV/@-8.662169,115.1949264,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd240b1048b42e3:0x9f3f3a69c0937ea8!8m2!3d-8.662169!4d115.1975013!16s%2Fg%2F1pzv73zps?entry=ttu" className="text-decoration-none text-white links" target='_blank'>Jln Gunung Bromo Raya no 6</a>
                            </div>
                            <div className="p-1 bd-highlight"><img width="30" height="30" src={logoTelephone} alt="whatsapp--v1" />
                                <a href="https://wa.me/6282145554374/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target='_blank' className='px-2 text-decoration-none text-white links'>+6282145554374</a>
                            </div>
                            <div className="p-1 bd-highlight"><img width="30" height="30" src={logoEmail} alt="whatsapp--v1" />
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@nuansaintipersada.co.id&su=Email From Website&body=Body%20Text" className='px-2 text-decoration-none text-white links'>info@nuansaintipersada.co.id</a></div>
                        </div>
                    </div>
                </nav> */}

            <nav className="navbar navbar-expand-lg navbar-light secondNavbar navbar-default navbar-fixed-top fixed-top " style={{ boxShadow: '0px 10px 5px -10px blue', }}>
                <div className="container ">
                    <LogoNuansa width={175} color={false} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse  me-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-lg-0 ">
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName == "/" ? "activeLink" : "")} `} aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/product") ? "activeLink" : "")} `} aria-current="page" href="/product">Products</Link>
                            </li>
                            <li className="nav-item dropdown px-3 position-static">
                                <a className="nav-link dropdown-toggle links links-grow-up" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu menuDropdown  mt-2" aria-labelledby="navbarDropdown" style={{ width: "100%" }} >
                                    <div className="container ">
                                        <div className="d-md-flex d-lg-flex flex-lg-row flex-md-row ">
                                            <div class="d-md-flex d-lg-flex flex-lg-column flex-sm-column flex-md-column mb-3">
                                                <li><p className="dropdown-item fw-bold mb-auto " >Layanan Kami</p></li>
                                                {service.map((res, i) => {
                                                    let newName = res.nama.toUpperCase()
                                                    return (
                                                        <li key={i}><Link className="dropdown-item " href={`/service/${res.slug}`}>{newName}</Link></li>

                                                    )
                                                })}
                                            </div>

                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/client") ? "activeLink" : "")} `} href="/clients"  >Clients</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/news") ? "activeLink" : "")} `} href="/news" >News</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/gallery") ? "activeLink" : "")} `} href="/gallery" >Gallery</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/contactus") ? "activeLink" : "")} `} href="/contactus" >Contact Us</Link>
                            </li>
                            <div className="d-flex text-white ">
                                <div className="vr" >

                                </div>
                                <li className="nav-item px-1 ">

                                    <a className=" nav-link icon iconNavbar" href='https://www.tokopedia.com/nuansaintipersada' target='_blank'>

                                        <img src={logoTokped} height={30} alt="location--v1" style={{ objectFit: "fill" }} />
                                    </a>
                                </li>
                                <li className="nav-item px-1">

                                    <a className="nav-link icon iconNavbar">

                                        <img src={logoInstagram} height={30} alt="location--v1" style={{ objectFit: "fill", borderRadius: "50%" }} />
                                    </a>
                                </li>
                            </div>


                        </ul>

                        {/* <ul className='navbar-nav'>

                                <li className="nav-item dropdown px-3">
                                    {dataprops.auth.user == null ? (
                                        <div className="d-flex">
                                            <div className="p-2">
                                                <li className="nav-item px-3">
                                                    <a className={`nav-link links  ` + `${(pathName == "/project" ? "activeLink" : "")} `} href="/signin" >
                                                        Sign in
                                                        <img src={logoUser} className="rounded-circle " height={30} alt="" srcset="" />
                                                    </a>
                                                </li>
                                            </div>
                                        </div>

                                    ) : (
                                        <a className="nav-link links " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {dataprops.auth.user.username}
                                            <BsPersonFill className='fs-1' />
                                        </a>
                                    )
                                    }
                                    {role == "user" ? (

                                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">

                                            <li>
                                                <a className="dropdown-item text-dark p-2" href="#"><BsCart4 />Cart</a>
                                            </li>
                                            <li>
                                                <Link href='/signout' method='POST' className='dropdown-item' >Sign Out</Link>
                                            </li>

                                        </ul>
                                    ) : (

                                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">

                                            <li>
                                                <Link href='/dashboard' method='get' className='dropdown-item' >Dashboard</Link>

                                            </li>
                                            <li>
                                                <Link href='/signout' method='POST' className='dropdown-item' >Sign Out</Link>
                                            </li>

                                        </ul>
                                    )}

                                </li>
                            </ul> */}

                    </div>
                </div>
            </nav >

        </div >
    )
}
