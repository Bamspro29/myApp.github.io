import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Symbol from './image/Symbol (11).png';
import  SP  from './image/SP (1).png';
import SU from './image/SU (3).png';




const Dashboardw = () => {
  return (
    <div className="container-fluid">
        <div className='mt-3 ml-3'>
            <h1 className='text-2xl font-bold mb-2'> Bienvenue sur RED PRODUCT</h1>
            <p>Le lorem ipsum est, en imprimerie</p>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            {/* colone1 */}
            <div className='border bg-white ml-3 col-span-1  p-7  rouded-1 text-lg flex item-center '>
                <div>
                <img src={Symbol} alt="Symbol" className='bg-fuchsia-600 rounded-full border border-solide mr-3 p-3'/>

                    </div>
                <div>
                    <h6 className='text-lg flex items-center '> <strong>125</strong> <p className='ml-2 '>formulaire</p></h6>
                    <p>Je ne sais pas quoi mettre</p>
                </div>
            </div>
            {/* colone2 */}
            <div className='border bg-white ml-3 col-span-1  p-8  rouded text-lg flex item-center '>
                <div>
                <img src={SP} alt="Symbol" className='bg-green-600 p-8 rounded-full border border-solide mr-3 p-3'/>

                    </div>
                <div>
                    <h6 className='text-lg flex items-center '> <strong>40</strong> <p className='ml-2 '>messages</p></h6>
                    <p>Je ne sais pas quoi mettre</p>
                </div>
            </div>
            {/* colone3 */}
            <div className='border bg-white ml-3 col-span-1  p-8  rouded text-lg flex item-center '>
                <div>
                <img src={SU} alt="Symbol" className='bg-yellow-500 p-8 rounded-full border border-solide mr-3 p-3'/>

                    </div>
                <div>
                    <h6 className='text-lg flex items-center '> <strong>600</strong> <p className='ml-2 '>Utilusateurs</p></h6>
                    <p>Je ne sais pas quoi mettre</p>
                </div>
            </div>
            {/* colone4 */}
            <div className='border bg-white ml-3 col-span-1  p-8  rouded text-lg flex item-center '>
                <div>
                <img src={Symbol} alt="Symbol" className='bg-red-500 p-8 rounded-full border border-solide mr-3 p-3'/>

                    </div>
                <div>
                    <h6 className='text-lg flex items-center '> <strong>25</strong> <p className='ml-2 '>E-mails</p></h6>
                    <p>Je ne sais pas quoi mettre</p>
                </div>
            </div>
            {/* colone5 */}
            <div className='border bg-white ml-3 col-span-1  p-8  rouded text-lg flex item-center '>
                <div>
                <img src={SP} alt="Symbol" className='bg-violet-700 p-8 rounded-full border border-solide mr-3 p-3'/>

                    </div>
                <div>
                    <h6 className='text-lg flex items-center '> <strong>40</strong> <p className='ml-2 '>Hotels</p></h6>
                    <p>Je ne sais pas quoi mettre</p>
                </div>
            </div>
            {/* colone6 */}
            <div className='border bg-white ml-3 col-span-1  p-8  rouded-2 text-lg flex item-center '>
                <div>
                <img src={SU} alt="Symbol" className='bg-indigo-800 p-8 rounded-full border border-solide mr-3 p-3'/>

                    </div>
                <div>
                    <h6 className='text-lg flex items-center '> <strong>2</strong> <p className='ml-2 '>Entites</p></h6>
                    <p>Je ne sais pas quoi mettre</p>
                </div>
            </div>

        </div>

    </div>
  );
};

export default Dashboardw;