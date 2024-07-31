import React from 'react';
import { Link } from 'react-router-dom';
import SVG from '../image/SVG.png';

import './login.css';



const Mdpf = () => {
    return (
    <div className=" lgn ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className='flex justify-center  mb-10'>
              <img src={SVG} alt="Symbol" className=" mr-2  mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white"/>
              <h2 className=" ml-3  mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">RED PRODUCT</h2>
              </div>
      </div>

      <div className=" conexpages sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Mot de passe oublie</h2>
        <form className="space-y-6" action="#" method="POST">
            <p>Entre votre address e-mail ci dessous et nous vous envoyons des instructions sur la facon de modifier votre mot de passe </p>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className=''>
          <Link to="/"><button type="submit" className=" flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">envoyer</button></Link>
          </div>
        </form>
        <p className=" text-center text-sm text-black hover:bg-white">
          vous avez deja un compte?
          <Link to="/"  className="font-semibold leading-6 text-indigo-600">se connecter</Link>
        </p>
      </div>
    </div>
    );
  }
  export default Mdpf;