import React from 'react'
import '../index.css'
import Right from '../img/menRight.png'
import Left from '../img/menLeft.png'

const SectionOne = ({id}) => {
    return (
        <div id={id} className="relative textura altura">
            <div className="background">
                <h1 className="text-center mt-6 font-bold text-white text-3xl">¿Cómo Participar?</h1>
            </div>

            <div className="text-center md:flex md:justify-center">
                <img src={Right} className="absolute left-0"/>
                <div className="caja">
                    <h3 className="number">1</h3>
                    <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet 
                    lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div className="caja">
                    <h3 className="number">2</h3>
                    <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet 
                    lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div className="caja">
                    <h3 className="number">3</h3>
                    <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet 
                    lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet</p>
                </div>
                <img src={Left} className="absolute right-0"/>
            </div> 
            <div className="md:flex md:justify-center mt-10">
                <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet,t</p>
            </div>
        </div>
    )
}

export default SectionOne
