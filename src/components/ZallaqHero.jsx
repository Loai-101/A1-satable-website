import React from 'react';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const ZallaqHero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Zallaq Logo above the title */}
        <div className="hero-logo">
          <OptimizedImage
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753893961/AL_Zallaq_Profile_Pic_mcoht9.png"
            alt="Zallaq Riding School Logo"
            className="hero-logo-img"
          />
        </div>
        
        <h1 className="hero-title">{t('logos.zallaq.title')}</h1>
        <p className="hero-subtitle">{t('logos.zallaq.description')}</p>
        
        {/* Scroll down indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">
            {i18n.language === 'ar' ? 'مرر للأسفل' : 'Scroll down'}
          </div>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default ZallaqHero; 