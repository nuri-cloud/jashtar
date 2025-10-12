import React from 'react'
import styles from './PresidentSaleCard.module.scss'
import { useNavigate } from 'react-router-dom'

interface presidentSale{
    img: string
    title: string
}

interface PresidentSaleCardProps {
  data: presidentSale
}
function PresidentSaleCard({ data }: PresidentSaleCardProps) {
    const navigate = useNavigate()
  return (
    <div className={styles.presidentSaleCard}>
    <div>
      <img onClick={() => navigate('/presidentSaleDetail')} src={data.img} alt={data.img} />
     </div>
    <h3>{data.title}</h3>
    </div>
  )
}

export default PresidentSaleCard
