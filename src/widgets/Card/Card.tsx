import React from 'react'
import styles from './style.module.scss'
import defaultImg from '../../shared/assets/images/photo.png'

interface Data {
  id: number
  img: string
  title: string
  description: string
}

interface CardProps {
  item: Data
}

function Card({ item }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.itemCard}>
        <img src={item.img || defaultImg} alt={item.title} />
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
