import React from 'react';
import { Head } from '@inertiajs/react';
// import StyleDashboard from '../../css/dashboard.css';
import '../../assets/css/dashboard.css';
// import '../../assets/js/dashboard.js';
// import usePage from '@inertiajs/react';
import LogoNuansa from '@/Components/LogoNuansa';
export default function DashboardLayout({ user, header, children }) {
    // let menusbtn = "asd";
    // const { auth } = usePage().props;
    const handleClick = () => {
        let sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
        let mainWrapper = document.querySelector(".main-wrapper");
        let overlay = document.querySelector(".overlay");
        let menuToggleButtonIcon = document.querySelector("#menu-toggle i");

        sidebarNavWrapper.classList.toggle("active");
        overlay.classList.add("active");
        mainWrapper.classList.toggle("active");

        if (document.body.clientWidth > 1200) {
            if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
                menuToggleButtonIcon.classList.remove("lni-chevron-left");
                menuToggleButtonIcon.classList.add("lni-menu");
            } else {
                menuToggleButtonIcon.classList.remove("lni-menu");
                menuToggleButtonIcon.classList.add("lni-chevron-left");
            }
        } else {
            if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
                menuToggleButtonIcon.classList.remove("lni-chevron-left");
                menuToggleButtonIcon.classList.add("lni-menu");
            }
        }
        overlay.addEventListener("click", () => {
            sidebarNavWrapper.classList.remove("active");
            overlay.classList.remove("active");
            mainWrapper.classList.remove("active");
        });
    };
    return (
        <div>

            <aside className="sidebar-nav-wrapper">
                <div className="navbar-logo">
                    <LogoNuansa />
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item">
                            <a href="/dashboard">
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dashboard/services">
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Services</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dashboard/projects">
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dashboard/products">
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.4166 7.33333C18.9383 7.33333 20.1666 8.56167 20.1666 10.0833V15.5833H16.4999V19.25H5.49992V15.5833H1.83325V10.0833C1.83325 8.56167 3.06159 7.33333 4.58325 7.33333H5.49992V2.75H16.4999V7.33333H17.4166ZM7.33325 4.58333V7.33333H14.6666V4.58333H7.33325ZM14.6666 17.4167V13.75H7.33325V17.4167H14.6666ZM16.4999 13.75H18.3333V10.0833C18.3333 9.57917 17.9208 9.16667 17.4166 9.16667H4.58325C4.07909 9.16667 3.66659 9.57917 3.66659 10.0833V13.75H5.49992V11.9167H16.4999V13.75ZM17.4166 10.5417C17.4166 11.0458 17.0041 11.4583 16.4999 11.4583C15.9958 11.4583 15.5833 11.0458 15.5833 10.5417C15.5833 10.0375 15.9958 9.625 16.4999 9.625C17.0041 9.625 17.4166 10.0375 17.4166 10.5417Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Category Product</span>
                            </a>
                        </li>
                        <li className="nav-item nav-item-has-children">
                            <a
                                href="#0"
                                className="collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#ddmenu_3"
                                aria-controls="ddmenu_3"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.9067 14.2908L15.2808 11.9167H6.41667V10.0833H15.2808L12.9067 7.70917L14.2083 6.41667L18.7917 11L14.2083 15.5833L12.9067 14.2908ZM17.4167 2.75C17.9029 2.75 18.3692 2.94315 18.713 3.28697C19.0568 3.63079 19.25 4.0971 19.25 4.58333V8.86417L17.4167 7.03083V4.58333H4.58333V17.4167H17.4167V14.9692L19.25 13.1358V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C3.56583 19.25 2.75 18.425 2.75 17.4167V4.58333C2.75 3.56583 3.56583 2.75 4.58333 2.75H17.4167Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Product</span>
                            </a>
                            <ul id="ddmenu_3" className="collapse dropdown-nav">
                                <li>
                                    <a href="/dashboard/product/cctv"> CCTV </a>
                                </li>
                                <li>
                                    <a href="/dashboard/product/videotron">Videotron</a>
                                </li>
                                <li>
                                    <a href="/dashboard/product/iot">Internet of Things</a>
                                </li>
                                <li>
                                    <a href="/dashboard/product/ofe">Office Equipment</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="overlay"></div>
            <main className="main-wrapper">
                <header className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-6">
                                <div className="header-left d-flex align-items-center">
                                    <div className="menu-toggle-btn mr-20">
                                        <button
                                            id='menu-toggle'
                                            className="main-btn primary-btn btn-hover "
                                            onClick={handleClick}
                                        >
                                            <i className="lni lni-chevron-left me-2"></i> Menu
                                        </button>
                                    </div>
                                    <div className="header-search d-none d-md-flex">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <button><i className="lni lni-search-alt"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-6">
                                <div className="header-right">
                                    <div className="profile-box ml-15">
                                        <button
                                            className="dropdown-toggle bg-transparent border-0"
                                            type="button"
                                            id="profile"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className="profile-info">
                                                <div className="info">
                                                    <h6> Jhon</h6>

                                                </div>
                                            </div>
                                            <i className="lni lni-chevron-down"></i>
                                        </button>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="profile"
                                        >
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-user"></i> View Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-alarm"></i> Notifications
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0"> <i className="lni lni-inbox"></i> Messages </a>
                                            </li>
                                            <li>
                                                <a href="#0"> <i className="lni lni-cog"></i> Settings </a>
                                            </li>
                                            <li>
                                                <a href="#0"> <i className="lni lni-exit"></i> Sign Out </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="container py-5">
                    {children}
                </section>
            </main>

        </div>

    )
}
