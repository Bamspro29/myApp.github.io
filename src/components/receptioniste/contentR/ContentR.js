import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../../client/comment/CommentForm'
// Icons
import { FaTaxi, FaUserFriends } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import HotelIcon from '@mui/icons-material/Hotel';

import contact from '../../image/contact.PNG'

// Modal
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ContentR = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="container-fluid">
      <div className='grid grid-cols-3 gap-4'>
        {/* Colonne 1 */}
        <div className='border bg-white ml-3 col-span-1 p-8 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><FaUserFriends /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'> L'arrivée des clients</p></strong>
            </h6>
            <Link to="/ArriveClients" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" >Enregistrer</Button></Link>
          </div>
        </div>
        {/* Colonne 2 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><HotelIcon /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'> les reservations</p></strong>
            </h6>
            <Link to="/ReceptionistReservationList" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-12" variant="primary" >Consulter</Button></Link>
          </div>
        </div>
        {/* Colonne 4 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><TfiCommentAlt /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>faites vos rapports</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow}>noter</Button>
          </div>
        </div>
        {/* Colonne 5 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><FaUserFriends /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Liste d'utilisateurs</p></strong>
            </h6>
            <Link to="/UserList" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-12" variant="primary" >Consulter</Button></Link>
          </div>
        </div>
        {/* Colonne 5 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><TfiCommentAlt /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Boite de messagerie</p></strong>
            </h6>
            <Link to="/AllComments" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-12" variant="primary" >Consulter</Button></Link>
          </div>
        </div>
        {/* Colonne 6 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
           <div className='rounded-full border border-solid mr-3 p-4'><TfiCommentAlt /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Envoyer un message</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow}>Ecrivez-ici</Button>
          </div>
        </div>
      </div>

      {/* Modal commentaire */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Veuillez envoyer un message a vos collaborateurs ou aux clients</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div>
                  {/* <img class="" src={contact} alt="Spas" /> */}
              <CommentForm/>

        </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContentR;
