import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { MdOutlineHotelClass } from "react-icons/md";


const Register = () => {
  const [username, setUsername] = useState(''); // État pour le nom d'utilisateur
  const [email, setEmail] = useState(''); // État pour l'email
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [passwordConfirm, setPasswordConfirm] = useState(''); // État pour le mot de passe de confirmation
  const [error, setError] = useState(''); // État pour gérer les erreurs
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Envoyer la requête d'inscription
    axios.post('http://localhost:8000/api/register', {
      username, // Envoyer le nom d'utilisateur ici
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      navigate('/login'); // Rediriger après l'inscription
    })
    .catch((error) => {
      if (error.response) {
        // Afficher les erreurs de validation du serveur
        setError(error.response.data.message || "Erreur lors de l'inscription.");
      } else {
        setError("Erreur de connexion au serveur.");
      }
    });
  };

  return (

    <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-3 mt-3">
      <div className="flex flex-col items-center">

        {/* Flèche de retour */}
        <button
          onClick={() => navigate(-1)} // Retourne à la page précédente
          className="self-start mb-2 text-blue-400 hover:text-blue-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Retour
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">WELCOME BACK !</h1>
        
        <div className='row md-12 mb-4'>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
        </div>

      <div className="login-container">
      <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>} {/* Afficher les erreurs */}
          <div className="mb-1">
            <input
              type="text"
              required
              className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Entrez votre nom d'utilisateur"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-1">
            <input
              type="email"
              required
              className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Entrez votre adresse e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="password"
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Répétez le mot de passe"
              onChange={(e) => setPasswordConfirm(e.target.value)} // Mise à jour de l'état pour le mot de passe de confirmation
            />
          </div>
          
          <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600">Créer un compte</button>
        </form>

    <hr className="my-2" />
    <Link  to=""> 
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-red-600 mb-2 flex items-center justify-center mt-3">
                <FaGoogle className="mr-2" /> S'inscrire avec Google
              </button>
            </Link>
            <Link  to="">
              <button className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-800 flex items-center justify-center mt-3">
              <FaFacebookF className="mr-2" /> S'inscrire avec Facebook
                </button>
            </Link>

  </div>

      <hr className="my-2" />
        <div className="text-center">
          <Link className="text-blue-500 hover:bg-blue-100" to="/Mdpf">Mot de passe oublié ?</Link>
        </div>
        <div className="text-center mt-2">
          <Link className="text-blue-500 hover:bg-blue-100" to="/login">Vous avez déjà un compte ? Connexion !</Link>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Register;
