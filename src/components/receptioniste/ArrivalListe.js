import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar"


const ArrivalListe = () => {
    const navigate = useNavigate();

    const [checkIns, setCheckIns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCheckIns = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:8000/api/arrivals', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setCheckIns(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des enregistrements:', error);
                setError('Impossible de récupérer les enregistrements.');
            } finally {
                setLoading(false);
            }
        };

        fetchCheckIns();
    }, []);

    if (loading) {
        return <p>Chargement des enregistrements...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className='bg-state-100'>
    <div className="flex flex-row"  >
      {/* <div className="w-1/12">
         <Sidebar />
      </div> */}
      <div className='flex-1 ml-3'>
        <Navbar />
        

        <div className="max-w-1/2  mx-auto p-8">
        <div className="flex ml-3 mb-2 row md-12">
                    <Link to="/ArriveClients" className="col-md-9 text-blue-400 hover:text-blue-600">
                    Enregistrer l'arrivée du client
                    </Link>
                    <Link to="/dashboardR" className="col-md-3 text-blue-400 hover:text-blue-600">
                        Fermer
                    </Link>
                </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Liste d'Arrivées
        </h1>
                
                {checkIns.length > 0 ? (
                    <table className="min-w-full bg-white text-center">
                        <thead className=" bg-blue-300">
                            <tr>
                                <th className="py-2">Nom</th>
                                <th className="py-2">Email</th>
                                <th className="py-2">Chambre</th>
                                <th className="py-2">Date et Heure d'Arrivée</th>
                                <th className="py-2">Date et Heure de Départ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {checkIns.map((checkIn) => (
                                <tr key={checkIn.id} className="border-t">
                                    <td className="py-2 px-4">{checkIn.name}</td>
                                    <td className="py-2 px-4">{checkIn.email}</td>
                                    <td className="py-2 px-4">{checkIn.room}</td>
                                    <td className="py-2 px-4">
                                        {checkIn.check_in_date} à {checkIn.check_in_time}
                                    </td>
                                    <td className="py-2 px-4">
                                        {checkIn.check_out_date} à {checkIn.check_out_time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucune arrivée trouvée.</p>
                )}

        </div>
    </div>
    </div>

        </div>
    );
};

export default ArrivalListe;
