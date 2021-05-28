import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import s from './PokemonCard.module.scss';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

interface IPokemonCard {
  id: number;
  name: string;
  attack: number;
  defense: number;
  types: string[];
  img: string;
}

const PokemonCard: React.FC<IPokemonCard> = ({ id, name, attack, defense, types, img }) => {
  const handleNavigate = (): void => {
    navigate(`${LinkEnum.POKEDEX}/${id}`);
  }

  return (
    <div className={s.root} onClick={handleNavigate}>
      <div className={s.infoWrap}>
        <Heading size="23px" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type, index) => (
            <span key={type + name} className={cn(s.label, s[type as keyof typeof s])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
