import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

export default function SignUp()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const symboles = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const chiffres = '0123456789';
    
        if (lastName.length < 2 || lastName.length > 50)
        {
          alert('Veuillez saisir un nom compris entre 2 et 50 caractères.');
          return;
        }

        if (lastName.split('').some(c => chiffres.includes(c) || symboles.includes(c)))
        {
          alert('Veuillez saisir un nom contenant uniquement des lettres.');
          return;
        }

        if (firstName.length < 2 || firstName.length > 50)
        {
          alert('Veuillez saisir un prénom compris entre 2 et 50 caractères.');
          return;
        }

        if (firstName.split('').some(c => chiffres.includes(c) || symboles.includes(c)))
        {
          alert('Veuillez saisir un prénom contenant uniquement des lettres.');
          return;
        }

        if (passWord.length < 8) {
          alert("Veuillez saisir un mdp contenant au moins 8 caractères.");
          return;
        }

        if (!passWord.split('').some(c => chiffres.includes(c)))
        {
          alert('Veuillez saisir un mdp contenant au moins un chiffre.');
          return;
        }

        if (!passWord.split('').some(c => c >= 'A' && c <= 'Z'))
        {
          alert('Veuillez saisir un mdp contenant au moins une majuscule.');
          return;
        }

        if (!passWord.split('').some(c => c >= 'a' && c <= 'z'))
        {
          alert('Veuillez saisir un mdp contenant au moins une miniscule.');
          return;
        }

        if (!passWord.split('').some(c => symboles.includes(c)))
        {
          alert ('Veuillez saisir un mdp contenant au moins un symbole.');
          return;
        }

        if (passWord !== confirm)
        {
          alert('les mots de passe sont différents.');
          return;
        }
        axios.post("http://127.0.0.1:8000/api/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: passWord
            })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error);
                alert("Erreur lors de la création du compte");
            });
    }
    return(
        <div className="auth-container">
            <h1>Créer votre compte</h1>
            <form onSubmit={handleSubmit}>
            <label>Nom : </label>
            <input type="text" id="nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label>Prénom : </label>
            <input type="text" id="prenom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label>Adresse email : </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Numéro de téléphone : </label>
            <input type="number" id="numero" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <label>Mot de passe : </label>
            <input type="password" id="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} />
            <label>Confirmer le mot de passe : </label>
            <input type="password" id="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <button type="submit">
                Créer mon compte
            </button>
            </form>
            <h3>already have an account ?</h3>
            <Link to="/">Sign in</Link>
        </div>
    )
}
