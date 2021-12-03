import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Error from './Error'

const SectionThree = ({id}) => {

    const [mensaje, setMensaje] = useState(false)

    const nuevoClienteSchema = Yup.object().shape({
        nombre:Yup.string()
               .min(4,'El nombre es muy corto')
               .required('El Nombre y apellido es obligatorio'),
        cedula:Yup.number()
               .required('La Cedula es obligatoria')
               .integer('Numero no valido')
               .positive('Numero no valido'),
        correo:Yup.string()
               .required('El correo es obligatorio')
               .email('No es un correo valido'),
        telefono:Yup.number().typeError('El numero no es valido')
                 .required('El telefono es obligatorio')
                 .integer('Numero no valido')
                 .positive('Numero no valido'),
        usuario:Yup.string()
                .required('El usuario de instagram es obligatorio'),
        factura:Yup.number()
                .required('El numero de factura es obligatoria')
                .integer('Numero no valido')
                .positive('Numero no valido'),
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div id={id} className="px-4">
            <h1 className="text-center mt-4 mb-4">Participa</h1>
            <Formik
                initialValues={{
                    nombre:'',
                    cedula:'',
                    correo:'',
                    telefono:'',
                    usuario:'',
                    factura:'',
                }}

                onSubmit={(values, {resetForm}) => {
                    handleSubmit(values)
                    resetForm()
                    setMensaje(true)

                    setTimeout(() =>{
                        setMensaje(false)
                    },2500)
                }}
                validationSchema = {nuevoClienteSchema}
            >
                {({errors, touched}) => {
                    
                    return (
                <Form>
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="nombre"
                        >Nombre y apellido:</label>

                        <Field
                            id="nombre"
                            type="text"
                            className="mt-2 block w-full bg-gray-50 p-2 rounded-lg"
                            placeholder="Tu nombre y apellido"
                            name="nombre"
                        />

                        {errors.nombre && touched.nombre ? (
                            <Error>{errors.nombre}</Error>
                        ): null}
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="cedula"
                        >Cedula:</label>

                        <Field
                            id="cedula"
                            type="number"
                            className="mt-2 block w-full bg-gray-50 p-2 rounded-lg"
                            placeholder="Tu Cedula"
                            name="cedula"
                        />

                        {errors.cedula && touched.cedula ? (
                            <Error>{errors.cedula}</Error>
                        ): null}
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="correo"
                        >Correo Electronico:</label>

                        <Field
                            id="correo"
                            type="email"
                            className="mt-2 block w-full bg-gray-50 p-2 rounded-lg"
                            placeholder="Tu Correo"
                            name="correo"
                        />

                        {errors.correo && touched.correo ? (
                            <Error>{errors.correo}</Error>
                        ): null}
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="Telefono"
                        >Telefono:</label>

                        <Field
                            id="Telefono"
                            type="tel"
                            className="mt-2 block w-full bg-gray-50 p-2 rounded-lg"
                            placeholder="Tu Telefono"
                            name="telefono"
                        />

                        {errors.telefono && touched.telefono ? (
                            <Error>{errors.telefono}</Error>
                        ): null}
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="instagram"
                        >Usuario Instagram:</label>

                        <Field
                            id="instagram"
                            type="text"
                            className="mt-2 block w-full bg-gray-50 p-2 rounded-lg"
                            placeholder="Tu Usuario de Instagram"
                            name="usuario"
                        />

                        {errors.usuario && touched.usuario ? (
                            <Error>{errors.usuario}</Error>
                        ): null}
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-gray-800"
                            htmlFor="Factura"
                        >Numero de factura:</label>

                        <Field
                            id="Factura"
                            type="number"
                            className="mt-2 block w-full bg-gray-50 p-2 rounded-lg"
                            placeholder="Numero de factura"
                            name="factura"
                        />

                        {errors.factura && touched.factura ? (
                            <Error>{errors.factura}</Error>
                        ): null}
                    </div> 

                    <input
                        type="submit"
                        value="Participar"
                        className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-lg"
                    />

                    {mensaje && <p className="text-center my-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold p-3 uppercase rounded-lg">¡Ya estas participando!!</p>}

                </Form>
                )}}
            </Formik>
        </div>
    )
}

export default SectionThree
