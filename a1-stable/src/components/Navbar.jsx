import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { GiHorseHead } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1753893962/A1_Profile_Pic_g3srpu.png" alt="A1 Stable Logo" style={{ marginRight: '10px', width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} />
          A1 Stable
        </Link>
        
        <ul className={classNames('navbar-menu', { active: isMobileMenuOpen })}>
          <li className="dropdown-container">
            <button 
              className="navbar-dropdown-btn" 
              onClick={toggleDropdown}
              onBlur={() => setTimeout(closeDropdown, 200)}
            >
              {t('nav.allPages')}
              <FaChevronDown className={classNames('dropdown-arrow', { 'rotated': isDropdownOpen })} />
            </button>
            <ul className={classNames('dropdown-menu', { 'show': isDropdownOpen })}>
              <li>
                <Link to="/" className="dropdown-link" onClick={closeDropdown}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/a1" className="dropdown-link" onClick={closeDropdown}>
                  {t('nav.a1')}
                </Link>
              </li>
              <li>
                <Link to="/zallaq-school" className="dropdown-link" onClick={closeDropdown}>
                  {t('nav.zallaqSchool')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="dropdown-link" onClick={closeDropdown}>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button className="language-toggle" onClick={toggleLanguage}>
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 