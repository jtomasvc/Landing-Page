import React from 'react'
import reactDom from 'react-dom'
import '../index.css'

const Modal = ({open, onClose}) => {
    if(!open) return null
    return reactDom.createPortal (
        <>
            <div className="overLay">
                <div className="rounded-lg modal-style">
                    <button onClick={onClose} className="fixed top-0 right-2 font-bold text-2xl">X</button>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
        </>,

        document.getElementById('portal')

    )
}

export default Modal
