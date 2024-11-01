import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { MdContactPhone } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import HotelIcon from '@mui/icons-material/Hotel';
import { FaUserFriends } from "react-icons/fa";

// Modal
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import CommentForm from '../client/comment/CommentForm';

const ContentA = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className="container-fluid">

        <div className='mt-2 text-center'>
        <h1 className='text-2xl font-bold mb-2'> PANEL DE L'ADMINISTRATEUR</h1>
        <p>l'accès est autorisè qu'au Administrateur pour cette page</p>
        </div>

      <div className='grid grid-cols-4 gap-3 ml-3'>
        {/* Colonne 1 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><HotelIcon /></div>


          <div>
             <div className='row md-12 mr-2'>
             <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2 col-md-8'>Gérer les chambres</p></strong>
            </h6>
              <div className='col-md-4 mt-3'><Link to="/FormulaireAddRoom" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info" variant="primary" >Ajouter</Button></Link></div>
              {/* <div className='col-md-4'><Link to="/FormulaireEditRoom" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info mr-2" variant="warning" >Modifier</Button></Link></div>
              <div className='col-md-4'><Link to="/RoomList" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-danger ml-2" variant="danger" >Supprimer</Button></Link></div> */}
            </div>
       </div>
        </div>
        {/* Colonne 3 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><MdContactPhone /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Gérer les tarifs & rapports d'occupations</p></strong>
            </h6>
            <Link to="/Tarifs" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" >Consulter</Button></Link>
          </div>
        </div>
        {/* Colonne 5 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><TfiCommentAlt /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Boite de Messagerie</p></strong>
            </h6>
            <Link to="/AllComments" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" >Consulter</Button></Link>
          </div>
        </div>
                {/* Colonne 4 */}
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

export default ContentA;
