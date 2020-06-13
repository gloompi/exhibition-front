import React, { FC } from 'react';
import MainScreen from '../@common/MainScreen';
import Search from './Search';
import Events from './Events';
import About from './AboutProject';

const image = require('../../assets/images/torrento.jpg');

const Home: FC = () => (
  <>
    <MainScreen title={'Tantora'} bgSrc={image} />
    <Search />
    <Events />
    <About />
  </>
);

export default Home;
