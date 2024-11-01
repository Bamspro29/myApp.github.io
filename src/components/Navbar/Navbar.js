import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import MdOutlineNotificationsActive from '../image/MdOutlineNotificationsActive.PNG';
import { RxExit } from "react-icons/rx";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Deconnection from '../Navbar/Deconnection';
import { FaArrowLeft } from 'react-icons/fa';
import UserMenu from './UserMenu'; // Assurez-vous d'importer le composant UserMenu

const Navbar = ({ currentUserId }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    // Logique pour déconnecter l'utilisateur
    console.log('Déconnexion de l’utilisateur');
  };

  return (
    <nav className="w-full bg-white px-4 flex justify-between">
      <div className="flex items-center text-xl">
        <button onClick={() => navigate(-1)} className="mr-self-start text-blue-400 hover:text-blue-600 flex items-center">
          <FaArrowLeft className="mr-2" />
        </button>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64">
          <span className="mt-2 relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="bg-white rounded border-2 flex p-1 focus:outline-none text-black md:text-black">
              <RiSearchLine className='mb-1' />
              <input type="text" className="px-4 py-0 pl-12 rounded shadow outline-none" />
            </button>
          </span>
        </div>
        <div className="flex mr-2 mt-2">
          <div className="flex-shrink-0">
            <Link to="/UserComments">
              <img className="h-12 w-8 ml-2 mr-3 rounded-full" src={MdOutlineNotificationsActive} alt="Notifications" />
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Link to="/DashboardClient">
              <Button variant="info" className='bg-blue-400 text-white py-2 rounded-lg hover:bg-info-800 flex items-center justify-center ml-3 mr-3'>Réserver</Button>
            </Link>
          </div>
          <div className="flex-shrink-0">
            {/* Afficher le menu utilisateur si l'utilisateur est connecté */}
            <UserMenu userId={currentUserId} onLogout={handleLogout} />
          </div>
          <Button className="h-8 w-8 mt-2 ml-3 rounded-full" variant="danger" onClick={handleShow}><RxExit className="text-black" /></Button>
          {/* Modal de déconnexion */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Voulez-vous vraiment vous déconnecter?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Footer>
                <Button variant="warning" className='bg-warning-700 justify-items-end' onClick={handleClose}>
                  NON
                </Button>
                <Button variant="danger" className='text-black justify-items-end' onClick={() => { handleLogout(); handleClose(); }}>
                  <Deconnection />
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
