import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ArriveClients = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    room: '',
    arrivalDate: '',
    arrivalTime: '',
    departureDate: '',
    departureTime: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Réinitialiser le message de succès
    setError(''); // Réinitialiser les erreurs

    // Validation des champs requis
    const validationErrors = [];
    if (!formData.name) validationErrors.push("Le nom complet est obligatoire.");
    if (!formData.email) validationErrors.push("L'adresse email est obligatoire.");
    if (!formData.room) validationErrors.push("Le numéro de chambre est obligatoire.");
    if (!formData.arrivalDate) validationErrors.push("La date d'arrivée est obligatoire.");
    if (!formData.arrivalTime) validationErrors.push("L'heure d'arrivée est obligatoire.");
    if (!formData.departureDate) validationErrors.push("La date de départ est obligatoire.");
    if (!formData.departureTime) validationErrors.push("L'heure de départ est obligatoire.");

    // Afficher les erreurs de validation si elles existent
    if (validationErrors.length > 0) {
      setError(validationErrors.join(' '));
      return;
    }

    // Afficher les données avant l'envoi
    console.log('Données à envoyer :', formData);

    // Essayer d'envoyer les données au serveur
    try {
      const response = await axios.post('http://localhost:8000/api/arrivals', formData);
      setMessage('Enregistrement effectué avec succès.');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du client:', error);
      const errorMsg = error.response?.data?.message || 'Erreur lors de l\'enregistrement.';
      setError(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
      <div className='flex ml-3 mb-2'>
      <button onClick={() => navigate(-1)} // Retourne à la page précédente
        className=" self-start text-blue-400 hover:text-blue-600 flex items-center">
        <FaArrowLeft className="mr-2" /> Retour
      </button>
      <button> <Link to="/ArrivalListe" className="ml-32 text-blue-400 hover:text-blue-600">Liste d'arrivées</Link></button>
      </div>

        <h2 className="text-2xl font-bold mb-6">Enregistrer l'arrivée du client</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Nom complet', type: 'text', name: 'name', required: true },
            { label: 'Adresse email', type: 'email', name: 'email', required: true },
            { label: 'Numéro de chambre', type: 'text', name: 'room', required: true },
            { label: 'Date d\'arrivée', type: 'date', name: 'arrivalDate', required: true },
            { label: 'Heure d\'arrivée', type: 'time', name: 'arrivalTime', required: true },
            { label: 'Date de départ', type: 'date', name: 'departureDate', required: true },
            { label: 'Heure de départ', type: 'time', name: 'departureTime', required: true }
          ].map(({ label, type, name, required }) => (
            <div className="mb-4" key={name}>
              <label className="block text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Enregistrer
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ArriveClients;
