import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        
        <div className="contact-info">
          <div className="contact-item">
            <MdLocationOn style={{ fontSize: '2rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.address')}</h3>
            <p>{t('contact.addressValue')}</p>
          </div>
          
          <div className="contact-item">
            <MdPhone style={{ fontSize: '2rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.phone')}</h3>
            <p>{t('contact.phoneValue')}</p>
          </div>
          
          <div className="contact-item">
            <MdEmail style={{ fontSize: '2rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.email')}</h3>
            <p>{t('contact.emailValue')}</p>
          </div>
          
          <div className="contact-item">
            <MdAccessTime style={{ fontSize: '2rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.hours')}</h3>
            <p>{t('contact.hoursValue')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 