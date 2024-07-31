import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Inscription.css';

const Inscription = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/Inscription', { username, email, password })
      .then((result) => {console.log(result)
      navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="inst">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center mb-10">
          <h2 className="ml-3 mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">RED PRODUCT</h2>
        </div>
      </div>

      <div className="form1 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inscrivez-vous en tant qu'Admin</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor='Username' className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
            <div className="mt-2">
              <input
                name="Username"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
            <div className="mt-2">
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-3 form-check">
            <input name="checkbox" type="checkbox" required className="bah" />
            <label className="form-check-label">Accepter les termes et la politique</label>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              S'inscrire
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500">
          Vous avez déjà un compte ? <Link to="/" className="font-semibold leading-6 text-indigo-600">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default Inscription;