import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

const Inicio = () => {

    const [isOpen, setOpen] = useState(false)

    useEffect(() =>{
      setOpen(true)
  
      setTimeout(() =>{
        setOpen(false)
      }, 5000)
    }, [])
    return (
        <>
            <Navigation/>

            <Main/>

            <SectionOne
                id="sectionOne"
            />

            <SectionTwo
            id="sectionTwo"
            />

            <SectionThree
            id="sectionThree"
            />


            <Modal open={isOpen} onClose={() => setOpen(false)}>
            </Modal>

            <Footer/>
        </>
    )
}

export default Inicio
