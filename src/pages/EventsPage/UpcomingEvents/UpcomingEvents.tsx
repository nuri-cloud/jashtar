import React, { useState } from 'react'
import styles from './style.module.scss'
import Card from '@/widgets/Card/Card'
import img from '../../../shared/assets/images/photo.png'

interface Event {
  id: number
  img: string
  title: string
  description: string
}

function UpcomingEvents() {
  const Events: Event[] = [
    { id: 1, img, title: 'Событие sdgggggggggsdg 1', description: 'Описание 1' },
    { id: 2, img, title: 'Событие 2', description: 'Описание 2' },
    { id: 3, img, title: 'Событие 3', description: 'Описание 3' },
    { id: 4, img, title: 'Событие 4', description: 'Описание 4' },
    { id: 5, img, title: 'Событие 5', description: 'Описание 5' },
    { id: 6, img, title: 'Событие 6', description: 'Описание 6' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCards = 3

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, Events.length - visibleCards))
  }

  return (
    <div className={`${styles.UpcomingEvents} container`}>
      <h1 className={styles.title}>Предстоящие мероприятия</h1>

      <div className={styles.carousel}>
        <button
          className={styles.arrow}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          {'<'}
        </button>

        <div className={styles.carouselViewport}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {Events.map((event) => (
              <Card key={event.id} item={event} />
            ))}
          </div>
        </div>

        <button
          className={styles.arrow}
          onClick={nextSlide}
          disabled={currentIndex >= Events.length - visibleCards}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default UpcomingEvents
