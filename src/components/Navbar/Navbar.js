import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import profile from '../image/profile.png';
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxExit } from "react-icons/rx";

//import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="w-full bg-white px-4 flex justify-between">
      <div className="flex items-center text-xl">
        <MdDashboard />
        <span className=' text-2xl font-bold mb-2'>Dashboard</span>
      </div>
      <div className="flex item-center gap-x-5">
        <div className="relative md:w-64">
          <span className=" mt-2 relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className=" bg-white rounded  border-2 flex p-1 focus:outline-none text-black md:text-black">
              <RiSearchLine className='mb-1' />
              <input type="text"className=" px-4 py-0 pl-12 rounded shadow outline-none" />
            </button>
          </span>
        </div>
        <div className="flex mr-2 mt-2  ">
        <IoIosNotificationsOutline className="ml-2 mr-2 mt-2 h-6 w-6 text-black" />
          <div class="flex-shrink-0">
          <img class=" h-12 w-8  mb-2 ml-2 mr-3 rounded-full" src={profile} alt="Spas" />
          </div>
          <RxExit className="ml-2 mr-2 mt-2 text-black" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;