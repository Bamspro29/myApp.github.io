import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Navbar from '../Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

// Import des images
import Chambre3 from '../image/Chambre3.jpg'
import Chambre2 from '../image/Chambre2.jpg'
import Chambre1p from '../image/Chambre1p.jpg'
import Chambre1p2 from '../image/Chambre1p2.jpg'
import Chambre1p3 from '../image/Chambre1p3.jpg'
import Chambre1p4 from '../image/Chambre1p4.jpg'
import chambrex1 from '../image/chambrex1.jpg'
import chambrex2 from '../image/chambrex2.jpg'
import chambrex3 from '../image/chambrex3.jpg'
import chambrex4 from '../image/chambrex4.jpg'
import chambres1 from '../image/chambres1.jpg'
import chambres2 from '../image/chambres2.jpg'
import chambres3 from '../image/chambres3.jpg'
import chambres4 from '../image/chambres4.jpg'
import chambres5 from '../image/chambres5.jpg'

//Import cards
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Details = () => {


  return (
    <div className='bg-state-100'>
      <div className="flex flex-row"  >
         {/* <div className="w-1/12">
           <Sidebar />
        </div> */}
        <div className='flex-1 ml-3'>
          <Navbar />
         {/* <div className=' px-4 py-2 mt-2 ml-6 border-2 box-shadow bg-blue-100'>
          <div className=' flex ml-6 text-center'>
              <span className='font-semibold text-2xl'>Liste des Hotels: </span> <br />
              <span className='font-semibold text-xl text-blue-400 ml-3'>8 Hotels disponible sur cette plateforme</span> <br />
          </div>
        </div> */}
        <div className='grid grid-cols-1 gap-3 ml-6'>
          {/* Colonne 1 */}
          <div className='border-2  col-span-1 px-4 py-1 rounded text-lg items-center'>
          <div className='category-item box-shadow bg-blue-100'>
            <div className='row md-12'>
              <div className='col-md-8'><img src={Chambre3} alt="Hotels" /></div>
              <div className='col-md-4'>
              <h1 className='font-bold text-center text-primary mt-2 mb-3'>Description de la Chambre N1 </h1>
              <span><h1>Chambre Executive</h1></span>
              <p className='text-xs'>Les chambres exécutives sont idéales pour ceux qui voyagent pour affaires ou pour loisirs et qui apprécient le luxe de l’espace. 
              Capturant l’esprit authentique et le confort du King Fahd Palace, ces chambres luxueuses 
              allient style et élégance avec des équipements modernes et high-tech. Cette chambre spacieuse de 33 mètres carrés dispose d’un lit King size.
              Toutes nos Suites disposent d’un écran LED et d’un téléphone
              Plateau d’accueil avec cafetière/bouilloire à thé Literie raffinée et un vaste choix d’oreillers assurent un sommeil douillet
              Les salles de bains spacieuses des Suites sont en marbre italien et sont équipées de douche à pluie d’un sèche-cheveux de qualité salon 
              produits d’accueil / peignoir et chaussons moelleux</p>
              <p><span>Capacite :</span></p>
              <p><span>Taille :33m²</span></p>
              <Link to="" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mb-3" variant="primary">Reserver Maintenant</Button></Link>
                  {/* <Link to="/Chambres" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mt-3" variant="primary" >Reserver Maintenant</Button></Link> */}

              </div>
            </div>
          </div>
              <CardGroup>
              <Card>
                <Card.Img variant="top" src={chambrex1} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambrex2} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambrex3} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambrex4} />
              </Card>
              </CardGroup>
          </div>
          {/* Colonne 2 */}
          <div className='border-2  col-span-1 px-4 py-1 rounded text-lg items-center'>
          <div className='category-item box-shadow bg-blue-100'>
            <div className='row md-12'>
              <div className='col-md-8'><img src={Chambre2} alt="Hotels" /></div>
              <div className='col-md-4'>
              <span><h1>Chambre De Luxe</h1></span>
              <span>Description</span>
                  <p className='text-xs'>Lumineuse et spacieuse, la chambre Deluxe du King Fahd Palace 
                    offre une vue imprenable sur l’océan Atlantique, notre piscine ou notre golf. 
                    Décorée dans un style raffiné, elle est équipée de lits doubles ou de 
                    deux lits jumeaux, idéale pour une escapade à deux. Entièrement climatisée
                    Lit King Size ou Twin avec literie de qualité supérieure et couette
                    Lit bébé sur demande (jusqu’à 2 ans)
                    Télévision LED avec chaînes satellite et internationales 
                    Téléphone Bureau Wifi gratuit et illimité
                    Plateau d’accueil avec cafetière/bouilloire à thén Minibar Salle de bains WC sèche-cheveux</p>
                    <p><span>Taille :42m²</span></p>
                    <Link to="" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mb-3" variant="primary" >Reserver Maintenant</Button></Link>
                  {/* <Link to="/Chambres" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mt-3" variant="primary" >Reserver</Button></Link> */}

              </div>
            </div>
          </div>
              <CardGroup>
              <Card>
                <Card.Img variant="top" src={Chambre1p} />
              </Card>
              <Card>
                <Card.Img variant="top" src={Chambre1p2} />
              </Card>
              <Card>
                <Card.Img variant="top" src={Chambre1p3} />
              </Card>
              <Card>
                <Card.Img variant="top" src={Chambre1p4} />
              </Card>
              </CardGroup>
          </div>
        </div>
      </div>
      </div>
      
      <div className='grid grid-cols-1 gap-3 ml-6'>
      <div className='border-2  col-span-1 px-4 py-1 rounded text-lg items-center'>
          <div className='category-item box-shadow bg-blue-100'>
            <div className='row md-12'>
              <div className='col-md-8'><img src={Chambre3} alt="Hotels" /></div>
              <div className='col-md-4'>
              <span><h1>Chambre Executive</h1></span>
              <span>Description</span>
              <p className='text-xs'>Les chambres exécutives sont idéales pour ceux qui voyagent pour affaires ou pour loisirs et qui apprécient le luxe de l’espace. 
              Capturant l’esprit authentique et le confort du King Fahd Palace, ces chambres luxueuses 
              allient style et élégance avec des équipements modernes et high-tech. Cette chambre spacieuse de 33 mètres carrés dispose d’un lit King size.
              Toutes nos Suites disposent d’un écran LED et d’un téléphone
              Plateau d’accueil avec cafetière/bouilloire à thé Literie raffinée et un vaste choix d’oreillers assurent un sommeil douillet
              Les salles de bains spacieuses des Suites sont en marbre italien et sont équipées de douche à pluie d’un sèche-cheveux de qualité salon 
              produits d’accueil / peignoir et chaussons moelleux</p>
              <p><span>Taille :33m²</span></p>
              <Link to="/Chambres" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mb-3" variant="primary"  >Reserver Maintenant</Button></Link>
                  {/* <Link to="/Chambres" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mt-3" variant="primary" >Reserver Maintenant</Button></Link> */}

              </div>
            </div>
          </div>
              <CardGroup>
              <Card>
                <Card.Img variant="top" src={chambrex1} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambrex2} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambrex3} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambrex4} />
              </Card>
              </CardGroup>
          </div>
          {/* Colonne 2 */}
          <div className='border-8  col-span-1 px-4 py-1 rounded text-lg items-center'>
          <div className='category-item box-shadow bg-blue-100'>
            <div className='row md-12'>
              <div className='col-md-8'><img src={chambres1} alt="Hotels" /></div>
              <div className='col-md-4'>
              <span><h1>Suite Présidentielle</h1></span>
              <span>Description</span>
              <p className='text-xs'>La suite Présidentielle du King Fahd Palace est une résidence digne des chefs d’Etat en visite. Elle est spécialement conçue pour les clients les plus exigeants.   Le majestueux et luxueux 2 chambres de la Suite Présidentielle offre en effet le luxe à l’état pur, avec ses intérieurs somptueusement aménagés, des couleurs majestueuses et un mobilier princier sans oublier le salon spacieux avec une table à manger pouvant accueillir jusqu’à 8 invités. De par ce véritable sentiment d’espace et de luxe qu’elle vous apporte, notre suite présidentielle est sans nul doute la plus étonnante, la plus apaisante et la plus soignée de la ville.

              Toutes nos Suites disposent d’un écran LED et d’un téléphone
              Plateau d’accueil avec cafetière/bouilloire à thé
              La literie raffinée et un vaste choix d’oreillers assurent un sommeil douillet
              Les salles de bains spacieuses des Suites sont en marbre italien et sont équipées de douche à pluie d’un sèche-cheveux de qualité salon produits d’accueil / peignoir et chaussons moelleux fine et pleine grandeur et produits pour le corps</p>
              <p><span>Adulte: 2</span></p>
              <Link to="" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mb-3" variant="primary"  >Reserver Maintenant</Button></Link>
                  {/* <Link to="/Chambres" ><Button className="font-semibold leading-6 text-indigo-600 hover:bg-info ml-2 mt-3" variant="primary" >Reserver</Button></Link> */}

              </div>
            </div>
          </div>
              <CardGroup>
              <Card>
                
                <NavLink >
                <Card.Img variant="top" src={chambres2} />
                </NavLink>
                
              </Card>
              <Card>
                <Card.Img variant="top" src={chambres3} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambres4} />
              </Card>
              <Card>
                <Card.Img variant="top" src={chambres5} />
              </Card>
              </CardGroup>
          </div>
      </div>
      
    </div>
    
  );
};

export default Details;