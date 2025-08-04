import React from 'react';
import '../styles/HorseQuoteSection.css';

const HorseQuoteSection = ({ lang = 'en' }) => {
  const backgroundImage =
    "https://res.cloudinary.com/dvybb2xnc/image/upload/v1754213108/WhatsApp_Image_2025-08-03_at_12.24.52_5ed72906_qpp32x.jpg";

  const quote = {
    en: {
      text: `Horses are not just a sport — they are a way of life. My passion for horses began in childhood, and every day I grow more certain that they teach us patience, discipline, and respect. Teaching horseback riding to children and adults not only develops physical skills, but also shapes character, instills confidence, and builds responsibility. A child who learns to work with horses learns to lead with kindness and to communicate without words.`,
      name: "Ali Hussain",
      title: "Owner of A1 Stable & Zallaq Riding School",
    },
    ar: {
      text: `الخيل ليست مجرد رياضة، بل أسلوب حياة. عشقي للخيل بدأ منذ الصغر، وكل يوم أزداد يقينًا بأنها تعلمنا الصبر، والانضباط، والاحترام. تعليم الأطفال والكبار ركوب الخيل لا يطوّر فقط مهاراتهم الجسدية، بل يبني شخصيتهم، ويغرس فيهم الثقة والمسؤولية. الطفل الذي يتعامل مع الخيل يتعلم كيف يكون قائداً برحمة، ويتعلم قوة التواصل الصامت.`,
      name: "علي حسين",
      title: "مالك أسطبل A1 ومدرسة الزلاق لركوب الخيل",
    },
  };

  // Ensure lang is valid, fallback to English
  const validLang = (lang === 'en' || lang === 'ar') ? lang : 'en';
  const current = quote[validLang];

  return (
    <section
      className="horse-quote-section"
      style={{
        direction: validLang === "ar" ? "rtl" : "ltr",
      }}
    >
      <div
        className="horse-quote-container"
        style={{
          flexDirection: validLang === "ar" ? "row-reverse" : "row",
        }}
      >
        {/* Square Image on Left */}
        <div className="horse-quote-image">
          <img
            src={backgroundImage}
            alt="Ali Hussain with Horse"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
            }}
          />
        </div>

        {/* Text Content on Right */}
        <div className="horse-quote-content">
          <p className="horse-quote-text">
            {current.text}
          </p>
          <h3 className="horse-quote-name">
            {current.name}
          </h3>
          <p className="horse-quote-title">
            {current.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HorseQuoteSection; 