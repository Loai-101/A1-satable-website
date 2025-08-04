import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GiHorseHead } from 'react-icons/gi';
import A1Hero from '../components/A1Hero';
import '../styles/A1.css';

const A1 = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

       // Team riders data
     const riders = [
       {
         id: 1,
         name: lang === 'ar' ? 'علي حسين' : 'Ali Hussain',
         role: lang === 'ar' ? 'مالك وقائد الفريق' : 'Owner and Team Leader',
         quote: lang === 'ar'
           ? 'قائد الفريق ومُلهم الروح الرياضية والمسؤولية في كل سباق.'
           : 'Leading the team with passion, discipline, and a spirit of true endurance.',
         image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1754213108/WhatsApp_Image_2025-08-03_at_12.24.52_5ed72906_qpp32x.jpg'
       },
       {
         id: 2,
         name: lang === 'ar' ? 'راغب محمد' : 'Ragheb Mohammed',
         role: lang === 'ar' ? 'عضو فريق A1 للقدرة' : 'Endurance Rider',
         quote: lang === 'ar'
           ? 'الخيل تعلمك أن القوة ليست في السرعة، بل في الصبر والثبات حتى النهاية.'
           : 'Horses teach you that strength lies not in speed, but in patience and endurance to the finish.',
         image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1754217660/WhatsApp_Image_2025-08-03_at_13.40.42_a9d0ff17_wmg15w.jpg'
       },
       {
         id: 3,
         name: lang === 'ar' ? 'عبدالله نايف' : 'Abdullah Nayef',
         role: lang === 'ar' ? 'عضو فريق A1 للقدرة' : 'Endurance Rider',
         quote: lang === 'ar'
           ? 'في سباقات القدرة، لا يفوز الأقوى، بل من يفهم خيله ويحافظ عليه حتى آخر خطوة.'
           : 'In endurance races, it\'s not the strongest who wins, but the one who understands and cares for their horse until the last step.',
         image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1754217701/WhatsApp_Image_2025-08-03_at_13.39.55_5ed742dc_dwznau.jpg'
       },
       {
         id: 4,
         name: lang === 'ar' ? 'محمد عراك' : 'Mohammed Arak',
         role: lang === 'ar' ? 'عضو فريق A1 للقدرة' : 'Endurance Rider',
         quote: lang === 'ar'
           ? 'الخيول لا تركض بأرجلها فقط، بل بقلوبها، ومن يركبها بحب، يصل بها أبعد مما يتخيل.'
           : 'Horses don\'t run with their legs alone — they run with their hearts. Ride with love, and you\'ll go further than you imagined.',
         image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1754217434/WhatsApp_Image_2025-08-03_at_13.36.05_104cd62a_fel0bc.jpg'
       },
       {
         id: 5,
         name: lang === 'ar' ? 'ناصر محمد' : 'Nasser Mohammed',
         role: lang === 'ar' ? 'عضو فريق A1 للقدرة' : 'Endurance Rider',
         quote: lang === 'ar'
           ? 'القدرة ليست سباقًا ضد الوقت، بل شراكة بين الفارس وخيله لاختبار الصبر والوفاء.'
           : 'Endurance is not a race against time — it\'s a partnership between rider and horse to test loyalty and patience.',
         image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1754217747/WhatsApp_Image_2025-08-03_at_13.39.01_d68faf3b_joc5oa.jpg'
       },
       {
         id: 6,
         name: lang === 'ar' ? 'جاسم محمد' : 'Jassim Mohammed',
         role: lang === 'ar' ? 'عضو فريق A1 للقدرة' : 'Endurance Rider',
         quote: lang === 'ar'
           ? 'حب الخيل يبدأ من السرج، لكنه لا ينتهي إلا عند كل نبضة تعب فيها معك في الطريق.'
           : 'Love for the horse begins in the saddle — but it never ends, not even after every heartbeat shared on the trail.',
         image: 'https://res.cloudinary.com/dvybb2xnc/image/upload/v1754217285/WhatsApp_Image_2025-08-03_at_13.33.10_897f4c56_fyko4q.jpg'
       }
     ];



  return (
    <div className="a1-team-page">
      <A1Hero />

      {/* Team Members Section */}
      <div className="team-section">
        <div className="container">
          <h2 className="section-title">
            {lang === 'ar' ? 'أعضاء الفريق' : 'Our Team Riders'}
          </h2>
          
          <div className="team-grid">
            {riders.map((rider) => (
              <div key={rider.id} className="team-card">
                <div className="card-image">
                  <img
                    src={rider.image}
                    alt={rider.name}
                    className="rider-image"
                  />
                </div>
                                   <div className="card-content">
                     <h3 className="rider-name">{rider.name}</h3>
                     <p className="rider-role">{rider.role}</p>
                     {rider.quote && (
                       <div className="rider-quote">
                         <p className="quote-text">"{rider.quote}"</p>
                       </div>
                     )}
                   </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* A1 Endurance Riding Kit Section */}
      <section className="a1-riding-kit-section">
        <div className="container">
          <h2 className="section-title">
            {i18n.language === 'ar' ? 'لباس فارس القدرة' : 'A1 Endurance Riding Kit'}
          </h2>
          
          {/* 3D Carousel for A1 Riding Kit */}
          <div className="a1-riding-kit-carousel">
            <div className="carousel-container">
              <div className="carousel-track">
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219887/WhatsApp_Image_2025-08-03_at_14.17.13_635d83f1_nxeodi.jpg" 
                    alt="A1 Riding Kit 1" 
                    className="carousel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219940/WhatsApp_Image_2025-08-03_at_14.17.15_2345a891_zjoyu2.jpg" 
                    alt="A1 Riding Kit 2" 
                    className="carousel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219966/WhatsApp_Image_2025-08-03_at_14.17.15_2b539dcc_brmc4s.jpg" 
                    alt="A1 Riding Kit 3" 
                    className="carousel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1754219991/WhatsApp_Image_2025-08-03_at_14.17.15_b8eab336_g53x4a.jpg" 
                    alt="A1 Riding Kit 4" 
                    className="carousel-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default A1; 