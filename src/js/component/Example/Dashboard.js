import React, {useEffect, useState} from 'react';
import Card from './Card';
import './Dashboard.css';

const Dashboard = () => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/').then(res => {
            return res.json()
        }).then(data => {
            setCharacters(data.results)
            })
    },[])

    return (
        <div className='cards-container'>
            {characters.length ? characters.map(character => {
                return (
                    <Card character = {character}/>
                )
            })
            :
            null}
        </div>
    )
}

export default Dashboard;