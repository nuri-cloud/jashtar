// Header.tsx
import React, { useState } from 'react'
import styles from './style.module.scss'
import logo from '../../shared/assets/icons/logo (1).svg'
import menu from '../../shared/assets/images/hamburger manu.svg'
import close from '../../shared/assets/images/close-line.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const [activeButton, setActiveButton] = useState<number | null>(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const toggleMenu = () => setMenuOpen(prev => !prev)

  const { t, i18n } = useTranslation()
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng)

  const links = [
    { key: 'home', path: '/' },
    { key: 'aboutTheMovement', path: '/movementpages' },
    { key: 'direction', path: '/activitiesPage' },
    { key: 'Events', path: '/events' },
    { key: 'Projects', path: '/project' },
    { key: 'Media', path: '/media' },
    { key: 'regionalOffice', path: '/branchnamepages' },
  ]
import React from "react";
import styles from "./style.module.scss";
import logo from "../../shared/assets/icons/logo (1).svg";
import menu from "../../shared/assets/images/hamburger manu.svg";
import close from "../../shared/assets/images/close-line.svg";
import { Link, useNavigate } from "react-router-dom";
import { useLanguageStore } from "@/app/store/languageStore";

function Header() {
  const [activeButton, setActiveButton] = React.useState<number | null>(1);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { currentLang, changeLang } = useLanguageStore();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const links = [
    { name: "Главная", path: "/" },
    { name: "О движении", path: "/movementpages" },
    { name: "Направления", path: "/activitiesPage" },
    { name: "Мероприятия", path: "/events" },
    { name: "Проекты", path: "/project" },
    { name: "Медиа", path: "/media" },
    { name: "Рег.отделения", path: "/branchnamepages" },
  ];

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.burger} onClick={toggleMenu}>
        <img src={menuOpen ? close : menu} alt="Menu" />
      </div>
      <img src={logo} alt="Logo" className={styles.logo} />

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          {links.map((item, index) => (
            <li
              key={index}
              className={activeButton === index + 1 ? styles.active : ''}
              onClick={() => setActiveButton(index + 1)}
            >
              <Link to={item.path}>{t(`header.${item.key}`)}</Link>
              className={activeButton === index + 1 ? styles.active : ""}
              onClick={() => setActiveButton(index + 1)}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.item}>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          <option value="ru">РУС</option>
          <option value="kg">KGS</option>
          value={currentLang}
          onChange={(e) => changeLang(e.target.value as "ky" | "ru" | "en")}
        >
          <option value="ru">РУС</option>
          <option value="ky">KGS</option>
          <option value="en">ENG</option>
        </select>

        <button
          className={activeButton === 8 ? styles.activeButton : ''}
          onClick={() => {
            setActiveButton(8)
            navigate('/register')
          }}
        >
          {t('header.button')}
          className={activeButton === 8 ? styles.activeButton : ""}
          onClick={() => {
            setActiveButton(8);
            navigate("/register");
          }}
        >
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
