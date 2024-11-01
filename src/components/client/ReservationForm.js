import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import visa from '../image/visa.PNG';
import payepal from '../image/payepal.PNG';
import mastercard from '../image/mastercard.PNG';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Payment from '../Payment/PaymentForm'
import Navbar from '../Navbar/Navbar'


const ReservationForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Nouvel état pour l'authentification

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Si le token n'est pas présent, redirige l'utilisateur vers la page de connexion
      navigate('/login');
    } else {
      // L'utilisateur est authentifié
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Réinitialiser l'erreur avant l'envoi

    // Validation simple
    if (!name || !room || !checkIn || !checkOut || !amount) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    const token = localStorage.getItem('authToken'); // Récupérez le token
    try {
      const response = await axios.post('http://localhost:8000/api/user/reservations', {
        name,
        room,
        check_in: checkIn,
        check_out: checkOut,
        amount,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`, // Incluez le token ici
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setError(`Erreur: ${error.response.data.message || 'Erreur inconnue'}`);
      } else if (error.request) {
        setError('Aucune réponse reçue du serveur.');
      } else {
        setError(`Erreur lors de la création de la réservation: ${error.message}`);
      }
    }
  };

  // Si l'utilisateur n'est pas authentifié, ne pas afficher le formulaire
  if (!isAuthenticated) {
    return <p>Redirection vers la page de connexion...</p>;
  }

  return (
    <div className='bg-state-100'>
    <div className="flex flex-row"  >
      {/* <div className="w-1/12">
         <Sidebar />
      </div> */}
      <div className='flex-1 ml-3'>
        <Navbar />
        

        <div className="flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 mt-3">        <div className="flex flex-col items-center">

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Faites une Réservation</h1>
          {error && <p className="text-red-500">{error}</p>} {/* Affichage des erreurs */}
          {message && <p className="text-green-500">{message}</p>} {/* Affichage des messages de succès */}
          <div className='w-full'>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="block text-gray-700">Votre nom :</label>
              <input
                type="text"
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700">Numéro de chambre :</label>
              <input
                type="text"
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Room's number"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700">Date d'arrivée :</label>
              <input
                type="date"
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700">Date de départ :</label>
              <input
                type="date"
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700">Montant (en centimes) :</label>
              <input
                type="number"
                required
                className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Montant (en centimes)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
            <strong>Moyen de paiement </strong>

              <div className="flex mt-2  ">
                <div class="flex-shrink-0 ml-2 mr-3">
                    <Button variant="blue-300" onClick={handleShow}>
                      <img class=" h-8 w-12 " src={visa} alt="visa" />
                    </Button>
                  </div>
                <div class="flex-shrink-0 ml-2 mr-3">
                    <Button variant="blue" onClick={handleShow}>
                    <img class=" h-8 w-22 " src={mastercard} alt="mastercard" />
                    </Button>
                  </div>
                <div class="flex-shrink-0 ml-2 mr-3">
                    <Button variant="blue"  onClick={handleShow}>
                    <img class=" h-8 w-12  " src={payepal} alt="payepal" />
                    </Button>
                  </div>
              </div>

            </div>
            <div className="mb-1">
              <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-800 flex items-center justify-center mt-3">
                Réserver Maintenant
              </button>
            </div>
          </form>

          <div className='flex ml-3 mb-2'>
            {/* <button onClick={() => navigate(-1)} // Retourne à la page précédente
              className=" mr-self-start text-blue-400 hover:text-blue-600 flex items-center">
              <FaArrowLeft className="mr-2" /> Retour
            </button> */}
            <button> 
              <Link to="/ReservationList" className=" text-blue-400 hover:text-blue-600">Mes Réservations</Link>
            </button>
          </div>


          </div>
        </div>

    </div>
    </div>
    </div>
    </div>
          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulaire de Paiement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Payment/>
        </Modal.Body>
      </Modal>


    </div>

  );
};

export default ReservationForm;
