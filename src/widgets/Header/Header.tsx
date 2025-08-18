// Header.tsx
import React, { useState } from 'react'
import styles from './style.module.scss'
import logo from '../../shared/assets/icons/logo (1).svg'
import menu from '../../shared/assets/images/hamburger manu.svg'
import close from '../../shared/assets/images/close-line.svg'
function Header() {
  const [activeButton, setActiveButton] = useState<number | null>(1)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.burger} onClick={toggleMenu}>
        <img src={menuOpen? close : menu} alt="Menu" />
      </div>
      <img src={logo} alt="Logo" className={styles.logo} />


      {/* Навигация */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          {[
            'Главная',
            'О движении',
            'Направления',
            'Мероприятия',
            'Проекты',
            'Медиа',
            'Рег.отделения',
          ].map((item, index) => (
            <li
              key={index}
              className={activeButton === index + 1 ? styles.active : ''}
              onClick={() => setActiveButton(index + 1)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.item}>
        <select>
          <option value="1">РУС</option>
          <option value="2">KGS</option>
        </select>
        <button
          className={activeButton === 8 ? styles.activeButton : ''}
          onClick={() => setActiveButton(8)}
        >
          Войти
        </button>
      </div>
    </header>
  )
}

export default Header
