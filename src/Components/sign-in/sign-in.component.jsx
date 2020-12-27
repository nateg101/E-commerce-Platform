import React, { useState } from 'react';
import './sign-in.style.scss';


const SignIn = () => {
    const [emailAndPassword, setEmailAndPassword] = useState({ email: '', password: '' })

    const handleSubmit = event => {
        event.preventDefault();
        setEmailAndPassword({ email: '', password: '' })
    }

    const handleChange = event => {
        const {value, name } = event.target
        setEmailAndPassword({ [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input 
                    name='email' 
                    type='email' 
                    value={emailAndPassword.email}
                    onChange={handleChange}
                    required
                />
                <label>Email</label>
                <input 
                    name='password' 
                    type='password' 
                    value={emailAndPassword.password} 
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
};

export default SignIn