import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import logo from "./statics/logo.svg";
import "./App.css";

const App = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const filteredPokemons = useSelector((state) => state.data.searchedPokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className="PokeLogo" src={logo} alt="" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher pokemons={pokemons}/>
      </Col>

      {/* {loading ? (
        <Spin spinning tip="Loading..." size="large" />
      ) : (
        <PokemonList pokemons={pokemons} />
      )} */}

    <>
    {filteredPokemons.map((pokemon) => <h1>{pokemon.name}</h1>)}</>

    </div>
  );
};

export default App;

