import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Navbar from '../Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

// Import des images

const DashboardClient = () => {
  const [rooms, setRooms] = useState([]);
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

  return (
    <div className='bg-state-100'>
    <div className="flex flex-row"  >
      <div className="w-1/12">
         <Sidebar />
      </div>
      <div className='flex-1 ml-3'>
        <Navbar />

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
            <Link to="/Chambres">
              <Button className="font-semibold leading-6 text-indigo-600 hover:bg-indigo-100">
                Détails
              </Button>
            </Link>
            <Link to={`/ReservationForm/${room.id}`}>
              <Button className="font-semibold leading-6 text-indigo-400 hover:bg-indigo-100">
                Réserver
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>

   
    </div>
   
    </div>
    </div>



    
  );

      
      
    };
    
 export default DashboardClient;