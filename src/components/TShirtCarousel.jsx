import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/TShirtCarousel.css';

const TShirtCarousel = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let rotation = 0;
    const rotateSpeed = 0.2; // degrees per frame (slower rotation)

    const animate = () => {
      rotation += rotateSpeed;
      carousel.style.transform = `rotateY(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="tshirt-carousel-container">
      <h2 className="tshirt-carousel-title">
        {lang === 'ar' ? 'لباس فارس القدرة' : 'A1 Endurance Riding Kit'}
      </h2>
      <div className="tshirt-carousel-perspective">
        <div ref={carouselRef} className="tshirt-carousel-rotator">
          {/* Front Image */}
          <div className="tshirt-carousel-slide tshirt-carousel-slide-front">
            <img
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219887/WhatsApp_Image_2025-08-03_at_14.17.13_635d83f1_nxeodi.jpg"
              alt="A1 Uniform Front"
              className="tshirt-carousel-image"
            />
          </div>

          {/* Back Image */}
          <div className="tshirt-carousel-slide tshirt-carousel-slide-back">
            <img
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219913/WhatsApp_Image_2025-08-03_at_14.17.15_f3bdb53a_suq1wm.jpg"
              alt="A1 Uniform Back"
              className="tshirt-carousel-image"
            />
          </div>

          {/* Left Side Image */}
          <div className="tshirt-carousel-slide tshirt-carousel-slide-left">
            <img
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219940/WhatsApp_Image_2025-08-03_at_14.17.15_2345a891_zjoyu2.jpg"
              alt="A1 Uniform Side"
              className="tshirt-carousel-image"
            />
          </div>

          {/* Right Side Image */}
          <div className="tshirt-carousel-slide tshirt-carousel-slide-right">
            <img
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219966/WhatsApp_Image_2025-08-03_at_14.17.15_2b539dcc_brmc4s.jpg"
              alt="A1 Uniform Side"
              className="tshirt-carousel-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtCarousel; 