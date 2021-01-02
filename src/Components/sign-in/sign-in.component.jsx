import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.style.scss';


const SignIn = () => {
    const [emailAndPassword, setEmailAndPassword] = useState({ email: '', password: '' })

    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(emailAndPassword.email, emailAndPassword.password);
            setEmailAndPassword({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const {value, name } = event.target
        setEmailAndPassword(prevEmailAndPassowrd => {
            return {...prevEmailAndPassowrd, [name]: value}
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={emailAndPassword.email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={emailAndPassword.password} 
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn type='button'>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
};

export default SignIn