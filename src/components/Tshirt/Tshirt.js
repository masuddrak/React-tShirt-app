import React from 'react';
import './Tshirt.css'
const Tshirt = ({handelAddCard,sigleTShirt}) => {
    // console.log(props.sigleTShirt)
    const {name,picture,price}=sigleTShirt
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handelAddCard(sigleTShirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;