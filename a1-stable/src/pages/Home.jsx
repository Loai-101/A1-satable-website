import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeHero from '../components/HomeHero';
import HorseQuoteSection from '../components/HorseQuoteSection';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <HomeHero />
      <HorseQuoteSection lang={i18n.language} />
      <ImageSlider />
    </div>
  );
};

export default Home; 