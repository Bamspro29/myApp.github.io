// FormulaireAddRoom.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const FormulaireAddRoom = () => {
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState({
    numChambre: '',
    type: '',
    price: '',
  });
  const [image, setImage] = useState(null); // Stocker l'image
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({
      ...roomData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Récupérer l'image sélectionnée
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('numChambre', roomData.numChambre);
    formData.append('type', roomData.type);
    formData.append('price', roomData.price);
    formData.append('image', image); // Ajouter l'image au FormData

    try {
      const response = await axios.post('http://localhost:8000/api/chambres', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Spécifier que les données sont multipart/form-data
        },
      });

      // Vérification de la réponse
      if (response.status === 201) {
        setSuccessMessage('Chambre ajoutée avec succès !');
        setRoomData({ numChambre: '', type: '', price: '' });
        setImage(null); // Réinitialiser l'image
      }
    } catch (error) {
      // Vérification du type d'erreur
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Erreur lors de l\'ajout de la chambre. Veuillez réessayer.');
      } else {
        setErrorMessage('Erreur lors de l\'ajout de la chambre. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className="container p-12 ">
      <div className=' max-w-lg mx-auto p-8 bg-white shadow-md rounded-md'>
      <div className='flex ml-3 mb-2'>
            <button onClick={() => navigate(-1)} // Retourne à la page précédente
              className=" mr-self-start text-blue-400 hover:text-blue-600 flex items-center">
              <FaArrowLeft className="mr-2" /> Retour
            </button>
            <button> 
              <Link to="/RoomList" className="ml-32 text-blue-400 hover:text-blue-600">Liste des chambres</Link>
            </button>
      </div>

        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Ajouter une chambre</h1>
      {/* Message de succès */}
      {successMessage && (
        <div className="mb-4 p-4 text-green-800 bg-green-100 rounded-md">
          {successMessage}
        </div>
      )}
      {/* Message d'erreur */}
      {errorMessage && (
        <div className="mb-4 p-4 text-red-800 bg-red-100 rounded-md">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium text-gray-700">Numéro de Chambre:</label>
          <input
            type="text"
            name="numChambre"
            value={roomData.numChambre}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type:</label>
          <input
            type="text"
            name="type"
            value={roomData.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Prix:</label>
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image de la chambre:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Ajouter la chambre
        </button>
      </form>
        </div>
  
    </div>
  );
};

export default FormulaireAddRoom;

