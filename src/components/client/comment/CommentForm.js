import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CommentForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');  // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!message) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    const token = localStorage.getItem('authToken');

    if (!token) {
      setError("Vous n'êtes pas authentifié. Veuillez vous connecter.");
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/comments',
        { message },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );
      
      setSuccess(response.data.message || 'Commentaire envoyé avec succès !');
      setMessage('');
    } catch (err) {
      // Capture et affichage de l'erreur
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Erreur lors de l\'envoi du commentaire.');
      } else {
        setError('Une erreur est survenue lors de la connexion avec le serveur.');
      }
    }
  };

  if (!isAuthenticated) {
    return <p>Redirection vers la page de connexion...</p>;
  }

  return (
    <div className="flex items-start justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Veuillez passer vos messages</h1>
        <p className="mb-2 text-center">Veuillez remplir les champs ci-dessous.</p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700 text-lg">Message :</label>
            <textarea
              className="form-textarea mt-2 block w-full p-3 text-lg border border-gray-300 rounded-lg h-32"
              placeholder="Votre commentaire"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-lg w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
