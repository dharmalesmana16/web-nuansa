import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import './../../css/app.css'
export default function Layout({ props, children }) {

    return (


        <div className='d-flex flex-column vh-100 '>
            <Navbar />
            <div style={{ padding: '150px 0 0' }} >
                {children}
            </div>
            <Footer />
        </div>
    );
}
