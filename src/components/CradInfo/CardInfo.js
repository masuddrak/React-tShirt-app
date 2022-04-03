import React from 'react';

const CardInfo = ({product,removeHandelCard}) => {
    return (
        <div>
            <h4>{product.name}</h4>
            <button onClick={()=>removeHandelCard(product)}>Delet</button>
        </div>
    );
};

export default CardInfo;