import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Username() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List out  the Pokiman Character names</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>  
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Username />, document.getElementById('root'));

