import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';


const initialValues ={
    fullName:"",
    email:"",
    password:"",
    role:"ROLE_CUSTOMER"
}

const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("forms values",values);
        dispatch(registerUser({useData:values,navigate}))
    };
    

  return (
    <div>

        <Typography variant='h5' className='text-center'>
            Register
        </Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>

            <Form>

            <Field
                    as={TextField} 
                    name="fullName"
                    label="Full Name"
                    fullWidth
                    variant="outlined"   
                    margin="normal"
            />


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
                    type="password"
            />

          
                <Field
                        as={Select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth   
                        name="role"                      
                       // value={initialValues.role}
                        label="Role"
                        margin="normal"
                 >
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
            
                </Field>
          


            <Button sx={{mt:2,paddind:"1rem"}} fullWidth type='submit' variant='contained'>Register</Button>
            </Form>

        </Formik>

        <Typography variant='body2' align='center' sx={{mt:3}}>
        If have an Account already ?
            <Button size='small' onClick={()=> navigate("/account/login")} >
                login
            </Button>
        </Typography>

    </div>
  )
}

export default RegisterForm