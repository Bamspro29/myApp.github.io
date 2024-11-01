import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';


const UserComments = () => {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);  // ID du commentaire en cours de modification
    const [editMessage, setEditMessage] = useState('');  // Message modifié

    useEffect(() => {
        const fetchComments = async () => {
            const token = localStorage.getItem('authToken'); // Assurez-vous d'utiliser le bon nom pour le token

            if (!token) {
                navigate('/login'); // Redirige vers la page de connexion si pas de token
                return;
            }

            try {
                const response = await axios.get('http://localhost:8000/api/user/comments', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setComments(response.data);
            } catch (error) {
                setError('Erreur lors de la récupération des commentaires');
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [navigate]);

    // Fonction pour supprimer un commentaire
    const handleDelete = async (id) => {
        const token = localStorage.getItem('authToken');
        try {
            await axios.delete(`http://localhost:8000/api/comments/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setComments(comments.filter(comment => comment.id !== id));
        } catch (error) {
            setError('Erreur lors de la suppression du commentaire');
        }
    };

    // Fonction pour commencer la modification d'un commentaire
    const handleEdit = (id, currentMessage) => {
        setEditingCommentId(id);
        setEditMessage(currentMessage);  // Pré-remplir la textarea avec le message actuel
    };

    // Fonction pour sauvegarder un commentaire modifié
    const handleSave = async (id) => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.put(`http://localhost:8000/api/comments/${id}`, {
                message: editMessage,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setComments(comments.map(comment => 
                comment.id === id ? { ...comment, message: response.data.message } : comment
            ));
            setEditingCommentId(null);  // Quitter le mode d'édition
            setEditMessage(''); // Réinitialiser le message
        } catch (error) {
            setError('Erreur lors de la modification du commentaire');
        }
    };

    // Fonction pour annuler la modification
    const handleCancel = () => {
        setEditingCommentId(null);
        setEditMessage('');  // Réinitialiser le champ de modification
    };

    if (loading) return <p className="text-center">Chargement des commentaires...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
    <div className='bg-state-100' >
    <div className="flex flex-row"  >
      {/* <div className="w-1/12">
         <Sidebar />
      </div> */}
      <div className='flex-1 ml-3'>
        <Navbar />

        <div className="max-w-1/2  mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Vos Commentaires et Réponses</h2>
            {comments.length > 0 ? (
                <table className="min-w-full border border-gray-300 bg-white text-center">
                    <thead>
                        <tr className="bg-blue-300">
                            <th className="border border-gray-300 p-2">Messages</th>
                            <th className="border border-gray-300 p-2">Réponses du Réceptionniste</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map(comment => (
                            <tr key={comment.id} className="border-b">
                                <td className="border border-gray-300 p-2">
                                    {editingCommentId === comment.id ? (
                                        <div>
                                            <textarea
                                                value={editMessage}
                                                onChange={(e) => setEditMessage(e.target.value)}
                                                className="border rounded p-2 w-full"
                                            />
                                            <button onClick={() => handleSave(comment.id)} className="mt-2 bg-blue-500 text-white rounded p-2">Sauvegarder</button>
                                            <button onClick={handleCancel} className="mt-2 ml-2 bg-gray-300 rounded p-2">Annuler</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>{comment.message}</p>
                                        </div>
                                    )}
                                </td>
                                <td className="border border-gray-300 p-2">
                                    {comment.replies && comment.replies.length > 0 ? (
                                        <ul>
                                            {comment.replies.map(reply => (
                                                <li key={reply.id} className="mt-2">
                                                    <strong>Réceptionniste :</strong> {reply.message}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Aucune réponse</p>
                                    )}
                                </td>
                                <td className="border border-gray-300 p-2 text-center">
                                    {editingCommentId === comment.id ? null : (
                                        <div>
                                            <button onClick={() => handleEdit(comment.id, comment.message)} className="bg-yellow-500 text-white rounded p-2  mr-3">Modifier</button>
                                            <button onClick={() => handleDelete(comment.id)} className="ml-2 bg-red-500 text-white rounded p-2 ml-3">Supprimer</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Vous n'avez pas encore de commentaires</p>
            )}

        </div>
    </div>
    </div>
        </div>
    );
};

export default UserComments;
