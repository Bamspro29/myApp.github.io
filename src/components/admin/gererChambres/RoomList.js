import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';


const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  // Récupération des chambres depuis l'API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/chambres');
        setRooms(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des chambres:', error);
      }
    };

    fetchRooms();
  }, []);

  // Suppression d'une chambre
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette chambre ?")) {
      try {
        await axios.delete(`http://localhost:8000/api/chambres/${id}`);
        setRooms(rooms.filter(room => room.id !== id)); // Mise à jour de la liste des chambres
        console.log('Chambre supprimée avec succès');
      } catch (error) {
        console.error('Erreur lors de la suppression de la chambre:', error);
      }
    }
  };

  return (
    
    <div className="">
            <div className='flex ml-3 mb-2'>
            <button onClick={() => navigate(-1)} // Retourne à la page précédente
              className=" mr-self-start text-blue-400 hover:text-blue-600 flex items-center">
              <FaArrowLeft className="mr-2" />
            </button>
            <button> 
              {/* <Link to="/RoomList" className="ml-32 text-blue-400 hover:text-blue-600">Liste des chambres</Link> */}
            </button>
      </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      
      {rooms.map((room) => (
        <div key={room.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          {room.image_url && (
            <img
              src={`http://localhost:8000${room.image_url}`}
              alt={`Chambre ${room.numChambre}`}
              className="w-full h-40 object-cover"
            />
          )}
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2"> {room.numChambre}</h2>
            <p className="text-gray-700 text-base">Type: {room.type}</p>
            <p className="text-gray-700 text-base">Prix: {room.price} CFA Fr</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between">
            <Link to={`/ReservationForm/${room.id}`}>
              <Button className="font-semibold leading-6 text-indigo-600 hover:bg-indigo-100">
                Réserver
              </Button>
            </Link>
            <Button
              onClick={() => navigate(`/FormulaireEditRoom/${room.id}`)}
              className="font-semibold leading-6 text-yellow-300 hover:bg-yellow-100 ml-2"
            >
              Modifier
            </Button>
            <Button
              onClick={() => handleDelete(room.id)}
              className="font-semibold leading-6 text-red-600 hover:bg-red-100 ml-2"
            >
              Supprimer
            </Button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RoomList;
