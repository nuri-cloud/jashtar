// Header.tsx
import React, { useState } from 'react'
import styles from './style.module.scss'
import logo from '../../shared/assets/icons/logo (1).svg'
import menu from '../../shared/assets/images/hamburger manu.svg'
import close from '../../shared/assets/images/close-line.svg'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
  const [activeButton, setActiveButton] = useState<number | null>(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const toggleMenu = () => setMenuOpen(prev => !prev)
  const links = [
    { name: 'Главная', path: '/' },
    { name: 'О движении', path: '/movementpages' },
    { name: 'Направления', path: '/activitiesPage' },
    { name: 'Мероприятия', path: '/events' },
    { name: 'Проекты', path: '/project' },
    { name: 'Медиа', path: '/media' },
    { name: 'Рег.отделения', path: '/branchnamepages' },
  ]
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.burger} onClick={toggleMenu}>
        <img src={menuOpen? close : menu} alt="Menu" />
      </div>
      <img src={logo} alt="Logo" className={styles.logo} />

   <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
  <ul>
    {links.map((item, index) => (
      <li
        key={index}
        className={activeButton === index + 1 ? styles.active : ''}
        onClick={() => setActiveButton(index + 1)}
      >
        <Link to={item.path}>{item.name}</Link>
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
  onClick={() => {
    setActiveButton(8)
    navigate('/register')
  }}
>
  Войти
</button>

      </div>
    </header>
  )
}

export default Header
