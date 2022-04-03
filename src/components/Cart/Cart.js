import React from 'react';
import CardInfo from '../CradInfo/CardInfo';

const Cart = ({card,removeHandelCard}) => {
    return (
        <div>
            {
                card.map(product=><CardInfo
                    // key={product._id}
                    product={product}
                    removeHandelCard={removeHandelCard}
                    ></CardInfo>)
            }
        </div>
    );
};

export default Cart;