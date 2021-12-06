import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import '../index.css'

const Navigation = () => {

    return (
        <>
        <nav className="navigation md:flex sticky top-0 z-10 backgroundNavigation">
            <ul className="nav-items flex text-cente text-white md:items-center md:w-full md:justify-center md:mr-10">
                <li className="nav-item p-2 cursor-pointer font-medium text-xl">
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
                <li className="nav-item p-2 cursor-pointer font-medium text-xl">
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
                <li className="nav-item p-2 cursor-pointer text-xl font-medium">
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
            </ul>
        </nav>
        </>
    )
}

export default Navigation
