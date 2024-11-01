import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { FaEnvelope,FaTaxi, FaUserFriends  } from 'react-icons/fa';
import { IoIosRestaurant } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import HotelIcon from '@mui/icons-material/Hotel';
//image
import barr from '../image/barr.jpg'
import taxis from '../image/taxis.PNG'
import contact from '../image/contact.PNG'
// Modal
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import CommentForm from '../client/comment/CommentForm';

const Homeview = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show_1, setShow_1] = useState(false);
  const handleClose_1 = () => setShow_1(false);
  const handleShow_1 = () => setShow_1(true);

  const [show_2, setShow_2] = useState(false);
  const handleClose_2 = () => setShow_2(false);
  const handleShow_2 = () => setShow_2(true);

  const [show_t, setShow_t] = useState(false);
  const handleClose_t = () => setShow_t(false);
  const handleShow_t = () => setShow_t(true);

  const [show_r, setShow_r] = useState(false);
  const handleClose_r = () => setShow_r(false);
  const handleShow_r = () => setShow_r(true);

  return (
    <div className="container-fluid">
      <div className='grid grid-cols-3 gap-4'>
        {/* Colonne 1 */}
        <div className='border bg-white ml-3 col-span-1 p-8 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><FaUserFriends /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>+ 6000 Utilisateurs</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow_1}>Voir</Button>
                    {/* Modal commentaire */}
            <Modal show={show_1} onHide={handleClose_1}>
          <Modal.Header closeButton>
            <Modal.Title>Donnez</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
            </Modal>
          </div>
        </div>
        {/* Colonne 2 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><HotelIcon /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Chambres disponible</p></strong>
            </h6>
            <Link to="/Chambres" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-12" variant="primary" >Chercher</Button></Link>
          </div>
        </div>
        {/* Colonne 3 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><MdContactPhone /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Nos Contacts</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow_2}>Contactez</Button>
                    {/* Modal commentaire */}
            <Modal show={show_2} onHide={handleClose_2}>
          <Modal.Header closeButton>
            <Modal.Title><h5 className='text-xxl text-blue-500'>Vous pouvez nous rejoindre sur les differants canaux pour tous vos besoins.</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
                  <img class="" src={contact} alt="Spas" />
              {/* <img class="" src={resto} alt="Spas" /> */}
              <CommentForm/>

                  </div>


            {/* <div className='row md-12'>
              <div className='col-md-6 bg-blue-300'>
                <thead>
                  <tr>
                    <td><FaEnvelope/></td>
                    <td><MdContactPhone/></td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <tr><td><Link to="">bamspro29@gmail.com</Link></td></tr>
                  </tr>
                  <tr>
                    <th>Tl:</th>
                    <tr><td><Link to="">+221 77 871 63 79 </Link></td></tr>
                  </tr>
                </thead>
              </div>
              <div className='col-md-6'>
              <Form  >
            <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <input type="text" placeholder="Username" autoFocus className="w-full block rounded-md border-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>
            <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-gray-400" />
              </span>
              <input type="email"id="email"required className="form-input pl-10 w-full py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"placeholder="Entrez votre adresse e-mail"/>
            </div>
             </Form.Group>
            <div>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <input type="text" placeholder="Message" autoFocus className="w-full block rounded-md py-4 shadow-sm placeholder:text-black sm:text-sm sm:leading-6"></input>
            </Form.Group>
            </div>
            <Modal.Footer>
              <Button variant="secondary"className='bg-slate-700  justify-items-end ' onClick={handleClose_2}>
              Fermer
              </Button>
              <Button variant="primary"className='bg-slate-700  justify-items-end ' onClick={handleClose_2}>
                Enregistrer
              </Button>
            </Modal.Footer>
            </Form>

              </div>
            </div> */}
          </Modal.Body>
            </Modal>
          </div>
        </div>
        {/* Colonne 4 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><TfiCommentAlt /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Laisser un commentaire</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow}>Commentez</Button>
                    {/* Modal commentaire */}
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><h5 className='text-xxl text-blue-500'>Laisser un commentaire en respectant la politique etablie sur cette plateforme</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <CommentForm/>
          </Modal.Body>
            </Modal>

          </div>
        </div>
        {/* Colonne 5 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><IoIosRestaurant /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Restaurant/Bar</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow_r}>Commandez</Button>
                    {/* Modal commentaire */}
              <Modal show={show_r} onHide={handleClose_r}>
                <Modal.Header closeButton>
                  <Modal.Title><h5 className='text-xxl text-blue-500'>Pour une bonne alimentation de qualite passer vos comment sur Restaurant/Bar</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                  <img class="" src={barr} alt="Spas" />
              {/* <img class="" src={resto} alt="Spas" /> */}
              <CommentForm/>

                  </div>
            {/* <div className='row md-12'>
              <div className='col-md-6 bg-blue-300'>
              <img class="" src={barr} alt="Spas" />
              <img class="" src={resto} alt="Spas" />

              </div>
              <div className='col-md-6'>
              <CommentForm/>
              </div>
            </div> */}
                </Modal.Body>
              </Modal>
          </div>
        </div>
        {/* Colonne 6 */}
        <div className='border bg-white ml-3 col-span-1 p-7 rounded text-lg flex items-center'>
          <div className='rounded-full border border-solid mr-3 p-4'><FaTaxi /></div>
          <div>
            <h6 className='text-lg flex items-center'>
              <strong><p className='ml-2'>Un Taxi privè</p></strong>
            </h6>
            <Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2" variant="primary" onClick={handleShow_t}>Appelez</Button>
                    {/* Modal commentaire */}
            <Modal show={show_t} onHide={handleClose_t}>
          <Modal.Header closeButton>
            <Modal.Title><h5 className='text-xxl text-blue-500'>Pour vos deplace durant vos sejours commandez un Taxi prive pour vous</h5></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
                  <img class="" src={taxis} alt="Spas" />
              {/* <img class="" src={resto} alt="Spas" /> */}
              <CommentForm/>

                  </div>
          </Modal.Body>
            </Modal>
          </div>
        </div>
          
      </div>

    </div>
  );
};
export default Homeview;
