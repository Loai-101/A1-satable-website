import React from 'react';
import { useTranslation } from 'react-i18next';
import { GiHorseshoe, GiHorseHead } from 'react-icons/gi';
import { FaWhatsapp, FaClipboardList, FaInstagram } from 'react-icons/fa';
import ZallaqHero from '../components/ZallaqHero';
import '../styles/ZallaqSchool.css';

const ZallaqSchool = () => {
  const { t, i18n } = useTranslation();

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.roadmap-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  };

  // Auto-switch slides based on language
  React.useEffect(() => {
    if (i18n.language === 'ar') {
      // Switch to first slide for Arabic
      showSlide(0);
      showEnduranceSlide(0);
      showSubscriptionSlide(0);
    } else {
      // Switch to second slide for English
      showSlide(1);
      showEnduranceSlide(1);
      showSubscriptionSlide(1);
    }
  }, [i18n.language]);

  const showEnduranceSlide = (index) => {
    const slides = document.querySelectorAll('.endurance-race-slide');
    const dots = document.querySelectorAll('.endurance-dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  };

  const showSubscriptionSlide = (index) => {
    const slides = document.querySelectorAll('.subscription-packages-slide');
    const dots = document.querySelectorAll('.subscription-dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  };

  return (
    <div className="zallaq-school-page">
      <ZallaqHero />

      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title">
            {i18n.language === 'ar' ? 'خريطة الطريق' : 'Roadmap'}
          </h2>
          
          {/* Full-width roadmap image slider */}
          <div className="roadmap-image">
            <div className="roadmap-slider">
              <div className="roadmap-slide active">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754288425/WhatsApp_Image_2025-08-04_at_00.35.11_4e80e8c8_km0dom.jpg"
                  alt="Roadmap 1"
                  className="roadmap-img"
                />
              </div>
              <div className="roadmap-slide">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754293070/WhatsApp_Image_2025-08-04_at_10.25.27_98e7bcf5_wyclp9.jpg"
                  alt="Roadmap 2"
                  className="roadmap-img"
                />
              </div>
            </div>
            <div className="roadmap-slider-dots">
              <span className="dot active" onClick={() => showSlide(0)}></span>
              <span className="dot" onClick={() => showSlide(1)}></span>
            </div>
          </div>
        </div>
      </section>

      {/* Endurance Race Section */}
      <section className="endurance-race-section">
        <div className="container">
          <h2 className="section-title">
            {i18n.language === 'ar' ? 'سباق القدرة' : 'Endurance Race'}
          </h2>
          
          {/* Full-width endurance race image slider */}
          <div className="endurance-race-image">
            <div className="endurance-race-slider">
              <div className="endurance-race-slide active">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754292897/IMG-20250804-WA0017_oszocq.jpg"
                  alt="Endurance Race 1"
                  className="endurance-race-img"
                />
              </div>
              <div className="endurance-race-slide">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754293358/1234_pys5qb.jpg"
                  alt="Endurance Race 2"
                  className="endurance-race-img"
                />
              </div>
            </div>
            <div className="endurance-race-slider-dots">
              <span className="endurance-dot active" onClick={() => showEnduranceSlide(0)}></span>
              <span className="endurance-dot" onClick={() => showEnduranceSlide(1)}></span>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Packages Section */}
      <section className="subscription-packages-section">
        <div className="container">
          <h2 className="section-title">
            {i18n.language === 'ar' ? 'باقات الاشتراك' : 'Subscription Packages'}
          </h2>
          
          {/* Full-width subscription packages image slider */}
          <div className="subscription-packages-image">
            <div className="subscription-packages-slider">
              <div className="subscription-packages-slide active">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754292897/IMG-20250804-WA0018_r9knmq.jpg"
                  alt="Subscription Packages 1"
                  className="subscription-packages-img"
                />
              </div>
              <div className="subscription-packages-slide">
                <img 
                  src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754293360/123_jvwcwj.jpg"
                  alt="Subscription Packages 2"
                  className="subscription-packages-img"
                />
              </div>
            </div>
            <div className="subscription-packages-slider-dots">
              <span className="subscription-dot active" onClick={() => showSubscriptionSlide(0)}></span>
              <span className="subscription-dot" onClick={() => showSubscriptionSlide(1)}></span>
            </div>
          </div>
        </div>
      </section>

      {/* Zallaq Riding Kit Section */}
      <section className="zallaq-riding-kit-section">
        <div className="container">
          <h2 className="section-title">
            {i18n.language === 'ar' ? 'لباس ركوب الزلاق' : 'Zallaq Riding Kit'}
          </h2>
          
          {/* 3D Carousel for Zallaq Riding Kit */}
          <div className="zallaq-riding-kit-carousel">
            <div className="carousel-container">
              <div className="carousel-track">
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754290076/WhatsApp_Image_2025-08-04_at_09.46.26_3baa8345_x8udu3.jpg" 
                    alt="Zallaq Riding Kit 1" 
                    className="carousel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754290076/WhatsApp_Image_2025-08-04_at_09.46.50_37265c43_xiyqyx.jpg" 
                    alt="Zallaq Riding Kit 2" 
                    className="carousel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754290076/WhatsApp_Image_2025-08-04_at_09.46.57_f0378d7c_sbt9dk.jpg" 
                    alt="Zallaq Riding Kit 3" 
                    className="carousel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754290076/WhatsApp_Image_2025-08-04_at_09.46.53_91d1173e_x4njak.jpg" 
                    alt="Zallaq Riding Kit 4" 
                    className="carousel-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="zallaq-container">
        
        <div className="zallaq-content">
          <p className="zallaq-description">
            {t('logos.zallaq.description')}
          </p>
          
          <div className="zallaq-services-grid">
            <div className="zallaq-service-card whatsapp-card">
              <FaWhatsapp className="zallaq-service-icon whatsapp-icon" />
              <h3 className="zallaq-service-title">Contact Us on WhatsApp</h3>
              <p className="zallaq-service-description">Click to chat with us directly</p>
              <a 
                href="https://wa.me/97334444729" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <button className="whatsapp-button">
                  Chat on WhatsApp
                </button>
              </a>
            </div>
            
            <div className="zallaq-service-card registration-card">
              <FaClipboardList className="zallaq-service-icon registration-icon" />
              <h3 className="zallaq-service-title">Registration Form</h3>
              <p className="zallaq-service-description">Fill out our registration form to join our programs</p>
              <a 
                href="https://docs.google.com/forms/d/1wh-OQshEhNRjtzEiuwYOksA0FvUtQqfaJDx5rQn8iao/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="registration-link"
              >
                <button className="registration-button">
                  Open Registration Form
                </button>
              </a>
            </div>
            
            <div className="zallaq-service-card instagram-card">
              <FaInstagram className="zallaq-service-icon instagram-icon" />
              <h3 className="zallaq-service-title">Follow Us on Instagram</h3>
              <p className="zallaq-service-description">Stay updated with our latest photos and videos</p>
              <a 
                href="https://www.instagram.com/zallaq_riding_school?igsh=MW42MGhwYzNvb3UwZQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <button className="instagram-button">
                  Follow on Instagram
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZallaqSchool; 