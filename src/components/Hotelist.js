import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Hoteliew from './Hoteliew';

const Hotelist = () => {
      return (
        <div className='bg-state-100'>
          <div className="flex flex-row"  >
            <div className="w-1/6 ml-3">
               <Sidebar />
            
            </div>
            <div className='flex-1 ml-3'>
              <Navbar />
              <Hoteliew className=' ml-6'/>

             </div>
              
          </div>

        </div>
      );
    };
    
 export default Hotelist;