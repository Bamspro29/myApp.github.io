import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Deconnection = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token d'authentification ou session
    localStorage.removeItem('authToken');  // Par exemple, si vous stockez le token dans localStorage
    sessionStorage.removeItem('authToken'); // Supprimer aussi du sessionStorage si vous l'utilisez

    // Rediriger vers la page de login
    navigate('/login');
  };

  useEffect(() => {
    // Empêcher la navigation arrière après déconnexion
    const preventBack = () => {
      window.history.pushState(null, '', window.location.href);
    };

    window.addEventListener('popstate', preventBack);

    return () => {
      window.removeEventListener('popstate', preventBack);
    };
  }, []);

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        OUI
      </button>
    </div>
  );
};

export default Deconnection;
