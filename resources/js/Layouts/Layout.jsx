import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '../../assets/css/app.css'
export default function Layout({ props, children }) {
    // let pathName = window.location.pathname;
    // let padding = "py-5";
    // if (pathName == "/") {
    //     padding = "";
    // }
    return (
        <>

            <div className='d-flex flex-column min-vh-100  '>
                <Navbar />
                <div>
                    {children}
                </div>
                <Footer />
            </div >
        </>
    );
}
