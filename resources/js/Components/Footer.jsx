import React from 'react'
import logoInstagram from '../../assets/image/isntagram-color.png'
import logoLinkedin from '../../assets/image/linkedin-rounded.png'
import logoWhatsapp from '../../assets/image/wa-2.png'
import logoLocation from '../../assets/image/location-rounded.png'
import logoTelephone from '../../assets/image/call.png'
import logoEmail from '../../assets/image/mail.png'
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material'
import logoTokped from '../../assets/image/tokped-2.png'
import LogoNuansa from './LogoNuansa'

export default function Footer() {
    const [dataServiceFooter, setDataServiceFooter] = useState([])
    const [dataProductFooter, setDataProductFooter] = useState([])

    useEffect(() => {
        const getLinkService = async () => {
            const dataService = await axios.get('/data/link/service');
            setDataServiceFooter(dataService.data);
        }
        const getLinkProduct = async () => {
            const dataProduct = await axios.get('/data/link/product');
            setDataProductFooter(dataProduct.data);
        }
        getLinkService();
        getLinkProduct();
    }, [])
    const year = new Date();
    return (
        // <div className="container-fluid " >

        <div className=" footer">
            <footer className="p-5 container " >
                <div className="row row-cols-2">
                    <div className="col  col-lg-3  align-items-center align-self-center">
                        <div className="align-items-center align-self-center">

                            <LogoNuansa color={false} width={175} />
                        </div>


                    </div>

                    <div className="col  col-lg-3 mb-3">
                        <Typography variant='overline' fontWeight={"800"}>
                            Products
                        </Typography>
                        <ul className="nav flex-column">
                            {dataProductFooter.map((res, i) => {
                                return (

                                    <li className="nav-item mb-2 " key={i}><a href={`/product/${res.slug}`} className="nav-link p-0  fontFooter" >{res.nama}</a></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="col  col-lg-3 mb-3">
                        <Typography variant='overline' fontWeight={"800"}>
                            Services
                        </Typography>
                        <ul className="nav flex-column">
                            {dataServiceFooter.map((res, i) => {
                                // { let name = { res.nama } }
                                return (

                                    <li className="nav-item mb-2 " key={i}><a href={`/product/${res.slug}`} className="nav-link p-0  fontFooter text-capitalize" >{res.nama}</a></li>
                                )
                            })}
                        </ul>
                    </div>


                    <div className="col col-lg-3 mb-3">
                        <div className="d-flex flex-column" id="navbarSupportedContent">
                            <Typography variant='overline' fontWeight={"800"}>
                                Contact Us
                            </Typography>
                            <div className="bd-highlight pb-2 ">
                                <img width="20" height="20" src={logoLocation} alt="location--v1" />

                                <a href="https://www.google.com/maps/place/Nuansa+Inti+Persada.+CV/@-8.662169,115.1949264,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd240b1048b42e3:0x9f3f3a69c0937ea8!8m2!3d-8.662169!4d115.1975013!16s%2Fg%2F1pzv73zps?entry=ttu" className="px-2 py-2 text-decoration-none " style={{ color: "#E8E8E8" }} target='_blank'>Jl Gunung Bromo no 6, Denpasar, Bali</a>
                            </div>
                            <div className=" bd-highlight py-2">
                                <img width="20" height="20" src={logoTelephone} alt="whatsapp--v1" />
                                <a href="https://wa.me/6281239483800/?text=Hallo+Nuansa,+saya+tertarik+dengan+produk+dan+layanan+anda" target='_blank' className='px-2 text-decoration-none  py-2 ' style={{ color: "#E8E8E8" }}>+6281239483800</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; {year.getFullYear()} CV. Nuansa Inti Persada</p>
                    <ul className="list-unstyled d-flex">
                        <a className="icon px-3" target='_blank' href='https://www.instagram.com/nuansaintipersada_/'><img width="30" height="30" src={logoInstagram} alt="instagram-new--v1" /></a>
                        <a className="icon px-3 " target='_blank' href='https://www.linkedin.com/company/nuansa-inti-persada'><img width="30" height="30" src={logoLinkedin} alt="linkedin" /></a>
                        <a className="icon px-3" target='_blank' href='https://www.tokopedia.com/nuansaintipersada'><img width="30" height="30" src={logoTokped} alt="whatsapp--v1" /></a>

                    </ul>
                </div>
            </footer >
        </div >
    )
}
