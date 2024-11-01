import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const UserList = () => {
    const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.error || 'Erreur lors de la récupération des utilisateurs');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Fetch error: ', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Chargement des utilisateurs...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className='bg-state-100'>
            <div className="flex flex-row"  >
      <div className='flex-1 ml-3'>
        <Navbar />
        

        <div className="max-w-1/2  mx-auto p-8">

        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Liste des utilisateurs</h1>
      {users.length > 0 ? (
        <table className="min-w-full bg-white text-center">
          <thead className="bg-blue-300">
            <tr>
              <th className="py-2">Nom</th>
              <th className="py-2">Email</th>
              <th className="py-2">Rôle</th>
              <th className="py-2">Créé le</th>
              <th className="py-2">Mis à jour le</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">{new Date(user.created_at).toLocaleString()}</td>
                <td className="py-2 px-4">{new Date(user.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucun utilisateur trouvé.</p>
      )}

        </div>
    </div>
    </div>
    </div>
  );
};

export default UserList;
