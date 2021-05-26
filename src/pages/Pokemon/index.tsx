import React from 'react';
import useData from '../../hook/getData';
import { IPokemon } from '../../interface/pokemons';
import PokemonCard from '../../components/PokemonCard';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<IPokemon>('getPokemonById', {}, [], id.toString());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {data && (
        <PokemonCard
          id={data.id}
          name={data.name}
          attack={data.stats.attack}
          defense={data.stats.defense}
          types={data.types}
          img={data.img}
          key={data.id}
        />
      )}
    </div>
  );
};

export default Pokemon;
