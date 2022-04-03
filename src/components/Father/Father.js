import React from 'react';
import Borther from '../Borther/Borther';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h5>Father</h5>
            <Sister></Sister>
            <Borther></Borther>
        </div>
    );
};

export default Father;