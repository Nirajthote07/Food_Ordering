import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'

const initialValues ={
    email:"",
    password:""
}

const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {

        dispatch(loginUser({userData: values,navigate}))
    };
    const navigate = useNavigate();
  return (
    <div>

        <Typography variant='h5' className='text-center'>
            Login
        </Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>

            <Form>


            <Field
                    as={TextField} 
                    name="email"
                    label="email"
                    fullWidth
                    variant="outlined"   
                    margin="normal"
            />

            <Field
                    as={TextField} 
                    name="password"
                    label="password"
                    fullWidth
                    variant="outlined"   
                    margin="normal"
            />

            <Button sx={{mt:2,paddind:"1rem"}} fullWidth type='submit' variant='contained'>Login</Button>
            </Form>

        </Formik>

        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have an Account ?
            <Button size='small' onClick={()=> navigate("/account/register")} >
                register
            </Button>
        </Typography>

    </div>
  )
}

export default LoginForm