import React from 'react'
import logoInstagram from '../../assets/image/instagram-white.png'
import logoLinkedin from '../../assets/image/linkedin-white.png'
import logoWhatsapp from '../../assets/image/whatsapp-white.png'
import logoLocation from '../../assets/image/location-white.png'
import logoTelephone from '../../assets/image/telephone-white.png'
import logoEmail from '../../assets/image/email-white.png'
export default function Footer() {
    const year = new Date();
    return (
        // <div className="container-fluid " >

        <div className="container-fluid footer mt-auto">


            <footer className="py-5 container mt-auto" >
                <div className="row ">
                    <div className="col-4 col-md-2 mb-3">
                        <h5 className="fw-bolder ">Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 fontFooter">Home</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Products</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 fontFooter">Services</a></li>
                            <li className="nav-item mb-2"><a href="/clients" className="nav-link p-0 fontFooter">Clients</a></li>
                            <li className="nav-item mb-2"><a href="/project" className="nav-link p-0 fontFooter">Projects</a></li>
                            <li className="nav-item mb-2"><a href="/brochure" className="nav-link p-0 fontFooter">Brochure</a></li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mb-3">
                        <h5 className="fw-bolder ">Products</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">CCTV</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Office Equipment</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Videotron</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Perangkat Jaringan</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Fire Alarm</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Access Control</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">PABX</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 fontFooter">Public Sound Address System</a></li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mb-3">
                        <h5 className="fw-bolder ">Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 "><a href="/service" className="nav-link p-0  fontFooter" >System Integrator</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 fontFooter">IT Infrastructure & Service</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 fontFooter">IT Networking</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 fontFooter">IT Mapping & Consultation</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 fontFooter">IT Server Development</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 fontFooter">IT Development & Operation</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-2 mb-3">
                        <h5 className="fw-bolder ">Our Online Shop</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fontFooter">Tokopedia</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fontFooter">Facebook - Marketplace</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="d-flex flex-column" id="navbarSupportedContent">
                            <h5 className="fw-bolder ">Contact Us</h5>
                            <div className="  bd-highlight">
                                <img width="30" height="30" src={logoLocation} alt="whatsapp--v1" />

                                <a href="https://www.google.com/maps/place/Nuansa+Inti+Persada.+CV/@-8.662169,115.1949264,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd240b1048b42e3:0x9f3f3a69c0937ea8!8m2!3d-8.662169!4d115.1975013!16s%2Fg%2F1pzv73zps?entry=ttu" className="text-decoration-none links" style={{ color: "#E8E8E8" }} target='_blank'>Jln Gunung Bromo Raya no 6</a>
                            </div>
                            <div className=" bd-highlight"><img width="30" height="30" src={logoTelephone} alt="whatsapp--v1" />
                                <a href="https://wa.me/6282145554374/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target='_blank' className='px-2 text-decoration-none  links' style={{ color: "#E8E8E8" }}>+6282145554374</a>
                            </div>
                            <div className=" bd-highlight"><img width="30" height="30" src={logoEmail} alt="whatsapp--v1" />
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@nuansaintipersada.co.id&su=Email From Website&body=Body%20Text" className='px-2 text-decoration-none  links' style={{ color: "#E8E8E8" }}>info@nuansaintipersada.co.id</a></div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; {year.getFullYear()} CV. Nuansa Inti Persada, All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <a className="px-3" target='_blank' href='https://www.instagram.com/nuansaled/'><img width="30" height="30" src={logoInstagram} alt="instagram-new--v1" /></a>
                        <a className="px-3" target='_blank' href='https://www.linkedin.com/company/nuansa-inti-persada'><img width="30" height="30" src={logoLinkedin} alt="linkedin" /></a>
                        <a className="px-3" target='_blank' href=''><img width="30" height="30" src={logoWhatsapp} alt="whatsapp--v1" /></a>
                    </ul>
                </div>
            </footer>
        </div >
    )
}
