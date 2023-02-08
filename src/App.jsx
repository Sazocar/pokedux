import React, { useEffect, useState } from "react";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { getPokemons } from './api'
import logo from './statics/logo.svg'
import './App.css';

const App = () => {

  const [pokemons, setPokemons] = useState(['']);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
