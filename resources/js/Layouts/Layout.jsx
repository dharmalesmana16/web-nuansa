import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import './../../css/app.css'
export default function Layout({ props, children }) {

    return (


        <div className='d-flex flex-column min-vh-100 '>
            <Navbar />
            <div className="py-5" >
                {children}
            </div>
            <Footer />
        </div>
    );
}
