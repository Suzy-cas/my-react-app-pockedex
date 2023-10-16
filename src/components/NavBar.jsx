import PropTypes from "prop-types";
import React from "react";

function NavBar({ setPokemonIndex, pokemonList }) {
      return (
    <>
          <nav>
            {pokemonList.map((pokemon, index) =>
              <button 
                key={pokemon.name} onClick={() => setPokemonIndex(index)}
                >{pokemon.name}
                </button>
                )}
            
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