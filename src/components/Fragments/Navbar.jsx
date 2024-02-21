import React, { useEffect, useState } from 'react'
import { GoHomeFill } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { MdRestaurant } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";


const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");
    const [redirecting, setRedirecting] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
        }else
        {
            alert('Anda belum login');
        }
    };

    useEffect(() => {
        let timeout;
        if (showNotification) {
            timeout = setTimeout(() => {
                setShowNotification(false);
                setTimeout(() => {
                    if (redirecting) {
                        window.location.href = "/login";
                    }
                }, 1000);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [showNotification, redirecting]);

    return (
        <nav className="w-20 h-screen text-white fixed flex flex-col justify-evenly items-center">
            <div className="h-[15%] flex flex-col justify-center">
                <a
                    href="#"
                    onClick={() => setActiveNav("#")}
                    className={activeNav === "#" ? "active" : ""}
                >
                    <TiThMenu size={20} />
                </a>
            </div>
            <div className="h-[50%] flex flex-col justify-center gap-12">
                <a
                    href="/"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <GoHomeFill size={20} />
                </a>
                <a
                    href="/menu"
                    onClick={() => setActiveNav("/menu")} // Perbaiki ini
                    className={activeNav === "/menu" ? "active" : ""}
                >
                    <MdRestaurant size={20} />
                </a>
                <a
                    href="/quiz"
                    onClick={() => setActiveNav("/quiz")} // Perbaiki ini
                    className={activeNav === "/quiz" ? "active" : ""}
                >
                    <MdQuiz size={20} />
                </a>
            </div>
            <div className="h-[40%] flex flex-col justify-center gap-7">
                <a
                    href="/profile"
                    onClick={() => setActiveNav("/profile")} // Perbaiki ini
                    className={activeNav === "/profile" ? "active" : ""}
                >
                    <FaUser size={20} />
                </a>
                <a
                    href="/login"
                    onClick={hapusLocalStorage}
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
        </nav>
    )
}

export default Navbar
