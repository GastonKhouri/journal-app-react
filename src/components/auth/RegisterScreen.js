import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'
import { Link } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }

        dispatch(removeError());

        return true;
        
    }
    

    return (
        <>
            <h3 className='auth__title'> Register </h3>

            <form 
                onSubmit={ handleRegister }
                className='animate__animated animate__fadeIn animate__faster'
            >

                {
                    msgError && 
                    (
                        <div className='auth__alert-error'>
                            { msgError }
                        </div>
                    )
                }

                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={ name }
                    onChange={ handleInputChange }
                    className='auth__input'
                    autoComplete='off'
                />

                <input 
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={ email }
                    onChange={ handleInputChange }
                    className='auth__input'
                    autoComplete='off'
                />

                <input 
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={ password }
                    onChange={ handleInputChange }
                    className='auth__input'
                />

                <input 
                    type='password'
                    placeholder='Confirm password'
                    name='password2'
                    value={ password2 }
                    onChange={ handleInputChange }
                    className='auth__input'
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                >
                    Register
                </button>

                <Link 
                    to='/auth/login'
                    className='link'
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}

export default RegisterScreen
