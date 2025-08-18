import { Banners } from '@/widgets/Banners';
import Header from '@/widgets/Header/Header';
import { Movement } from '@/widgets/Movment';
import React from 'react';
import { NewsPages } from './NewsPages/NewsPages';
import { EventsPages } from './EventsPages/EventsPages';
import BrandsPages from './BrandsPages/BrandsPages';

const MainPage = () => {
  return (
    <div>
      <Banners/>
      <Movement />
      <EventsPages/>
      <NewsPages/>
      <BrandsPages/>
    </div>
  );
};

export default MainPage;