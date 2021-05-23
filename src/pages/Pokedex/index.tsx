import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import req from '../../utils/request';

interface IPokemon {
  name_clean?: string;
  abilities?: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed?: number;
  };
  types: string[];
  img: string;
  name: string;
  base_experience?: number;
  height?: number;
  id: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
}

interface IPokemonData {
  total: string;
  pokemons: IPokemon[];
}

const usePokemons = () => {
  const [data, setData] = useState<IPokemonData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

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
        {data?.pokemons.map((pokemon) => (
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
