import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';


import './login.css';
const Mdpf = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden my-5">
              <div className="md:flex">
                
                <div className="w-full p-5">
                  
                  {/* Flèche de retour */}
                  <button
                    onClick={() => navigate(-1)} // Retourner à la page précédente
                    className="mb-4 text-blue-400 hover:text-blue-600 flex items-center"
                  >
                    <FaArrowLeft className="mr-2" /> Retour
                  </button>

                  <div className="text-center mb-5">
                    <h1 className="text-2xl font-semibold text-gray-700 mb-2">Mot de passe oublié ?</h1>
                    <p className="text-gray-500">
                      Nous comprenons, cela arrive. Entrez simplement votre adresse e-mail ci-dessous et nous vous enverrons un lien pour réinitialiser votre mot de passe !
                    </p>
                  </div>

                  <form className="user">
                    <div className="mb-4">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaEnvelope className="text-gray-400" />
                        </span>
                        <input
                          type="email"
                          id="email"
                          required
                          className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                          placeholder="Entrez votre adresse e-mail"
                        />
                      </div>
                    </div>
                     <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-blue-200"> Réinitialiser le mot de passe</button>
                  </form>

                  <hr className="my-4" />
                  
                  <div className="text-center">
                    <Link to="/Register" className="text-sm text-blue-500 hover:bg-blue-100">
                      Créer un compte !
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link to="/login" className="text-sm text-blue-500 hover:bg-blue-100" >
                      Vous avez déjà un compte ? Connexion !
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    // return (
    // <div className=" lgn ">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //           <div className='flex justify-center  mb-10'>
    //           <img src={SVG} alt="Symbol" className=" mr-2  mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white"/>
    //           <h2 className=" ml-3  mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">RED PRODUCT</h2>
    //           </div>
    //   </div>

    //   <div className=" conexpages sm:mx-auto sm:w-full sm:max-w-sm">
    //       <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Mot de passe oublie</h2>
    //     <form className="space-y-6" action="#" method="POST">
    //         <p>Entre votre address e-mail ci dessous et nous vous envoyons des instructions sur la facon de modifier votre mot de passe </p>
    //       <div>
    //         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    //         <div className="mt-2">
    //           <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    //         </div>
    //       </div>

    //       <div className=''>
    //       <Link to="/"><button type="submit" className=" flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">envoyer</button></Link>
    //       </div>
    //     </form>
    //     <p className=" text-center text-sm text-black hover:bg-white">
    //       vous avez deja un compte?
    //       <Link to="/"  className="font-semibold leading-6 text-indigo-600">se connecter</Link>
    //     </p>
    //   </div>
    // </div>
    // );
  }
  export default Mdpf;