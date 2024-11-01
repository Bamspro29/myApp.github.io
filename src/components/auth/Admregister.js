import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { MdOutlineHotelClass } from "react-icons/md";

const Admregister = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('receptionist'); // Par défaut : réceptionniste
  const [error, setError] = useState('');

  const handleCreateUser = async () => {
    // Réinitialiser l'erreur avant d'envoyer la requête
    setError('');

    // Validation simple
    if (!username || !email || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/admregister', {
        username,
        email,
        password,
        role,  // Rôle sélectionné : admin ou réceptionniste
      });
      
      console.log('Utilisateur créé avec succès:', response.data);
      // Redirection vers une page d'accueil ou une page de confirmation
      navigate('/login'); // Remplacez '/home' par la route de votre choix
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      setError('Erreur lors de la création de l\'utilisateur. Veuillez vérifier vos informations.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">

          {/* Flèche de retour */}
          <button
            onClick={() => navigate(-1)} // Retourne à la page précédente
            className="self-start mb-4 text-blue-400 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Retour
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Créer un utilisateur!</h1>
          
          <div className='row md-12 mb-4'>
            <div className='col-md-2'><MdOutlineHotelClass /></div>
            <div className='col-md-2'><MdOutlineHotelClass /></div>
            <div className='col-md-2'><MdOutlineHotelClass /></div>
            <div className='col-md-2'><MdOutlineHotelClass /></div>
            <div className='col-md-2'><MdOutlineHotelClass /></div>
          </div>

          {error && <p className="text-red-500">{error}</p>} {/* Affichage des erreurs */}

          <div className="login-container">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleCreateUser(); }}>
              <div className="mb-1">
                <input
                  type="text"
                  required
                  className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Nom d'utilisateur"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" 
                  className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Mot de passe"
                  className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-1">
                <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none">
                  <option value="receptionist">Réceptionniste</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="mb-1">
                <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-800 flex items-center justify-center mt-3">
                  Créer l'utilisateur
                </button>
              </div>
            </form>
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
    </div>
  );
};

export default Admregister;
