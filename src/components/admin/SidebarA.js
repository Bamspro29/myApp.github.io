import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp, FaTachometerAlt, FaCog, FaWrench, FaFolder, FaChartArea, FaTable, FaTimes } from 'react-icons/fa';
import { MdOutlineHotelClass } from "react-icons/md";
import { MdDashboard } from 'react-icons/md';
import profile from '../image/profile.png';
const SidebarA = () => {
  const [isOpen, setIsOpen] = useState(true);  // Par défaut, le sidebar est ouvert
  const [collapseComponents, setCollapseComponents] = useState(false);
  const [collapseUtilities, setCollapseUtilities] = useState(false);
  const [collapsePages, setCollapsePages] = useState(false);
  // Fonction pour ouvrir/fermer le sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 ${isOpen ? 'w-40' : 'w-0'} h-full bg-blue-400 transition-all duration-300 overflow-hidden z-50`}
      >
        {/* Bouton de fermeture */}
        {isOpen && (
          <div className="absolute top-0 right-0 p-2 text-white cursor-pointer" onClick={toggleSidebar}>
            <FaTimes size={24} />
          </div>
        )}

        <ul className="text-white w-full h-full">
          {/* Titre et icône */}
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">HÔTEL</h1>
            <div className="row md-12">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="col-md-2">
                  <MdOutlineHotelClass />
                </div>
              ))}
            </div>
          </div>
          {/* Séparateur */}
          <hr className="my-2 border-gray-200" />

          {/* Tableau de bord */}
          <li className="p-2 hover:bg-blue-300">
            <Link to="/" className="flex items-center space-x-2 ml-2">
            <MdDashboard />
              <span>Tableau de bord</span>
            </Link>
          </li>
          {/* Séparateur */}
          <hr className="my-2 border-gray-200" />

          {/* interface */}
          <li className="p-2 hover:bg-blue-300">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setCollapseComponents(!collapseComponents)}
            >
              <div className="flex items-center">
                <FaTachometerAlt />
                <span className="ml-2 hover:bg-blue-300">Interface</span>
              </div>
              {collapseComponents ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {collapseComponents && (
              <div className="bg-white text-black py-2 rounded">
                <Link to="/dashboardClient" className="block px-4 py-1 hover:bg-blue-300 ">Clients</Link>
                <Link to="/dashboardR" className="block px-4  hover:bg-blue-300 py-1">Receptioniste</Link>
              </div>
            )}
          </li>

              {/* Séparateur */}
              <hr className="my-2 border-gray-200" />


          {/* Utilitaires */}
          <li className="p-2 hover:bg-blue-300">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setCollapseUtilities(!collapseUtilities)}
            >
              <div className="flex items-center">
                <FaWrench />
                <span className="ml-2 ">Utilitaires</span>
              </div>
              {collapseUtilities ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {collapseUtilities && (
              <div className="bg-white text-black py-2 rounded">
                <Link to="" className="block px-4 py-1 hover:bg-blue-300">generale</Link>
                <Link to="" className="block px-4 py-1 hover:bg-blue-300">components</Link>
                <Link to="" className="block px-4 py-1 hover:bg-blue-300">langue</Link>
                <Link to="" className="block px-4 py-1 hover:bg-blue-300">maintenace</Link>
                <Link to="" className="block px-4 py-1 hover:bg-blue-300">Systeme</Link>
                <Link to="" className="block px-4 py-1 hover:bg-blue-300">Autres</Link>
              </div>
            )}
          </li>
              {/* Séparateur */}
              <hr className="my-2 border-gray-200" />
           {/* Graphiques */}
            <li className="p-2 hover:bg-blue-300">
        <Link to="/charts" className="flex items-center space-x-2 ml-2">
          <FaChartArea />
          <span>Graphiques</span>
        </Link>
            </li>
              {/* Séparateur */}
              <hr className="my-2 border-gray-200" />
            {/* Tableaux */}
            <li className="p-2 hover:bg-blue-300">
        <Link to="/UserList" className="flex items-center space-x-2 ml-2">
          <FaTable />
          <span>Les utilisateurs</span>
        </Link>
            </li>
          {/* Séparateur */}
          <hr className="my-2 border-gray-200" />
        {/* Profile */}
        <li className="p-2 hover:bg-blue-300">
    <button
      className="flex items-center justify-between w-full"
      onClick={() => setCollapsePages(!collapsePages)}
    >
      <div className="flex items-center">
      <div class="flex-shrink-0">
      <img class=" h-12 w-8 ml-2 rounded-full" src={profile} alt="Spas" />
      </div>
        <span className="ml-2 ">Admin</span>
      </div>
      {collapsePages ? <FaChevronUp /> : <FaChevronDown />}
    </button>
    {collapsePages && (
      <div className="bg-white text-black py-2 rounded">
        <Link to="/login" className="block px-4 py-1 hover:bg-blue-300 ">Connexion</Link>
        <Link to="/Admregister" className="block px-4 py-1 hover:bg-blue-300 ">UserCreate</Link>
        <Link to="/Mdpf" className="block px-4 py-1 hover:bg-blue-300">Mot de passe oublié</Link>
      </div>
    )}
          </li>

        </ul>
      </div>

      {/* Bouton pour ouvrir le sidebar si fermé */}
      {!isOpen && (
        <div className="fixed top-0 left-0 m-2 text-blue-700 cursor-pointer z-50" onClick={toggleSidebar}>
          <FaBars size={24} />
        </div>
      )}
    </div>
  );
};

export default SidebarA;
