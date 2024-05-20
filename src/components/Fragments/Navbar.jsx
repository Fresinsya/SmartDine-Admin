import React, { useEffect, useState } from 'react'
import { GoHomeFill } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { MdRestaurant } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";


const Navbar = () => {
    const [activeNav, setActiveNav] = useState(localStorage.getItem("activeNav") || null);
    const [redirecting, setRedirecting] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [menu, setMenu] = useState(false);

    const hapusLocalStorage = () => {
        if (localStorage.getItem("nama") !== null && localStorage.getItem("username") !== null && localStorage.getItem("password") !== null && localStorage.getItem("isLogin") !== "false") {
            localStorage.removeItem("nama");
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            // localStorage.setItem("isLoggedOut", true);
            localStorage.setItem("isLogin", false);
            setRedirecting(true);
            setShowNotification(true);
            setShowModal(true);
            alert('Anda telah logout');
        } else {
            alert('Anda belum login');
        }
    };

    const handleClickMenu = () => {
        setMenu(!menu); // Toggle menu state
    }

    useEffect(() => {
        let timeout;
        if (showNotification) {
            timeout = setTimeout(() => {
                setShowNotification(false);
                if (redirecting) {
                    window.location.href = "/login";
                }
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [showNotification, redirecting]);

    useEffect(() => {
        const defaultNav = activeNav || "/meal";
    localStorage.setItem("activeNav", defaultNav);
    }, [activeNav]);

    // Fungsi untuk menangani klik pada navbar
    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
    };

    return (
        <nav>
            <div className="w-14 md:w-20 h-screen text-white fixed flex flex-col justify-evenly items-center">
                <div className="h-[15%] flex flex-col justify-center">
                    <a
                        href="#"
                        onClick={() => handleNavClick("#")} // Fixed missing parentheses
                        className={`flex items-center space-x-2 ${activeNav === "#" ? "border-2 p-2 border-[#B5D5FE] rounded-2xl" : ""}`}
                    >
                        <TiThMenu size={20} />
                    </a>
                </div>
                <div className="h-[50%] flex flex-col justify-center items-center gap-12">
                    {/* <a
                        href="/"
                        onClick={() => handleNavClick("/")}
                        // Menambahkan kelas "border border-white" jika activeNav adalah "/"
                        className={`flex items-center space-x-2 ${activeNav === "/" ? "border-2 p-2 border-[#B5D5FE] rounded-2xl" : ""}`}
                    >
                        <GoHomeFill size={20} />
                    </a> */}
                    {/* <a
                        href="/menu"
                        onClick={() => handleNavClick("/menu")}
                        className={`flex items-center space-x-2 ${activeNav === "/menu" ? "border-2 p-2 border-[#B5D5FE] rounded-2xl" : ""}`}
                    >

                        <FiShoppingBag size={20} />
                    </a> */}
                    <a
                        href="/"
                        onClick={() => handleNavClick("/")}
                        className={`flex items-center space-x-2 ${activeNav === "/" ? "border-2 p-2 border-[#B5D5FE] rounded-2xl" : ""}`}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>

                    </a>
                    {/* <a
                        href="/quiz"
                        onClick={() => handleNavClick("/quiz")}
                        className={`flex items-center space-x-2 ${activeNav === "/quiz" ? "border-2 p-2 border-[#B5D5FE] rounded-2xl" : ""}`}

                    >
                        <MdQuiz size={20} />
                    </a> */}
                </div>
                <div className="h-[40%] flex flex-col justify-center gap-7">
                    
                    <a
                        href="/profile"
                        onClick={() => handleNavClick("/profile")}
                        className={`flex items-center space-x-2 ${activeNav === "/profile" ? "border-2 p-2 border-[#B5D5FE] rounded-2xl" : ""}`}

                    >
                        <FaUser size={20} />
                    </a>
                    <a
                        href="/login"
                        onClick={hapusLocalStorage}
                        className="flex items-center justify-center "
                    >
                        <LuLogOut size={20} />
                    </a>

                    {showModal ? (
                        <div className='absolute z-50'>
                            {showNotification && (
                                <div className="flex fixed z-50  top-5 overla right-[400px] p-4 mb-4 text-sm text-white border border-green-500 rounded-full bg-green-500 dark:bg-gray-800 dark:text-white dark:border-green-500" role="alert">
                                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <div>
                                        <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
            {menu ? (
                <div className="w-40 h-screen text-white fixed flex flex-col justify-evenly items-center">
                    <div className="fixed z-50 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50">
                        <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
                            <div className="flex justify-end">
                                <button onClick={() => setMenu(false)}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="/" onClick={() => setActiveNav("/")} className={activeNav === "/" ? "active" : ""}>
                                    Home
                                </a>
                                <a href="/menu" onClick={() => setActiveNav("/menu")} className={activeNav === "/menu" ? "active" : ""}>
                                    Menu
                                </a>
                                {/* <a href="/quiz" onClick={() => setActiveNav("/quiz")} className={activeNav === "/quiz" ? "active" : ""}>
                                    Quiz
                                </a> */}
                                <a href="/profile" onClick={() => setActiveNav("/profile")} className={activeNav === "/profile" ? "active" : ""}>
                                    Profile
                                </a>
                                <a href="/login" onClick={hapusLocalStorage}>
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </nav >
    )
}

export default Navbar
