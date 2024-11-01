import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const EditReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState({
    name: '',
    room: '',
    check_in: '',
    check_out: '',
    amount: '',
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8000/api/user/reservations/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReservation(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de la réservation:', error);
        setMessage(error.response?.data?.error || 'Erreur lors de la récupération de la réservation.');
      } finally {
        setLoading(false);
      }
    };

    fetchReservation();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prevReservation) => ({
      ...prevReservation,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Démarrer le chargement
    try {
      const token = localStorage.getItem('authToken');
      await axios.put(`http://localhost:8000/api/user/reservations/${id}`, reservation, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Réservation modifiée avec succès.');
      navigate('/ReservationList');
    } catch (error) {
      console.error('Erreur lors de la modification de la réservation:', error);
      setMessage(error.response?.data?.error || 'Erreur lors de la modification de la réservation.');
    } finally {
      setLoading(false); // Arrêter le chargement
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">
          <button
            onClick={() => navigate(-1)}
            className="self-start text-blue-400 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Retour
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Modifier la Réservation</h1>

          {message && <p className={`text-${message.includes('Erreur') ? 'red' : 'green'}-500`}>{message}</p>}
          {loading && <p>Chargement...</p>}

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nom:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reservation.name}
                onChange={handleChange}
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="room" className="block text-gray-700">Chambre:</label>
              <input
                type="text"
                id="room"
                name="room"
                value={reservation.room}
                onChange={handleChange}
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="check_in" className="block text-gray-700">Check-in:</label>
              <input
                type="date"
                id="check_in"
                name="check_in"
                value={reservation.check_in}
                onChange={handleChange}
                required
                className="form-input w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="check_out" className="block text-gray-700">Check-out:</label>
              <input
                type="date"
                id="check_out"
                name="check_out"
                value={reservation.check_out}
                onChange={handleChange}
                required
                className="form-input w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700">Montant:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={reservation.amount}
                onChange={handleChange}
                required
                className="form-input w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading} // Désactiver le bouton pendant le chargement
              className={`w-full py-2 rounded-lg ${loading ? 'bg-blue-400' : 'bg-blue-400 hover:bg-blue-600'} text-white`}
            >
              {loading ? 'Modification...' : 'Modifier'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReservation;
