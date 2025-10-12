import React from 'react'
import styles from './PresidentSale.module.scss'
import img from '../../../shared/assets/images/photo (1).png'
import Navpanel from '@/widgets/Navpanel/Navpanel'
import { useTranslation } from 'react-i18next'
import PresidentSaleCard from '@/widgets/PresidentSaleCard/PresidentSaleCard'
const data = [
    {
        img: img,
        title: 'Курсы'
    },
    {
        img: img,
        title: 'Библиотека'
    },
    {
        img: img,
        title: 'Подкасты'
    },
]

function PresidentSale() {
    const {t } = useTranslation()
  return (
    <div className='container'>
      <Navpanel text={t('presidentSale.home')} text2={t('presidentSale.presidentSale')} link='/'/>
      <h1 className={styles.presidentSaleText}>{t('presidentSale.presidentSale')}</h1>
      <div className={styles.presidentSale}>
        {data.map((item, index) => (
           <PresidentSaleCard key={index} data={item}/>
        ))}
      </div>
    </div>
  )
}

export default PresidentSale
