import React from 'react'
import Logo from '../../assets/image/logonuansa.png';
import NavLink from './NavLink';
import logoInstagram from '../../assets/image/instagram.png'
import { Link } from '@inertiajs/react';
export default function Navbar(props) {
    return (
        <div>
            <header className='fixed-top '>
                <nav className="navbar navbar-expand-lg bg-light navbar-light navbarWeb" id="navbarWeb">
                    <div className="container d-flex ">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >

                            <div className="p-1 flex-grow-1 bd-highlight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375-.028-.028c-3.905-3.905-3.905-10.237 0-14.142 3.904-3.905 10.236-3.905 14.141 0ZM5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024.002.002 5.378 5.378a.859.859 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489Z"></path></svg>
                                <a href="https://www.google.com/maps/place/Nuansa+Inti+Persada.+CV/@-8.662169,115.1949264,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd240b1048b42e3:0x9f3f3a69c0937ea8!8m2!3d-8.662169!4d115.1975013!16s%2Fg%2F1pzv73zps?entry=ttu" className="text-decoration-none text-dark" target='_blank'>Jln Gunung Bromo Raya no 6</a></div>
                            <div className="p-1 bd-highlight"><img width="30" height="30" src="https://img.icons8.com/dotty/80/phone.png" alt="phone" />
                                <a href="https://wa.me/6282145554374/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target='_blank' className='px-2 text-decoration-none text-dark'>+6282145554374</a></div>
                            <div className="p-1 bd-highlight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10.89 1.767a2.252 2.252 0 0 1 2.22 0l9.75 5.525A2.25 2.25 0 0 1 24 9.249v9.501A2.25 2.25 0 0 1 21.75 21H2.25A2.25 2.25 0 0 1 0 18.75v-9.5c0-.81.435-1.558 1.14-1.958Zm1.48 1.305a.75.75 0 0 0-.74 0l-9.316 5.28 7.41 4.233a3.75 3.75 0 0 1 4.553 0l7.41-4.234-9.317-5.28ZM20.65 19.5l-7.26-5.704a2.25 2.25 0 0 0-2.78 0L3.35 19.5Zm1.85-9.886-6.95 3.971 6.663 5.236c.089.07.161.159.21.26a.745.745 0 0 0 .077-.331ZM8.45 13.585 1.5 9.614v9.136c0 .119.028.23.076.33a.744.744 0 0 1 .21-.259Z"></path></svg><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@nuansaintipersada.co.id&su=Email From Website&body=Body%20Text" className='px-2 text-decoration-none text-dark'>info@nuansaintipersada.co.id</a></div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: '0px 10px 5px -10px gray', }}>
                    <div className="container">
                        <img src={Logo} alt="" style={{ width: 175 }} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                                <li className="nav-item px-3">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link className="nav-link active" aria-current="page" href="/product">Products</Link>
                                </li>
                                <li className="nav-item dropdown px-3">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <a className="nav-link" href="/clients" >Clients</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="/project" >Projects</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="/brocure" >Brochure</a>
                                </li>
                            </ul>
                            <a className="px-3" href=''><img width="30" height="30" src={logoInstagram} alt="instagram-new--v1" /></a>

                        </div>
                    </div>
                </nav >

            </header>
        </div >
    )
}
