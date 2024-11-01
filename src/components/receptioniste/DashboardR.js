import React from 'react';
//import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SidebaR from './sidebaR/SidebaR';
import ContentR from './contentR/ContentR';

const DashboardR = () => {
  return (

    <div className='container-fluid'>
          <div className="flex flex-row"  >
            <div className="w-1/12">
               <SidebaR/>
            
            </div>
            <div className='flex-1'>
              <Navbar/>

            <div className=' ml-6 mr-6'>
              <div className='mt-3 text-center'>
              <h1 className='text-2xl font-bold mb-2'> PANEL DE RECEPTIONISTE</h1>
                <p>l'accès est autorisè qu'aux receptionistes pour cette page</p>
                </div>
                <ContentR/>
                  
                </div>
             </div>
          </div>
        </div>
  );
};

export default DashboardR;