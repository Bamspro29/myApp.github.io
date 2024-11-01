import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ commentId, onReplyAdded }) => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem('authToken');
        if (!token) {
            window.location.href = '/login'; // Rediriger si non connecté
            return;
        }
    
        try {
            setError(''); // Réinitialise l'erreur avant l'envoi
            await axios.post(`http://localhost:8000/api/comments/${commentId}/reply`, 
            { message }, 
            { headers: { Authorization: `Bearer ${token}` } });
            
            onReplyAdded(); // Met à jour les réponses dans le composant parent
            setMessage(''); // Réinitialise le message après l'envoi
        } catch (error) {
            setError('Erreur lors de l\'ajout de la réponse');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <textarea
                className="border border-gray-300 p-2 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre réponse..."
                required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-blue-300 text-white p-2 mt-2">
                Répondre
            </button>
        </form>
    );
};

export default ReplyForm;
