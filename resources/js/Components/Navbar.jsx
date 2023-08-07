import React from 'react'
import Logo from '../../assets/image/logonuansaputih.png';
import logoLocation from '../../assets/image/location-white.png'
import logoTelephone from '../../assets/image/telephone-white.png'
import logoEmail from '../../assets/image/email-white.png'
import { Link } from '@inertiajs/react';
export default function Navbar(props) {
    let pathName = window.location.pathname;
    // function handleClick(e) {
    //     e.preventDefault();
    //     let dataContent = document.querySelector('.firstContentNavbar');
    //     let tampung = document.querySelector('.contentFirstNavbar');
    //     t

    // }
    return (
        <div>
            <header className='sticky-top'>
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

                <nav className="navbar navbar-expand-lg navbar-light secondNavbar  " style={{ boxShadow: '0px 10px 5px -10px blue', }}>
                    <div className="container ">
                        <img src={Logo} alt="" style={{ width: 175 }} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse  me-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto  mb-lg-0 ">
                                <li className="nav-item px-3">
                                    <Link className={`nav-link links links-grow-up ` + `${(pathName == "/" ? "activeLink" : "")} `} aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link className={`nav-link links links-grow-up ` + `${(pathName == "/product" ? "activeLink" : "")} `} aria-current="page" href="/product">Products</Link>
                                </li>
                                <li className="nav-item dropdown px-3">
                                    <a className="nav-link dropdown-toggle links links-grow-up" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">IT Manage Service</a></li>
                                        <li><a className="dropdown-item" href="#">IT Solution for Business Development</a></li>
                                        <li><a className="dropdown-item" href="#">IT Infrastructure & Service</a></li>
                                        <li><a className="dropdown-item" href="#">System Integrator</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item px-3">
                                    <a className={`nav-link links links-grow-up ` + `${(pathName == "/clients" ? "activeLink" : "")} `} href="/clients"  >Clients</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className={`nav-link links links-grow-up ` + `${(pathName == "/project" ? "activeLink" : "")} `} href="/project" >Projects</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className={`nav-link links links-grow-up ` + `${(pathName == "/brocure" ? "activeLink" : "")} `} href="/gallery" >Gallery</a>
                                </li>
                            </ul>
                            <div className="contentFirstNavbar">

                            </div>
                            {/* <a className="px-3" href=''><img width="30" height="30" src={logoInstagram} alt="instagram-new--v1" /></a> */}

                        </div>
                    </div>
                </nav >

            </header>
        </div >
    )
}
