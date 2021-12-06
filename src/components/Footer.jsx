import React from 'react'
import  { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="px-4">
            <Link to="/terminosycondiciones" className="nav-item p-2 cursor-pointer font-medium text-xl">Terminos y condiciones</Link>
        </div>
    )
}

export default Footer
