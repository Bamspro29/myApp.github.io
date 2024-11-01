import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import Login from './components/auth/login/Login';
import Register from './components/auth/Register'
import Mdpf from './components/auth/login/Mdpf';
import Admregister from './components/auth/Admregister';

import Sidebar from './components/client/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import DashboardClient from './components/client/DashboardC';
import Chambres from './components/client/Chambres';
import Details from './components/client/Details';
//backAmin
import SidebarA from './components/admin/SidebarA';
import DashboardA  from './components/admin/DashboardA';
import ContentA  from './components/admin/ContentA';
import Tarifs  from './components/admin/Tarifs';
//receptioniste
import DashboardR from './components/receptioniste/DashboardR';
import SidebaR  from './components/receptioniste/sidebaR/SidebaR';
import ContentR  from './components/receptioniste/contentR/ContentR';
import './index.css'
import Payment from './components/Payment/PaymentForm';
import ReservationForm from './components/client/ReservationForm';
import ReservationList from './components/client/ReservationListC';
import EditReservation from './components/client/EditReservation';
import ReceptionistReservationList from './components/receptioniste/ReceptionistReservationList ';
import ArriveClients  from './components/receptioniste/ArriveClients';
import ArrivalListe  from './components/receptioniste/ArrivalListe';
import FormulaireAddRoom  from './components/admin/gererChambres/FormulaireAddRoom';
import FormulaireEditRoom  from './components/admin/gererChambres/FormulaireEditRoom';
import RoomList  from './components/admin/gererChambres/RoomList';


import CommentForm  from './components/client/comment/CommentForm';
import UserComments  from './components/client/comment/UserComments';
import AllComments  from './components/receptioniste/boiteMessagerie/AllComments';
import UserList  from './components/admin/UserList';
import Deconnection  from './components/Navbar/Deconnection';
import UserMenu  from './components/Navbar/UserMenu';




function App() {
  return (
    <BrowserRouter> 
      <main className='bg'>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Mdpf" element={<Mdpf />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/dashboardClient" element={<DashboardClient />} />
          <Route path="/chambres" element={<Chambres />} /> 
          <Route path="/Details" element={<Details/>} /> 
          <Route path="/sidebarA" element={<SidebarA />} />
          <Route path="/admregister" element={<Admregister />} />
          <Route path="/dashboardA" element={<DashboardA/>} />
          <Route path="/contentA" element={<ContentA/>} />
          <Route path="/Tarifs" element={<Tarifs/>} />
          <Route path="/dashboardR" element={<DashboardR/>} />
          <Route path="/sidebaR" element={<SidebaR/>} />
          <Route path="/contentR" element={<ContentR/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ReservationForm/:id" element={<ReservationForm />} />
          <Route path="/ReservationList" element={<ReservationList />} />
          <Route path="/EditReservation/:id" element={<EditReservation />} />
          <Route path="/ReceptionistReservationList" element={<ReceptionistReservationList />} />
          <Route path="/ArriveClients" element={<ArriveClients/>} />
          <Route path="/ArrivalListe" element={<ArrivalListe/>} />
          <Route path="/FormulaireAddRoom" element={<FormulaireAddRoom/>} />
          <Route path="/FormulaireEditRoom/:id" element={<FormulaireEditRoom/>} />
          <Route path="/RoomList" element={<RoomList/>} />


          <Route path="/CommentForm" element={<CommentForm/>} />
          <Route path="/UserComments" element={<UserComments/>} />
          <Route path="/AllComments" element={<AllComments/>} />
          <Route path="/UserList" element={<UserList/>} />
          <Route path="/Deconnection" element={<Deconnection/>} />
          <Route path="/UserMenu" element={<UserMenu/>} />


        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;