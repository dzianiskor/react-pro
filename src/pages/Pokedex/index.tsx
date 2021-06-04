import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemonData, IPokemon } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsTypes, getPokemonsTypesLoading, getTypesAction } from '../../store/pokemon';

interface IQuery {
  name?: string;
}

const PokedexPage: React.FC = () => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);
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

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const handleNavigate = (id: string | number): void => {
    navigate(`${LinkEnum.POKEDEX}/${id}`);
  };

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
      <div>{isTypesLoading ? 'Loading...' : types?.map((item) => <div style={{textAlign:'center'}} key={item}>{item}</div>)}</div>
      <div className={s.cardWrapper}>
        {data?.pokemons.map((pokemon: IPokemon) => (
          <span key={pokemon.id} onClick={() => handleNavigate(pokemon.id)}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              attack={pokemon.stats.attack}
              defense={pokemon.stats.defense}
              types={pokemon.types}
              img={pokemon.img}
              key={pokemon.id}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
