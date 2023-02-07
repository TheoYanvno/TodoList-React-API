import React from 'react';
import './card.css';

const Card = (props) => {
    console.log(props);
    const character = props.character;

    return (
        <div className="card-container">
            <h2 className='card-title'>{character.name}</h2>
            <img src={character.image} className='card-image'></img>
            <p className='card-text'></p>
        </div>
    );
};

export default Card;