import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import {IPokemonData, IPokemon} from "../../interface/pokemons";
import useDebounce from "../../hook/useDebounce";

interface IQuery {
    name?: string
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };
  const debouncedValue = useDebounce(searchValue, 500);
  const { data, isLoading, isError } = useData<IPokemonData>('getPokemons', query, [debouncedValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.title}>
        {data?.total} <b>Pokemons</b> for you to choose your favorite
      </div>
      <div className={s.searchFieldWrapper}>
        <input
          className={s.searchField}
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Encuentra tu pokémon..."
        />
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
        {data?.pokemons.map((pokemon: IPokemon) => (
          <PokemonCard
            name={pokemon.name}
            attack={pokemon.stats.attack}
            defense={pokemon.stats.defense}
            types={pokemon.types}
            img={pokemon.img}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
