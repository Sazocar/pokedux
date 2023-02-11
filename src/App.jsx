import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";

const App = () => {
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className="PokeLogo" src={logo} alt="" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      {loading ? (
        <Spin spinning tip="Loading..." size="large" />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default App;
