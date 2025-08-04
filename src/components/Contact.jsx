import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        
        <div className="contact-info">
          <div className="contact-item">
            <MdLocationOn style={{ fontSize: '2.5rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.address')}</h3>
            <p>{t('contact.addressValue')}</p>
          </div>
          
          <div className="contact-item">
            <MdPhone style={{ fontSize: '2.5rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.phone')}</h3>
            <p>{t('contact.phoneValue')}</p>
          </div>
          
          <div className="contact-item">
            <MdEmail style={{ fontSize: '2.5rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.email')}</h3>
            <p>{t('contact.emailValue')}</p>
          </div>
          
          <div className="contact-item">
            <MdAccessTime style={{ fontSize: '2.5rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.hours')}</h3>
            <p>{t('contact.hoursValue')}</p>
          </div>
        </div>

        {/* New Contact Options */}
        <div className="contact-options">
          <div className="contact-option-card">
            <FaWhatsapp style={{ fontSize: '2.5rem', color: '#25D366', marginBottom: '1rem' }} />
            <h3>{t('contact.whatsapp.title')}</h3>
            <p>{t('contact.whatsapp.subtitle')}</p>
            <a 
              href="https://wa.me/97334444729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-option-button whatsapp-button"
            >
              {t('contact.whatsapp.button')}
            </a>
          </div>

          <div className="contact-option-card">
            <FaFileAlt style={{ fontSize: '2.5rem', color: '#8B5C2C', marginBottom: '1rem' }} />
            <h3>{t('contact.registration.title')}</h3>
            <p>{t('contact.registration.subtitle')}</p>
            <a 
              href="https://forms.gle/your-registration-form-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-option-button registration-button"
            >
              {t('contact.registration.button')}
            </a>
          </div>

          <div className="contact-option-card">
            <FaInstagram style={{ fontSize: '2.5rem', color: '#E4405F', marginBottom: '1rem' }} />
            <h3>{t('contact.instagram.title')}</h3>
            <p>{t('contact.instagram.subtitle')}</p>
            <a 
              href="https://instagram.com/your-instagram-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-option-button instagram-button"
            >
              {t('contact.instagram.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 