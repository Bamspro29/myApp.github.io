import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReservationListC = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:8000/api/user/reservations', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReservations(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations:', error);
        setMessage('Erreur lors de la récupération des réservations.');
      }
    };

    fetchReservations();
  }, []);

  // Méthode pour annuler une réservation
  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/user/reservations/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Ajout du token pour l'annulation
        },
      });
      setReservations(reservations.filter((reservation) => reservation.id !== id));
      setMessage('Réservation annulée avec succès.');
    } catch (error) {
      console.error('Erreur lors de l\'annulation de la réservation:', error);
      setMessage('Erreur lors de l\'annulation de la réservation.');
    }
  };

  // Méthode pour rediriger vers la page de modification
  const handleEdit = (id) => {
    navigate(`/EditReservation/${id}`);
  };

  return (
    <div className="container">
      <div className="flex ml-3 mb-2 row md-12">
          <button
              onClick={() => navigate(-1)} // Retourne à la page précédente
              className=" col-md-4 self-start text-blue-400 hover:text-blue-600 flex items-center"
          >
              <FaArrowLeft className="mr-2" /> Retour
          </button>
          <Link to="/DashboardClient" className="col-md-6 text-blue-400 hover:text-blue-600">
              Plus de reservation
          </Link>
          <Link to="/DashboardClient" className="col-md-2 text-blue-400 hover:text-blue-600">
              Fermer
          </Link>
      </div>

      <h2 className="text-3xl text-blue-400 flex items-center justify-center">Mes Réservations</h2>
      {message && <p>{message}</p>}

      <table className="min-w-full bg-white border">
        <thead className='bg-blue-300'>
          <tr>
            <th className="px-4 py-2 text-left text-lg font-bold">Nom</th>
            <th className="px-4 py-2 text-left text-lg font-bold">Chambre</th>
            <th className="px-4 py-2 text-left text-lg font-bold">Date d'interval du séjour</th>
            <th className="px-4 py-2 text-left text-lg font-bold">Montant</th>
            <th className="px-4 py-2 text-left text-lg font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="border-t">
              <td className="px-4 py-2">{reservation.name}</td>
              <td className="px-4 py-2">{reservation.room}</td>
              <td className="px-4 py-2">
                {reservation.check_in} au {reservation.check_out}
              </td>
              <td className="px-4 py-2">{reservation.amount}</td>
              <td className="px-4 py-2 flex space-x-2 ">
                <button
                  onClick={() => handleEdit(reservation.id)}
                  className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleCancel(reservation.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Annuler
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationListC;
