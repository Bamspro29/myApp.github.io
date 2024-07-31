import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import { MdDashboard } from "react-icons/md";
import profile from '../image/profile.png';
import SVG from '../image/SVG.png';


import './Sidebar.css';



const Sidebar = () => {
  return (
    <div className='SB w-64  fixed h-full px-4 py-2'>
      <div className='my-1 mb-4'>
      <div className='flex justify-center '>
        <img src={SVG} alt="Symbol" className=" mr-2  text-center text-2xl font-bold leading-9 tracking-tight text-white"/>
        <h2 className=" ml-3  text-center text-xl font-bold leading-9 tracking-tight text-white">RED PRODUCT</h2>
        </div>
      </div>
      <hr className='bg-white'/>
      <p className='text-white ml-2'>Principal</p>
      <ul className='mt-3 text-white font-bold'>
        <li className=' w-full mb-2 rounded hover:shadow hover:bg-white py-2 flex items-center'>
          <Link to="/Dashboard" className=' px-3 flex items-center text-black text-xl'>
            <MdDashboard className='' /> Dashboard
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-white py-2 flex items-center'>
          <Link to="/Hotellist" className='px-3 flex items-center text-black text-xl'>
            <HotelIcon className='mr-2' />
            Liste des hôtels
          </Link>
        </li>
      </ul>

      <div className='py-40'></div>
      <hr className='text-3xl text-white border-2'></hr>
      <div className=' flex'>
          <img class="h-12 w-8 mb-2 ml-2 mr-2 mt-2 rounded-full" src={profile} alt="Spas" />
          <div className='text-2xl text-white'>
          <h6 className='text-2xl'>Ambah jr</h6>
          <p className='text-xl'>en ligne</p>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;