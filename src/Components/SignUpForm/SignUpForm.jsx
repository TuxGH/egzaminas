import React from "react";
import './SignUpForm.css';
import axios from 'axios';
import { useState } from "react";
import { Redirect } from 'react-router-dom'; 
import { useHistory } from "react-router-dom";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false); 
    const navigate = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/register', { 
            name,
            email,
            password
        })
            .then(result => {
                console.log(result);
                setRedirect(true); 
            })
            .catch(err => {
                console.log(err);
            });
    };
    

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                
                <div className="input-box">
                    <input className="box2" type="text" placeholder='Username' required onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div className="input-box">
                    <input className="box2" type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="input-box">
                    <input className="box2" type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                </div>
        <br></br>
                <button className="buttonreg" onClick={() => navigate.push('/')}  type="submit">Register</button>

        <br></br><br></br>
                    <h3>Already have an account?</h3> 
        <br></br>
                    <button className="buttonreg" type="button" onClick={() => navigate.push('/')}>Login</button>
               
            </form>
        </div>
    );
};

export default SignupForm;
