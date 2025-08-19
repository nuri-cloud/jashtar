import React from 'react'
import styles from './style.module.scss'
import defaultImg from '../../shared/assets/images/photo.png'
import { useNavigate } from 'react-router-dom'

interface Data {
  id: number
  img: string
  title: string
  description: string
}

interface CardProps {
  item: Data
  link?: string 
}

function NewsCard({ item , link}: CardProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <div className={styles.itemCard}>
        <img src={item.img || defaultImg} alt={item.title} onClick={() => navigate(`${link}`)} />
      </div>
      <div className={styles.Footercard}>
        <div>
          <h3>?{item.title}</h3>
          <p>{item.description.slice(0, 56)}...</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
