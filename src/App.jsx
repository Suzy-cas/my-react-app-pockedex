import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"


const pokemonList = [
{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick = () => {
      setPokemonIndex(pokemonIndex + 1)
  }
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? (<button onClick={handleClick2}>Précédent</button>) : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : null}
        </div>
    </>
  )
}

export default App;
// {pokemonIndex > 0 ? (<button onClick={handleClick}>Précédent</button>) : null}
// {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick2}>Suivant</button> : null}

        // <button onClick={handleClick}>Précédent</button>  
        // <button onClick={handleClick2}>Suivant</button> 