import React from 'react';
import '../styles/ZallaqRidingSchool.css';

const ZallaqRidingSchool = () => {
  return (
    <div className="zallaq-riding-school">
      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title">
            Roadmap
          </h2>
          
          {/* Full-width placeholder image */}
          <div className="roadmap-image">
            <div className="placeholder-content">
              <div className="placeholder-icon">🛣️</div>
              <p className="placeholder-text">Roadmap Image Placeholder</p>
              <p className="placeholder-subtext">Full-width image will be added here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Endurance Preparation Section */}
      <section className="endurance-section">
        <div className="container">
          <h2 className="section-title bilingual">
            <span className="arabic">الإعداد لسباقات القدرة</span>
            <span className="english">Endurance Preparation</span>
          </h2>
          
          {/* Full-width horizontal placeholder image */}
          <div className="endurance-image">
            <div className="placeholder-content">
              <div className="placeholder-icon">🏇</div>
              <p className="placeholder-text">Endurance Preparation Image</p>
              <p className="placeholder-subtext">Horizontal image will be added here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title bilingual">
            <span className="arabic">باقات الاشتراك</span>
            <span className="english">Subscription Packages</span>
          </h2>
          
          {/* Packages Grid */}
          <div className="packages-grid">
            {/* Package 1 */}
            <div className="package-card">
              <div className="package-content">
                <h3 className="package-title">Package 1</h3>
                
                {/* Arabic Image */}
                <div className="package-image arabic-image">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">Arabic Image</p>
                  </div>
                </div>
                
                {/* English Image */}
                <div className="package-image english-image">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">English Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="package-card">
              <div className="package-content">
                <h3 className="package-title">Package 2</h3>
                
                {/* Arabic Image */}
                <div className="package-image arabic-image">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">Arabic Image</p>
                  </div>
                </div>
                
                {/* English Image */}
                <div className="package-image english-image">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">English Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="package-card">
              <div className="package-content">
                <h3 className="package-title">Package 3</h3>
                
                {/* Arabic Image */}
                <div className="package-image arabic-image">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">Arabic Image</p>
                  </div>
                </div>
                
                {/* English Image */}
                <div className="package-image english-image">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">English Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZallaqRidingSchool; 