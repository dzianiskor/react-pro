import React from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.title}>
        800 <b>Pokemons</b> for you to choose your favorite
      </div>
      <div className={s.searchFieldWrapper}>
        <input className={s.searchField} type="text" placeholder="Encuentra tu pokémon..." />
      </div>
      <div className={s.buttonsWrapper}>
        <button className={s.buttonExpand} type="button">
          Tipo
        </button>
        <button className={s.buttonExpand} type="button">
          Ataque
        </button>
        <button className={s.buttonExpand} type="button">
          Experiencia
        </button>
      </div>
      <div className={s.cardWrapper}>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
};

export default PokedexPage;
