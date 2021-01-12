import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {

  const [pokemon, setPokemon] = useState([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    }
  ])

  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    // getPokemon();
    getPokemonAxios();
  }, []);

  const getPokemon = () => {
     fetch("https://pokeapi.co/api/v2/pokemon/1")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
        }).catch(err=>{
            console.log(err);
      });
  }


  const getPokemonAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(res => {
            console.log(res.data.results);
            setPrev(res.data.previous);
            setNext(res.data.next);
            setPokemon(res.data.results);
          })
          .catch(err => {
            console.log(err);
          })
  }

  const getNextPokemon = () => {
    axios.get(next)
          .then(res => {
            console.log(res.data);
            setPrev(res.data.previous);
            setNext(res.data.next);
            setPokemon(res.data.results);
            console.log(pokemon);
          })
          .catch(err => {
            console.log(err);
          })
  }



  return (
    <div className="App">
      <button>Prev</button> | <button onClick={getNextPokemon}>Next</button>
      {
        pokemon.map((pkm, idx) =>
            <Pokemon pkm={pkm} key={idx} />
        )
      }
    </div>
  );
}

export default App;
