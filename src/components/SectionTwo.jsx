import React from 'react'
import '../index.css'
import CloudC from '../img/cloudColombianitos.png'
import LogoC from '../img/logoColombianitos.png'
import FotoUno from '../img/fotoUno.png'
import FotoDos from '../img/fotoDos.png'
import FotoTres from '../img/fotoTres.png'

const SectionTwo = ({id}) => {
    return (
        <div className="px-4 colombianitos h-screen p-4 flex building" id={id}>
            <div className="flex items-center flex-col self-center">
                <img className="-mt-48" src={CloudC}/>
                <img className="-mt-8 w-6/12" src={LogoC}/>
                <h1 className="uppercase text-4xl text-white">¡Comprando <span className="font-bold">ayudas,</span> </h1>
                <h1 className="uppercase text-4xl text-white">Comprando <span className="font-bold">Ganas!</span> </h1>
                <p><span className="font-bold">Donaremos $30,</span> por cada producto que compres *</p>
            </div>

            <div className="flex items-center">
                <img src={FotoUno}/>
                <img src={FotoDos}/>
                <img src={FotoTres}/>
            </div>
        </div>
    )
}

export default SectionTwo
