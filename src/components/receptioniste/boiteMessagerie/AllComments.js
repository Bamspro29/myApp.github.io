
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReplyForm from './ReplyForm';
import Navbar from '../../Navbar/Navbar';


const AllComments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {
                window.location.href = '/login'; // Rediriger vers la page de connexion si non connecté
                return;
            }

            try {
                const response = await axios.get('http://localhost:8000/api/all-comments', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.data && Array.isArray(response.data)) {
                    setComments(response.data);
                } else {
                    setError('Format de données inattendu');
                }
            } catch (error) {
                setError('Erreur lors de la récupération des commentaires');
                console.error('Erreur API:', error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    const handleReplyAdded = async () => {
        setLoading(true);
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.get('http://localhost:8000/api/all-comments', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setComments(response.data);
        } catch (error) {
            setError('Erreur lors de la récupération des commentaires');
        } finally {
            setLoading(false);
        }
    };
    
    if (loading) return <p className="text-center">Chargement des commentaires...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        
        <div className='bg-state-100'>
    <div className="flex flex-row"  >
      {/* <div className="w-1/12">
         <Sidebar />
      </div> */}
      <div className='flex-1 ml-3'>
        <Navbar />

        <div className="max-w-1/2  mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Boite de messagerie</h2>
        {comments.length > 0 ? (
            <table className="min-w-full border bg-white border-gray-300">
                <thead>
                    <tr className="bg-blue-300 text-center">
                        <th className="border border-gray-300 p-2">Nom</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Messages</th>
                        <th className="border border-gray-300 p-2">Réponses</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment => (
                        <tr key={comment.id} className="border-b">
                            <td className="border border-gray-300 p-2">{comment.name}</td>
                            <td className="border border-gray-300 p-2">{comment.email}</td>
                            <td className="border border-gray-300 p-2">{comment.message}</td>
                            <td className="border border-gray-300 p-2">
                                {comment.replies && comment.replies.length > 0 ? (
                                    <ul>
                                        {comment.replies.map(reply => (
                                            <li key={reply.id} className="mt-2">
                                                <strong>{reply.user.name} :</strong> {reply.message}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Aucune réponse</p>
                                )}
                                {/* Formulaire pour ajouter une réponse */}
                                <ReplyForm commentId={comment.id} onReplyAdded={handleReplyAdded} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p className="text-center">Aucun commentaire trouvé.</p>
        )}

        </div>
    </div>
    </div>
        </div>
    );
};

export default AllComments;

