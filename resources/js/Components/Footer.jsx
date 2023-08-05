import React from 'react'
import logoInstagram from '../../assets/image/instagram.png'
import logoLinkedin from '../../assets/image/linkedin.png'
import logoWhatsapp from '../../assets/image/whatsapp.png'
export default function Footer() {
    const year = new Date();
    return (
        <div className="container-fluid bg-white">


            <footer className="py-5 container " >
                <div className="row ">
                    <div className="col-4 col-md-2 mb-3">
                        <h5>Menus</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Products</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">Services</a></li>
                            <li className="nav-item mb-2"><a href="/clients" className="nav-link p-0 text-body-secondary">Clients</a></li>
                            <li className="nav-item mb-2"><a href="/project" className="nav-link p-0 text-body-secondary">Projects</a></li>
                            <li className="nav-item mb-2"><a href="/brochure" className="nav-link p-0 text-body-secondary">Brochure</a></li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mb-3">
                        <h5>Products</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">CCTV</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Office Equipment</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Videotron</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Perangkat Jaringan</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Fire Alarm</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Access Control</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">PABX</a></li>
                            <li className="nav-item mb-2"><a href="/product" className="nav-link p-0 text-body-secondary">Public Sound Address System</a></li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mb-3">
                        <h5>Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">System Integrator</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">IT Infrastructure & Service</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">IT Networking</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">IT Mapping & Consultation</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">IT Server Development</a></li>
                            <li className="nav-item mb-2"><a href="/service" className="nav-link p-0 text-body-secondary">IT Development & Operation</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-2 mb-3">
                        <h5>Our Online Shop</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tokopedia</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook - Marketplace</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; {year.getFullYear()} CV. Nuansa Inti Persada, All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <a className="px-3" href=''><img width="30" height="30" src={logoInstagram} alt="instagram-new--v1" /></a>
                        <a className="px-3" href=''><img width="30" height="30" src={logoLinkedin} alt="linkedin" /></a>
                        <a className="px-3" href=''><img width="30" height="30" src={logoWhatsapp} alt="whatsapp--v1" /></a>
                    </ul>
                </div>
            </footer>
        </div>

    )
}
