import React, {useContext} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../context/UserContext';



const CheckoutForm = ({handleSell}) => {

    const {user} = useContext(UserContext);
    const getEmail = () => {
        if (user) {
            return user.email
        }
        else {
            return ''
        };
    };

  return (
    <Formik
       initialValues={{ firstName: '', lastName: '', email: getEmail(), country:'', city:'', address:'', phone:'', note:''}}
       
       validationSchema={Yup.object({
        firstName: Yup.string().max(15, 'Escribir 15 caracteres o menos').required('Requerido'),
        lastName: Yup.string().max(15, 'Escribir 15 caracteres o menos').required('Requerido'),
        email: Yup.string().email('Email invalido').required('Requerido'),
        country: Yup.string().oneOf(["colombia"], "País invalido").required("Required"),
        city: Yup.string().oneOf(["medellin", "bogota","cali"], "Ciudad invalida").required("Required"),
        address: Yup.string().max(20, 'Escribir 30 caracteres o menos').required('Requerido'),
        phone: Yup.number().required('Requerido').positive().integer(),
        note: Yup.string().max(20, 'Escribir 30 caracteres o menos')
    })}

       onSubmit={( values )  => {
        handleSell(values)
        }}
     >

                <Form className='flex flex-col w-80 gap-1 lg:w-[500px] mt-5 p-5'>
                    <label htmlFor="firstName" className='text-pink-600 font-bold'>Nombre</label>
                    <Field name="firstName" type="text" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none"/>
                    <div className='text-rose-600'>
                        <ErrorMessage name="firstName" className='text-rose-600' />
                    </div>
            
                    <label htmlFor="lastName" className='text-pink-600 font-bold'>Apellido</label>
                    <Field name="lastName" type="text" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none"/>
                    <div className='text-rose-600'>
                        <ErrorMessage name="lastName" />
                    </div>
            
                    <label htmlFor="email" className='text-pink-600 font-bold'>Correo</label>
                    <Field disabled={user ? true : false} name="email" type="email" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none"/>
                    <div className='text-rose-600'>
                        <ErrorMessage name="email" />
                    </div>
           
                    <label htmlFor="country" className='text-pink-600 font-bold'>País</label>
                    <Field name="country" as="select" type="email" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none">
                       <option value="">Elige un país</option>
                       <option value="colombia">Colombia</option>
                    </Field>
                    <div className='text-rose-600'>
                        <ErrorMessage name="country" />
                    </div>
           
                    <label htmlFor="city" className='text-pink-600 font-bold'>Ciudad</label>
                    <Field name="city" as="select" className="rounded-lg text-pink-600 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none ">
                       <option value="">Elige una ciudad</option>
                       <option value="bogota">Bogotá</option>
                       <option value="medellin">Medellín</option>
                       <option value="medellin">Cali</option>       
                    </Field>
                    <div className='text-rose-600'>
                        <ErrorMessage name="city" />
                    </div>
                    
           
                    <label htmlFor="address" className='text-pink-600 font-bold'>Dirección</label>
                    <Field name="address" type="text" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none"/>
                    <div className='text-rose-600'>
                        <ErrorMessage name="address" />
                    </div>
                    
           
                    <label htmlFor="phone" className='text-pink-600 font-bold'>Telefono</label>
                    <Field name="phone" type="number" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none"/>
                    <div className='text-rose-600'>
                        <ErrorMessage name="phone" />
                    </div>
           
                    <label htmlFor="note" className='text-pink-600 font-bold'>Notas</label>
                    <Field name="note" as="textarea" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none"/>
                    <div className='text-rose-600'>
                        <ErrorMessage name="note" />
                    </div>
            
                    <button type="submit" className="rounded-lg mt-2 bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                       {user ? `Comprar como ${user.email}`: "Comprar"}
                    </button>
                  </Form>

     </Formik>
  );
};

export default CheckoutForm;