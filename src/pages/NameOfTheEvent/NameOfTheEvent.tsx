import Navpanel from '@/widgets/Navpanel/Navpanel'
import React from 'react'
import styles from './style.module.scss'
import img1 from '../../shared/assets/images/image (1).png'
import img2 from '../../shared/assets/images/image (2).png'
import img3 from '../../shared/assets/icons/time-line.svg'
import img4 from '../../shared/assets/icons/calendar-line.svg'
import img5 from '../../shared/assets/icons/map-pin-line.svg'

function NameOfTheEvent() {
  return (
    <div className={`${styles.wrapper} container`}>
      <Navpanel 
        text='Главная' link='/' 
        text2='Мероприятия' link2='/events' 
        text3='Название мероприятия'
      />

      <div className={styles.event}>
        <h1 className={styles.title}>Название мероприятия</h1>

        <p className={styles.description}>
          Безусловно, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность системы массового участия. Значимость этих проблем настолько очевидна, что синтетическое тестирование предопределяет высокую востребованность экспериментов, поражающих по своей масштабности и грандиозности. В своём стремлении повысить качество жизни, они забывают, что сложившаяся структура организации выявляет срочную потребность прогресса профессионального сообщества.
        </p>

        <div className={styles.imagesBlock}>
          <div className={styles.imagesRow}>
            <div className={styles.imagesGroup}>
              <img src={img1} alt="" />
              <div>
              <img src={img2} alt="" />
              <img src={img2} alt="" />
              </div>
            </div>
            <div className={styles.imagesFooter}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <h1 className={styles.detailsTitle}>Детали мероприятия</h1>
          <span className={styles.detail}><img src={img3} alt="" /> 20:30</span>
          <span className={styles.detail}><img src={img4} alt="" /> 15 Июля 2025 </span>
          <span className={styles.detail}><img src={img5} alt="" /> Улица, Дом </span>
        </div>
      </div>
    </div>
  )
}

export default NameOfTheEvent
