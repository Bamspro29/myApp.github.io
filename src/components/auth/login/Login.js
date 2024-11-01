import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { MdOutlineHotelClass } from "react-icons/md";
import UserMenu from '../../Navbar/UserMenu'; // Assurez-vous que le chemin d'importation est correct

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState(null); // État pour le nom de l'utilisateur
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      localStorage.setItem('authToken', response.data.token); // Enregistrer le token
      setUserName(response.data.name); // Stocker le nom de l'utilisateur

      const role = response.data.role;
      if (role === 'admin') {
        navigate('/dashboardA');
      } else if (role === 'receptionist') {
        navigate('/dashboardR');
      } else {
        navigate('/dashboardClient');
      }
    } catch (error) {
      setErrorMessage('Identifiants incorrects ou problème de connexion');
      console.error('Erreur de connexion:', error);
    }
  };

  const handleLogout = () => {
    setUserName(null); // Réinitialiser le nom lors de la déconnexion
    localStorage.removeItem('authToken'); // Supprimer le token lors de la déconnexion
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">
          <button
            onClick={() => navigate(-1)}
            className="self-start mb-4 text-blue-400 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Retour
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">WELCOME BACK !</h1>

          {/* Ajoutez UserMenu ici pour afficher le nom de l'utilisateur */}
          {userName && <UserMenu userName={userName} onLogout={handleLogout} />}

          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 mt-3">Se connecter</button>
          </form>
          <hr className="my-2" />
          <Link to=""> 
            <button className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-red-600 mb-2 flex items-center justify-center mt-3">
              <FaGoogle className="mr-2" /> S'inscrire avec Google
            </button>
          </Link>
          <Link to="">
            <button className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-800 flex items-center justify-center mt-3">
              <FaFacebookF className="mr-2" /> S'inscrire avec Facebook
            </button>
          </Link>

          <hr className="my-2" />
          <div className="text-center">
            <Link className="text-blue-500 hover:bg-blue-100" to="/Mdpf">Mot de passe oublié ?</Link>
          </div>
          <div className="text-center mt-2">
            <Link className="text-blue-500 hover:bg-blue-100" to="/Register">Créer un compte !</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
