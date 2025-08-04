import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Logos above the title */}
        <div className="hero-logos">
          <Link to="/a1" className="hero-logo-link">
            <div className="hero-logo-item">
              <img
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753893962/A1_Profile_Pic_g3srpu.png"
                alt="A1 Endurance Team Logo"
                className="hero-logo"
              />
              <span className="hero-logo-text">A1 Endurance Team</span>
            </div>
          </Link>
          <Link to="/zallaq-school" className="hero-logo-link">
            <div className="hero-logo-item">
              <img
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753893961/AL_Zallaq_Profile_Pic_mcoht9.png"
                alt="Zallaq Riding School Logo"
                className="hero-logo"
              />
              <span className="hero-logo-text">Zallaq Riding School</span>
            </div>
          </Link>
        </div>
        
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        
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

export default Hero; 