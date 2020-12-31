import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss';

const SignUp = () => {
    const [signUpDetails, changeSignUpDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async event => {
        event.preventDefault();

        console.log(signUpDetails.password, signUpDetails.confirmPassword)

        if(signUpDetails.password !== signUpDetails.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password);
            const displayName = signUpDetails.displayName

            await createUserProfileDocument(user, { displayName } );
            changeSignUpDetails({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target;

        changeSignUpDetails(prevSignUpDetails => {
            return { ...prevSignUpDetails, [name]: value }
            }
        )
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}> 
                <FormInput
                    type='text'
                    name='displayName'
                    value={signUpDetails.displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                
                <FormInput
                    type='email'
                    name='email'
                    value={signUpDetails.email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                
                <FormInput
                    type='password'
                    name='password'
                    value={signUpDetails.password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={signUpDetails.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp