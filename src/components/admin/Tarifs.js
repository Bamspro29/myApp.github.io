import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const Tarifs = () => {
  const navigate = useNavigate();

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:8000/api/receptionist/reservations', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setReservations(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations:', error);
        setError('Impossible de récupérer les réservations.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchReservations();
  }, []);
    // Calculer les totaux
  const totalClients = reservations.length; // Chaque réservation correspond à un client unique
  const totalChambres = reservations.length; // Si chaque réservation correspond à une chambre
  const montantTotal = reservations.reduce((sum, reservation) => sum + parseFloat(reservation.amount), 0); // Somme des montants

  if (loading) {
    return <p>Chargement des réservations...</p>;
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
                    
                    </Link>
                    <Link to="/DashboardA" className="col-md-3 text-blue-400 hover:text-blue-600">
                        Fermer
                    </Link>
                </div>

  <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Liste des Réservations</h1>

{reservations.length > 0 ? (
  <>
    <table className="min-w-full bg-white text-center">
      <thead className="bg-blue-300">
        <tr>
          <th className="py-2">Nom</th>
          <th className="py-2">Chambre</th>
          <th className="py-2">Date d'arrivée</th>
          <th className="py-2">Date de départ</th>
          <th className="py-2">Montant</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.id} className="border-t">
            <td className="py-2 px-4">{reservation.name}</td>
            <td className="py-2 px-4">{reservation.room}</td>
            <td className="py-2 px-4">{reservation.check_in}</td>
            <td className="py-2 px-4">{reservation.check_out}</td>
            <td className="py-2 px-4">{reservation.amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="font-bold border-t-2">
          <td className="py-2 px-4">Total</td>
          <td className="py-2 px-4">{totalChambres}</td>
          <td className="py-2 px-4"></td>
          <td className="py-2 px-4"></td>
          <td className="py-2 px-4">{montantTotal.toFixed(2)} XOF</td>
        </tr>
      </tfoot>
    </table>

     <div className=" bg-blue-200 font-bold">
      <h3 className='text-center text-2xl font-bold'>Les tarifs en temps reel</h3>
      <p><strong>Total des reservations :</strong> {totalClients}</p>
      <p><strong>Montant total :</strong> {montantTotal.toFixed(2)} CFAFr</p>
    </div> 
  </>
) : (
  <p>Aucune réservation trouvée.</p>
)}

        </div>
    </div>
    </div>

    </div>
  );
};

export default Tarifs;



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import axios from 'axios';

// const Tarifs = () => {
//   const navigate = useNavigate();

//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchReservations = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         const response = await axios.get('http://localhost:8000/api/receptionist/reservations', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setReservations(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des réservations:', error);
//         setError('Impossible de récupérer les réservations.');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchReservations();
//   }, []);
//     // Calculer les totaux
//   const totalClients = reservations.length; // Chaque réservation correspond à un client unique
//   const totalChambres = reservations.length; // Si chaque réservation correspond à une chambre
//   const montantTotal = reservations.reduce((sum, reservation) => sum + parseFloat(reservation.amount), 0); // Somme des montants

//   if (loading) {
//     return <p>Chargement des réservations...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
//       <div className="flex ml-3 mb-2 row md-12">
//           <button
//               onClick={() => navigate(-1)} // Retourne à la page précédente
//               className=" col-md-9 self-start text-blue-400 hover:text-blue-600 flex items-center"
//           >
//               <FaArrowLeft className="mr-2" /> Retour
//           </button>
//           <Link to="/dashboardR" className="col-md-3 text-blue-400 hover:text-blue-600">
//               Fermer
//           </Link>
//       </div>

//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Liste des Réservations</h1>

//         {reservations.length > 0 ? (
//           <>
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2">Nom</th>
//                   <th className="py-2">Chambre</th>
//                   <th className="py-2">Date d'arrivée</th>
//                   <th className="py-2">Date de départ</th>
//                   <th className="py-2">Montant</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reservations.map((reservation) => (
//                   <tr key={reservation.id} className="border-t">
//                     <td className="py-2 px-4">{reservation.name}</td>
//                     <td className="py-2 px-4">{reservation.room}</td>
//                     <td className="py-2 px-4">{reservation.check_in}</td>
//                     <td className="py-2 px-4">{reservation.check_out}</td>
//                     <td className="py-2 px-4">{reservation.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr className="font-bold border-t-2">
//                   <td className="py-2 px-4">Total</td>
//                   <td className="py-2 px-4">{totalChambres}</td>
//                   <td className="py-2 px-4"></td>
//                   <td className="py-2 px-4"></td>
//                   <td className="py-2 px-4">{montantTotal.toFixed(2)} XOF</td>
//                 </tr>
//               </tfoot>
//             </table>

//             <div className="mt-4">
//               <p><strong>Total des clients :</strong> {totalClients}</p>
//               <p><strong>Montant total :</strong> {montantTotal.toFixed(2)} CFAFr</p>
//             </div>
//           </>
//         ) : (
//           <p>Aucune réservation trouvée.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tarifs;
