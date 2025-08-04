import React from 'react';

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
      style={{
        background: "#F8F1EA",
        padding: "80px 20px",
        color: "#333",
        position: "relative",
        direction: validLang === "ar" ? "rtl" : "ltr",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexDirection: validLang === "ar" ? "row-reverse" : "row",
        }}
      >
        {/* Square Image on Left */}
        <div
          style={{
            flex: "0 0 400px",
            height: "400px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(139, 92, 44, 0.2)",
            border: "3px solid #8B5C2C",
          }}
        >
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
        <div
          style={{
            flex: "1",
            padding: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(139, 92, 44, 0.1)",
            border: "2px solid rgba(139, 92, 44, 0.1)",
          }}
        >
          <p 
            style={{ 
              fontSize: "1.2rem", 
              lineHeight: "1.8",
              marginBottom: "25px",
              color: "#333",
              fontFamily: "Georgia, serif",
            }}
          >
            {current.text}
          </p>
          <h3 
            style={{ 
              marginTop: "20px", 
              fontWeight: "bold",
              color: "#8B5C2C",
              fontSize: "1.5rem",
              fontFamily: "Georgia, serif",
            }}
          >
            {current.name}
          </h3>
          <p 
            style={{
              color: "#8B0000",
              fontSize: "1.1rem",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {current.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HorseQuoteSection; 