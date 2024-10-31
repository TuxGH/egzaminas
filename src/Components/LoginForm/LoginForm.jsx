import React  from "react";
import axios from 'axios';
import { useState } from "react";
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { useHistory } from "react-router-dom";

//icons



const Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [redirect, setRedirect] = useState(false); 
        const navigate = useHistory();

        const handleSubmit = (e) => {
            e.preventDefault();
    
            axios.post('/login', { email, password }, { timeout: 5000 })
                .then(result => {
                    setRedirect(true); 
                    console.log(result)
                    if(result.data === "Success" ){
                        
                    }
                })
                .catch(err => {
                    console.log(err);
                   
                });
        };
    
        if (redirect) {
            return <Redirect to="/web" />; 
        }


    return (
        
        <div className='wrapper2'>
           <form onSubmit={handleSubmit}>

                <div className="Web">
            <nav>
              <ul>
                <li> <div className="input-box">
                     <input className="box2" type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                </div>
                </li>

                <li><div className="input-box">
                     <input className="box2" type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)}  />
                </div>
                </li>

                <li><button classname="aSubmit" onClick={() => navigate.push('/web')} type="submit"><h2>Login</h2></button></li>
                <li> <button onClick={() => navigate.push('/signup')}> <h2>Register</h2></button></li>
              </ul>
            </nav>
            
          </div>
            </form>

        </div>
    );
    
};


export default Login ;

