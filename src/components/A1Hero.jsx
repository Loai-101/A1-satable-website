import React from 'react';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const A1Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* A1 Logo above the title */}
        <div className="hero-logo">
                     <OptimizedImage
             src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto,w_300,h_200/v1753893962/A1_Profile_Pic_g3srpu.png"
             alt={i18n.language === 'ar' ? 'شعار A1' : 'A1 Logo'}
             loading="eager"
           />
        </div>
        
        <h1 className="hero-title">
          {i18n.language === 'ar' ? 'فريق A1 للقدرة' : 'A1 Endurance Team'}
        </h1>
        <p className="hero-subtitle">
          {i18n.language === 'ar' 
            ? 'فريق محترف متخصص في سباقات القدرة والتدريب المتقدم'
            : 'Professional team specializing in endurance racing and advanced training'
          }
        </p>
        
        {/* Scroll down indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">
            {i18n.language === 'ar' ? 'مرر للأسفل لاستكشاف الفريق' : 'Scroll down to explore the team'}
          </div>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default A1Hero; 