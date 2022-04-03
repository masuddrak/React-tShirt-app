import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext=createContext('Gold Ring')
const Grandpa = () => {
    return (
       <RingContext.Provider value='Gold'>
           <div className='gradpa'>
            <h2>This Is GrandPA</h2>
            <button>added house</button>
            <Father></Father>
            <Uncle></Uncle>
            <Anty></Anty>
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;