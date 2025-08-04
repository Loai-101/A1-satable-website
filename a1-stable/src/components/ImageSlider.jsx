import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const ImageSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only the 7 actual horse riding images provided by the user
  const slides = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753896567/WhatsApp_Image_2025-07-30_at_20.11.59_1703728c_cz57fo.jpg',
      title: 'Endurance Training',
      description: 'Professional endurance training sessions at A1 Stable'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753895682/WhatsApp_Image_2025-07-30_at_20.11.57_fb0b1e2d_p7kjd3.jpg',
      title: 'Horse Care & Maintenance',
      description: 'Expert horse care and maintenance services'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753896198/WhatsApp_Image_2025-07-30_at_20.12.13_b3c8d5d6_wl790r.jpg',
      title: 'Riding Lessons',
      description: 'Comprehensive riding lessons for all skill levels'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753896567/WhatsApp_Image_2025-07-30_at_20.12.08_00d2bd48_pqifxt.jpg',
      title: 'Competition Preparation',
      description: 'Preparing horses and riders for competitions'
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753896568/WhatsApp_Image_2025-07-30_at_20.12.07_96209649_d6einu.jpg',
      title: 'Stable Facilities',
      description: 'State-of-the-art stable facilities and equipment'
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753896567/WhatsApp_Image_2025-07-30_at_20.12.09_ddf5f25c_bhl6cz.jpg',
      title: 'Team Building',
      description: 'Building strong rider-horse partnerships'
    },
    {
      id: 7,
      image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1753896567/WhatsApp_Image_2025-07-30_at_20.11.57_20241c57_qemdfo.jpg',
      title: 'Trail Riding',
      description: 'Scenic trail riding experiences'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="slider">
          <div 
            className="slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="slider-slide">
                <div className="slider-caption">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="slider-button prev" 
            onClick={prevSlide}
            aria-label={t('slider.previous')}
          >
            ‹
          </button>
          <button 
            className="slider-button next" 
            onClick={nextSlide}
            aria-label={t('slider.next')}
          >
            ›
          </button>
        </div>


      </div>
    </section>
  );
};

export default ImageSlider; 