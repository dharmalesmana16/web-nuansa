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
import { BsChevronDown, BsTelephoneFill } from "react-icons/bs";// import usePage from '@inertiajs/react';
import { IoMailOpen } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";// import usePage from '@inertiajs/react';
import { BsPersonFill } from "react-icons/bs";// import usePage from '@inertiajs/react';
import { Link, usePage } from '@inertiajs/react';
import LogoNuansa from './LogoNuansa';
import { useEffect } from 'react';
import { useState } from 'react';
import { Typography } from '@mui/material';
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
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbarWeb firstNavbar " id="navbarWeb" >
                <div className="container">
                    <div className="navbar-collapse collapse  d-flex justify-content-between" id="navbarSupportedContent">
                        <div className="">
                            <LogoNuansa width={150} />
                        </div>
                        <div className="">
                            <Typography variant='subtitle1'>
                                <IoMailOpen color='#023e8a' /> info@nuansaintipersada.co.id
                            </Typography>
                            <Typography variant='subtitle1'>
                                <BsTelephoneFill color='#023e8a' /> +6281239483800
                            </Typography>
                        </div>

                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-sm navbar-light secondNavbar  fixed-top " id="navbarComponent" style={{ boxShadow: '0px 10px 2px -10px blue' }}>
                <div className="container ">
                    {/* <LogoCompany /> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse  me-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 ">
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName == "/" ? "activeLink" : "")} `} aria-current="page" href="/">
                                    <Typography variant='overline' fontWeight={"600"}>
                                        Home
                                    </Typography>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/product") ? "activeLink" : "")} `} aria-current="page" href="/product">
                                    <Typography variant='overline' fontWeight={"600"}>
                                        Products
                                    </Typography>
                                </Link>
                            </li>
                            <li className="nav-item dropdown px-3 position-static">
                                <Link className="nav-link dropdown-toggle links links-grow-up" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Typography variant='overline' fontWeight={"600"}>
                                        Services
                                    </Typography>
                                </Link>
                                <ul className="dropdown-menu menuDropdown  mt-2" aria-labelledby="navbarDropdown" style={{ width: "100%" }} >
                                    <div className="container ">
                                        <div className="d-md-flex d-lg-flex flex-lg-row flex-md-row ">
                                            <div className="d-md-flex d-lg-flex flex-lg-column flex-sm-column flex-md-column mb-3">
                                                <li>
                                                    <Typography variant='overline' className='dropdown-item' fontWeight={"600"}>
                                                        Services
                                                    </Typography>
                                                </li>
                                                {service.map((res, i) => {
                                                    let newName = res.nama.toUpperCase()
                                                    return (
                                                        <li key={i}><Link className="dropdown-item " href={`/service/${res.slug}`}>
                                                            <Typography variant='caption' >
                                                                {newName}
                                                            </Typography>
                                                        </Link></li>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/client") ? "activeLink" : "")} `} href="/clients"  >
                                    <Typography variant='overline' className='dropdown-item' fontWeight={"600"}>
                                        Clients
                                    </Typography>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/news") ? "activeLink" : "")} `} href="/news" >
                                    <Typography variant='overline' className='dropdown-item' fontWeight={"600"}>
                                        News
                                    </Typography>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/gallery") ? "activeLink" : "")} `} href="/gallery" >
                                    <Typography variant='overline' className='dropdown-item' fontWeight={"600"}>
                                        Gallery
                                    </Typography>
                                </Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link links links-grow-up ` + `${(pathName.includes("/contactus") ? "activeLink" : "")} `} href="/contactus" >
                                    <Typography variant='overline' className='dropdown-item' fontWeight={"600"}>
                                        Kontak Kami
                                    </Typography>
                                </Link>
                            </li>
                            <div className="d-flex text-white ">
                                <div className="vr" >

                                </div>
                                <li className="nav-item px-1 ">

                                    <a className=" nav-link icon iconNavbar" href='https://www.tokopedia.com/nuansaintipersada' target='_blank'>

                                        <img src={logoTokped} height={30} alt="location--v1" style={{ objectFit: "fill" }} />
                                    </a>
                                </li>
                                {/* <li className="nav-item px-1">

                                    <a className="nav-link icon iconNavbar">

                                        <img src={logoInstagram} height={30} alt="location--v1" style={{ objectFit: "fill", borderRadius: "50%" }} />
                                    </a>
                                </li> */}
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
        </>
    )
}
