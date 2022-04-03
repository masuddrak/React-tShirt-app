import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const rigs=useContext(RingContext)
    return (
        <div>
           <h4>Special</h4>
           <h4>{rigs}</h4> 
        </div>
    );
};

export default Special;