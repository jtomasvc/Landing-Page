import React from 'react'
import Logo from '../img/Simoniz.png'
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <>
        <nav className="navigation md:flex sticky top-0 bg-gray-800 z-10">
            <div className="nav-logo">
                <a
                    href="/"
                >
                    <img
                    src={Logo}
                    className="logo-simoniz cursor-pointer"
                    alt="Logo Simoniz"
                    onClick={scrollToTop}
                    />
                </a>
            </div>

            <ul className="nav-items flex text-cente text-white md:items-center md:w-full md:justify-end md:mr-10">
                <li className="nav-item p-2 cursor-pointer">
                   <Link
                        activeClass="active"
                        to="sectionOne"
                        spy={true}
                        smooth={true}
                        offset={-138}
                        duration={1000}
                   >
                    Como Participar 
                   </Link>
                </li>
                <li className="nav-item p-2 cursor-pointer">
                   <Link
                        activeClass="active"
                        to="sectionTwo"
                        spy={true}
                        smooth={true}
                        offset={-138}
                        duration={1000}
                   >
                    Fundacion 
                   </Link>
                </li>
                <li className="nav-item p-2 cursor-pointer">
                   <Link
                        activeClass="active"
                        to="sectionThree"
                        spy={true}
                        smooth={true}
                        offset={-138}
                        duration={1000}
                   >
                    Participa 
                   </Link>
                </li>

                <a href="/terminosycondiciones" className="nav-item p-2 cursor-pointer">Terminos y condiciones</a>
            </ul>
        </nav>
        </>
    )
}

export default Navigation
