import PropTypes from "prop-types";
import React from "react";



function NavBar({ setPokemonIndex, pokemonList, pokemonIndex }) {

      return (
    <>
          <nav>
            {pokemonList.map((pokemon, index) =>
              <button 
                key={pokemon.name} onClick={() => setPokemonIndex(index) }
                >{pokemon.name}
                </button>
                )}
            {pokemonList[pokemonIndex].name === "pikachu" ? alert("pika pikachu !!") : ''}
        </nav>
    </>
  )

}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
}

export default NavBar;