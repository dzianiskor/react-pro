import React from 'react';
import Header from '../../components/Header';

import s from './Home.module.scss';
import Button, { SizeButton } from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">
            <b>Find</b> all yout favorite <b>Pokemon</b>
          </Heading>
          <Heading size="16px">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button
            onClick={() => console.log('Click')}
            size={SizeButton.small}
            color="red"
            backgroundColor="white"
            fullWidth="full">
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
