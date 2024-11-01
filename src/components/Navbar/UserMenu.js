import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserMenu = ({ userId, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        onLogout();
        setIsOpen(false);
    };

    // Récupérer les informations de l'utilisateur par ID
    useEffect(()=> {
        const getUserById = async () => {
            if (!userId) {
                console.warn("Aucun ID utilisateur fourni");
                return;
            }

            try {
                console.log("Tentative de récupération de l'utilisateur avec ID:", userId);
                const response = await axios.get(`http://localhost:8000/api/users/${userId}`);
                console.log("Réponse de l'utilisateur:", response.data);
                setName(response.data.name);
            } catch (error) {
                console.error('Erreur lors de la récupération de l’utilisateur:', error);
            }
        };

        getUserById();
    }, [userId]);

    useEffect(() => {
        console.log("Nom de l'utilisateur mis à jour:", name);
    }, [name]);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleMenu}
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
                {name || 'Utilisateur'} {/* Affiche le nom de l'utilisateur ou 'Utilisateur' par défaut */}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>
                        <a href="/forgot-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mot de passe oublié</a>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Déconnexion
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
