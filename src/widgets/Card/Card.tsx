import React from 'react'
import styles from './style.module.scss'
import defaultImg from '../../shared/assets/images/photo.png'
import { useNavigate } from 'react-router-dom'

interface Data {
  id: number
  img: string
  title: string
  description: string
  link: string
}

interface CardProps {
  item: Data
}

function Card({ item }: CardProps) {
   const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <div className={styles.itemCard}>
        <img onClick={() => navigate(`${item.link}`)} src={item.img || defaultImg} alt={item.title} />
      </div>
      <div className={styles.Footercard}>
        <span>DD.MM</span>
        <div>
          <h3>{item.title.slice(0, 22)}...</h3>
          <p>{item.description.slice(0, 56)}...</p>
        </div>
      </div>
    </div>
  )
}

export default Card
