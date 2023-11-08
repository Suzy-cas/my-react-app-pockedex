import PropTypes from "prop-types";
import React from "react";
function NavBar({ pokemonIndex, handleClick, handleClick2, pokemonList }) {

  
      return (
    <>
      <div>
            { pokemonIndex   > 0 ? (<button onClick={handleClick2}>Précédent</button>) : null}
            { pokemonIndex  < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : null}
        </div>
    </>
  )

}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    handleClick: PropTypes.func.isRequired,
    handleClick2: PropTypes.func.isRequired,
}

export default NavBar;