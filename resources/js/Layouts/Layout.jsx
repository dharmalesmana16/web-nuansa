import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import '../../assets/css/app.css'
import { useEffect } from 'react';
export default function Layout({ props, children }) {
    // let pathName = window.location.pathname;
    // let padding = "py-5";
    // if (pathName == "/") {
    //     padding = "";
    // }
    useEffect(() => {
        console.log("hai")
        let navbar_height = document.querySelector('#navbarComponent').offsetHeight;

        console.log(navbar_height)
        document.body.style.paddingTop = navbar_height + 'px';
        // bodyPage.style.paddingTop = navbar_height + 'px';
        document.addEventListener('DOMContentLoaded', function () {

            // let bodyPage = document.getElementById('#body')
        })

    }, []);

    return (
        <>

            <div className='d-flex flex-column min-vh-100  '>
                <Navbar />
                <div id='body'>
                    {children}
                </div>
                <Footer />
            </div >
        </>
    );
}
