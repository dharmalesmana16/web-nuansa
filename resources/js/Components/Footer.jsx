import React from 'react'
import logoInstagram from '../../assets/image/instagram.png'
import logoLinkedin from '../../assets/image/linkedin.png'
import logoWhatsapp from '../../assets/image/whatsapp.png'
export default function Footer() {
    const year = new Date();
    return (
        <footer className="py-3 my-4 mt-auto bg-white justify-center " style={{ padding: '60px 15px 0' }}>

            <ul className="nav justify-content-center border-bottom pb-3 mb-3 mx-auto">
                <a className="px-3" href=''><img width="30" height="30" src={logoInstagram} alt="instagram-new--v1" /></a>
                <a className="px-3" href=''><img width="30" height="30" src={logoLinkedin} alt="linkedin" /></a>
                <a className="px-3" href=''><img width="30" height="30" src={logoWhatsapp} alt="whatsapp--v1" /></a>
            </ul>
            <p className="text-center text-body-secondary">&copy; {year.getFullYear()} CV.Nuansa Inti Persada</p>
        </footer>



    )
}
