import React from "react";

const Navbar = () => {
  const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
      <nav>
        <img alt="Pokeapi-logo" src={logoimg} className="navbar-img" />
      </nav>
  );
};

export default Navbar;