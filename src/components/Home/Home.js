import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const [tshirt,setTshirt]=useTshirt()
    const [card,setCard]=useState([])
    const handelAddCard=(seletedItem)=>{
        const exsist=card.find(product=>product._id===seletedItem._id)
        if(!exsist){
            const newCard=[...card,seletedItem]
            if(newCard.length<=4){
                setCard(newCard)
            }else{
                alert('Only four items added')
            }
        }else{
            alert('added')
        }
        
    }
    const removeHandelCard=(removeItem)=>{
            const rest=card.filter(product=>product._id!==removeItem._id)
            setCard(rest)
    }
    // cpnditional randaring
    let command;
    if(card.length===0){
        command=<p>please add now</p>
    }
    else if(card.length>=1){
        command=<p>Add More ...</p>
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirt.map(sigleTShirt=><Tshirt
                        key={sigleTShirt._id}
                        sigleTShirt={sigleTShirt}
                        handelAddCard={handelAddCard}
                    ></Tshirt>)
                }
            </div>
            <div className="order-tshirt">
                <h1>added T-shirt</h1>
                {command}
                <Cart 
                    card={card}
                    removeHandelCard={removeHandelCard}
                ></Cart>
                {card.length===4 && <button>clear all</button>}
            </div>
        </div>
    );
};

export default Home;