import React, { useState } from "react";
import { searchPokemon } from "../Utils/api";

const Searchbar = () => {
  // UseState variables
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();

  // Handlers
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onButtonClickHandler = () => {
    onSearchHandler(search);
    console.log("pokemon: ", search);
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon"
          type="text"
          onChange={onChangeHandler}
        />
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      </div>
      {(pokemon) ? (
        <div>
          <img className="poke-gif" src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
          <div>Nome: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
          <div>Altura: {pokemon.height}</div>
          <div>Tipo: {pokemon.types[0].type.name}</div>
          <div>Indice: {pokemon.id}</div>
        </div>)
        : null}
    </div>
  );
};

export default Searchbar;
