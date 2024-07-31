import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Dashboardw from './Dashboardw';
const Dashboard = () => {
  return (
    <div className='bg-state-100'>
      <div className="flex flex-row"  >
        <div className="w-1/6 mr-3">
           <Sidebar />
        
        </div>
        <div className='flex-1 ml-3'>
          <Navbar />
          <Dashboardw className=' ml-3'/>

         </div>
          
      </div>

    </div>
  );
};

export default Dashboard;