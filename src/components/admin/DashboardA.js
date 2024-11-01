import React from 'react';
//import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SidebarA from './SidebarA'
import ContentA from './ContentA'
import RoomList from './gererChambres/RoomList'

const DashboardA = () => {

  return (
    <div className='bg-state-100'>
      <div className="flex flex-row"  >
        <div className="w-1/12">
           <SidebarA/>
        
        </div>
        <div className='flex-1'>
            <Navbar/>
            <ContentA/>
            <RoomList/>

            
          
            
         </div>
          
      </div>

    </div>
  );
};

export default DashboardA;