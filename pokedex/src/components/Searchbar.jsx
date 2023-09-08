import React, { useState } from "react";

const Searchbar = () => {
  // UseState variables
  const [search, setSearch] = useState("ditto");

  // Handlers
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onButtonClickHandler = () => {
    console.log("pokemon: ", search);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon"
          type="text"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
