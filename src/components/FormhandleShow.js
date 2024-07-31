import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function FormhandleShow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        {/* Votre code de la navbar ici */}
      </div>

      <div className="container mx-auto mt-5">
        <Button variant="primary" onClick={handleShow}>
          Ouvrir le formulaire
        </Button>
      </div>

      <Modal centered show={show} onHide={handleClose} className="border-1 bg-blue-100 sm:mx-auto sm:w-full sm:max-w-sm mt-5">
        <Modal.Header closeButton>
          <Modal.Title>Créer un nouveau hôtel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

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
                <input type="image" placeholder="Ajouter une photo" autoFocus className="w-full block rounded-md border-0 py-8 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:textblack focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
              </Form.Group>
            </div>

            <div>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Enregistrer
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormhandleShow;