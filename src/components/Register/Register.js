import React, {useContext} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const { signUp, error } = useContext(UserContext);
return (
  <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center bg-pink-300 w-[320px] md:w-[400px] h-[450px] rounded-lg'>
          <h3 className='text-pink-600 text-2xl font-bold'>
              Registrate
          </h3>
          <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('El correo es requerido'),
          password: Yup.string()
          .max(15, 'Máximo 20 caracteres')
          .required('La contraseña es requerida')
      })}
      onSubmit={(values) => {
          console.log('hola')
          signUp(values.email, values.password)
      }}
      >
      <Form className='flex justify-center items-center flex-col w-80 gap-1 lg:w-[500px] mt-5 p-5'>
          <label htmlFor="email" className='text-pink-600 font-bold'>Correo</label>
          <Field name="email" type="email" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none w-[250px]" />
          <div className='text-rose-500 h-5'>
              <ErrorMessage name="email" />
          </div>
  
          <label htmlFor="password" className='text-pink-600 font-bold'>Contraseña</label>
          <Field name="password" type="password" className="rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none w-[250px]" />
          <div className='text-rose-500 h-5'>
              <ErrorMessage name="password" className='text-white'/>
          </div>
          <span className='text-xs text-rose-500'>
            {error && error}
          </span>

          <button type="submit" className="rounded-lg mt-2 bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 w-[150px]">
            Ingresar
          </button>
          <p className='mt-2 text-sm'>¿Ya tienes cuenta? <Link to='/login'><span className='text-pink-700'>Iniciar Sesion</span></Link></p>
      </Form>
      </Formik>

      </div>  
  </div>
);
};

export default Register