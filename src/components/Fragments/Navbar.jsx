import React, { useState } from 'react'
import { GoHomeFill } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { MdRestaurant } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav className="w-20 h-screen text-white fixed flex flex-col justify-evenly items-center">
            <div className="h-[15%] flex flex-col justify-center">
                <a
                    href="#"
                    onClick={() => setActiveNav("#")}
                    className={activeNav === "#" ? "active" : ""}
                >
                    <TiThMenu size={20}/>
                </a>

            </div>
            <div className="h-[50%] flex flex-col justify-center gap-12">
                <a
                    href="/"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <GoHomeFill size={20}/>
                </a>
                <a
                    href="/menu"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <MdRestaurant size={20}/>
                </a>
                <a
                    href="/quiz"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <MdQuiz size={20}/>
                </a>

            </div>
            <div className="h-[40%] flex flex-col justify-center gap-7">
                <a
                    href="/profile"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <FaUser size={20}/>
                </a>
                <a
                    href="/"
                    onClick={() => setActiveNav("/")}
                    className={activeNav === "/" ? "active" : ""}
                >
                    <LuLogOut size={20}/>
                </a>

            </div>
        </nav>
        
    )
}

export default Navbar