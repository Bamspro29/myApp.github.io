import React from 'react';
import { Routes, Route, Link,useNavigate } from 'react-router-dom';

import Homeview from './Homeview';
import Chambres from '../client/Chambres';
import ImageCarousel from '../imageCarousel/ImageCarousel';
import Button from 'react-bootstrap/Button';
import { MdOutlineHotelClass } from "react-icons/md";



const Home = () => {
  const navigate = useNavigate();


  return (
    <div className='bg-state-100'>
      <div className="flex flex-row"  >
       
        <div className='flex-1'>
        <nav className="w-full bg-white px-4 flex justify-between mb-3 mt-1">
      <div className="flex items-center text-xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">HOTEL</h1>
        
        <div className='row md-12 mb-4'>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
          <div className='col-md-2'><MdOutlineHotelClass /></div>
        </div>
      </div>
      <div className="flex item-center gap-x-5">
        <div className="relative md:w-64">
          <span className=" mt-2 relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className=" bg-white rounded  border-2 flex p-1 focus:outline-none text-black md:text-black">
              <input type="text"className=" px-4 py-0 pl-12 rounded shadow outline-none" />
            </button>
          </span>
        </div>
        <div className="flex mr-2 mt-2  ">
        <div class="flex-shrink-0">
          <Link to="/Chambres">
              <Button variant="info"className='bg-blue-400 text-white py-2 rounded-lg hover:bg-info-800 flex items-center justify-center  ml-3 mr-3 '>Reserver</Button>
          </Link>
          </div>
          <div class="flex-shrink-0">
          <Link to="/login">
              <Button variant="info"className='text-black ml-3 mr-3 '>Se connecter</Button>
          </Link>
          </div>
          <div class="flex-shrink-0">
          <Link to="/Register">
              <Button variant="info"className='text-black ml-3 mr-3 '>S'inscrire</Button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
          <div className='row md-12'>
            <div ><ImageCarousel className=''/></div>
            {/* <div className='col-md-6'><ImageCarousel className=' ml-3'/></div> */}
          </div>
          <Homeview className=''/>
          <Chambres className=''/>

         </div>
          
      </div>

    </div>
  );
};

export default Home;