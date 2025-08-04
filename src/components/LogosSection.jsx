import React from 'react';
import { useTranslation } from 'react-i18next';

const LogosSection = () => {
  const { t } = useTranslation();

  return (
    <section className="logos-section">
      <div className="logos-container">
        <div className="logo-card">
          <div className="logo-image-container">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753893962/A1_Profile_Pic_g3srpu.png" 
              alt="A1 Endurance Team Logo" 
              className="logo-image"
            />
          </div>
          <h2 className="logo-title">{t('logos.a1.title')}</h2>
          <p className="logo-description">{t('logos.a1.description')}</p>
        </div>
        
        <div className="logo-card">
          <div className="logo-image-container">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753893961/AL_Zallaq_Profile_Pic_mcoht9.png" 
              alt="Zallaq Riding School Logo" 
              className="logo-image"
            />
          </div>
          <h2 className="logo-title">{t('logos.zallaq.title')}</h2>
          <p className="logo-description">{t('logos.zallaq.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default LogosSection; 