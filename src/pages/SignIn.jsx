import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

export default function SignIn()
{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()
    return(
    <div className="auth-container">
        <h1>Bienvenue !</h1>

        <h3>Connectez-vous à votre compte</h3>

        <form>
            <label>Adresse email : </label>
            <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
            />

            <label>Mot de passe : </label>
            <input 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="submit">
                Se connecter
            </button>
        </form>

        <h3>don't have an account ?</h3>
        <Link to="/SignUp">Sign up</Link>
    </div>
)
}
