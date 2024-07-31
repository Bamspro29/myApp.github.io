import { Routes, Route, Link } from 'react-router-dom';
import { MdAdd } from "react-icons/md";
import { TiArrowLeftThick } from "react-icons/ti";

// Import des images
import image0 from './image/image (0).png';
import image1 from './image/image (1).png';
import image2 from './image/image (2).png';
import image3 from './image/image (3).png';
import image4 from './image/image (4).png';
import image5 from './image/image (5).png';
import image6 from './image/image (6).png';
import image7 from './image/image (7).png';

//import FormhandleShow from './FormhandleShow';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Hoteliew = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="container-fluid">
      <div className='bg-white px-4 py-2 mt-2 flex justify-between ml-6 border-2'>
        <div className='items-center'>
          <span className='font-semibold text-2xl'>Liste des Hotels</span> <br />
          <span className='font-semibold text-xl'> Hotels 8 </span> <br />
        </div>
        <div >
        <div className=' border-2 rounded' >
        <Button variant="ligth" onClick={handleShow} className=' text-black flex'>{ <MdAdd className='mt-2 mr-2'/>} Ajouter un nouveau Hotel</Button>
      </div>

      <Modal centered show={show} onHide={handleClose} className="">
        <Modal.Header closeButton>
        <TiArrowLeftThick />
        <Modal.Title> Créer un nouveau hôtel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  >
            <div className='l1 flex'>
            <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom de l'hotel</Form.Label>
              <input type="text" placeholder="CAP Marniane" autoFocus className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>
            <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adresse</Form.Label>
              <input type="text" placeholder="Les îles du saloum, Mar Lodji" autoFocus className="block rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>

            </div>

            <div className='l2 flex'>
            <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <input type="email" placeholder="information@gmail.com" autoFocus className="block rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>
            <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Numéro de téléphone </Form.Label>
              <input type="text" placeholder="+221 77 777 77 77" autoFocus className="block rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>

            </div>

            <div className='l3 flex'>
            <Form.Group className="mb-3 mr-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prix par nuit</Form.Label>
              <input type="text" placeholder="25.000 XOF" autoFocus className="block rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>
            <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Devise</Form.Label>
              <input type="text" placeholder="F XOF" autoFocus className="block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>

            </div>
            <div>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <h5>Ajouter une photo</h5>
              <input type="image" placeholder="Ajouter une photo" autoFocus className="w-full block rounded-md border-0 py-8 Bshadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </Form.Group>
            </div>
            <div className='justify-items-end '>
                <Button variant="secondary" className='bg-slate-700 mr-3 justify-items-end ' onClick={handleClose}>
                Fermer
              </Button>
              <Button variant="primary" className='bg-slate-700 ml-3 justify-items-end ' onClick={handleClose}>
                Enregistrer
              </Button>

            </div>
          </Form>
        </Modal.Body>
      </Modal>
        </div>
      </div>

      <div className='category'>
        <div className='flex'>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3'>
              <img src={image0} alt="Hotels" />
              <p className='text-xs'>Boulevard Martin Luther King Dakar, 11500</p>
              <span>Hôtel Terrou-Bi</span>
              <p className='text-xs'>25.000 XOF par nuit</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image1} alt="Hotels" />
              <p className='text-xs'>Rte des Almadies, Dakar</p>
              <span>King Fahd Palace</span>
              <p className='text-xs'>20.000 XOF par nuit</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image2} alt="Restaurant" />
              <p className='text-xs'>Rte de la Corniche O, Dakar 16868</p>
              <span>Radisson Blu Hotel</span>
              <p className='text-xs'>22.000 XOF par nuit</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image3} alt="Restaurant" />
              <p className='text-xs'>Place de l'Independance, 10 Rue PL 29, Dakar</p>
              <span>Pullman Dakar Teranga</span>
              <p className='text-xs'>30.000 XOF par nuit</p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image4} alt="Restaurant" />
              <p className='text-xs'>Boulevard Martin Luther King Dakar, 11500</p>
              <span>Hôtel Terrou-Bi</span>
              <p className='text-xs'>25.000 XOF par nuit</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image5} alt="Spas" />
              <p className='text-xs'>Mbour, Sénégal</p>
              <span>Hôtel Saly</span>
              <p className='text-xs'>20.000 XOF par nuit</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image6} alt="Spas"/>
              <p className='text-xs'>Route de Ngor, Dakar</p>
              <span>Le Ngor Diarama</span>
              <p className='text-xs'>22.000 XOF par nuit</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='category-item box-shadow ml-3 mr-2'>
              <img src={image7} alt="Spas" />
              <p className='text-xs'>Saly, Mbour, Sénégal</p>
              <span>Le Lamantin Beach Resort & SPA</span>
              <p className='text-xs'>30.000 XOF par nuit</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hoteliew;