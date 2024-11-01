import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const FormulaireEditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [roomData, setRoomData] = useState({
    numChambre: '',
    type: '',
    price: '',
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // État pour l'aperçu de l'image
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/chambres/${id}`);
        setRoomData(response.data);
      } catch (error) {
        setErrorMessage('Erreur lors de la récupération de la chambre.');
      }
    };
    fetchRoom();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({
      ...roomData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    
    // Créer un aperçu de l'image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData();
    if (roomData.numChambre) {
      formData.append('numChambre', roomData.numChambre);
    }
    if (roomData.type) {
      formData.append('type', roomData.type);
    }
    if (roomData.price) {
      formData.append('price', roomData.price);
    }
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.put(`http://localhost:8000/api/chambres/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Chambre mise à jour avec succès !');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/RoomList');
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 422) {
          setErrorMessage(data.message || 'Erreur de validation. Veuillez vérifier vos entrées.');
        } else {
          setErrorMessage(data.message || 'Erreur lors de la mise à jour de la chambre. Veuillez réessayer.');
        }
      } else {
        setErrorMessage('Erreur lors de la mise à jour de la chambre. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className="container p-12">
      <div className='max-w-lg mx-auto p-8 bg-white shadow-md rounded-md'>
        <div className='flex ml-3 mb-2'>
          <button onClick={() => navigate(-1)} className="mr-self-start text-blue-400 hover:text-blue-600 flex items-center">
            <FaArrowLeft className="mr-2" /> Retour
          </button>
          <Link to="/RoomList" className="ml-32 text-blue-400 hover:text-blue-600">Liste des chambres</Link>
        </div>

        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Modifier la chambre</h1>

        {successMessage && (
          <div className="mb-4 p-4 text-green-800 bg-green-100 rounded-md" aria-live="polite">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-4 text-red-800 bg-red-100 rounded-md" aria-live="polite">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Aperçu de l'image" className="mt-2 w-full h-auto rounded-md" />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Mettre à jour la chambre
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormulaireEditRoom;
