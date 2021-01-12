import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Pokemon = ({pkm}) => {

    const [pokemon, setPokemon] = useState({
        name: "",
        sprites: {
            front_default: ""
        }
    })

    useEffect(() => {
        axios.get(pkm.url)
                .then(res => {
                    console.log(res);
                    setPokemon(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
    }, [pkm]);

    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} />
        </div>
    )
}

export default Pokemon;