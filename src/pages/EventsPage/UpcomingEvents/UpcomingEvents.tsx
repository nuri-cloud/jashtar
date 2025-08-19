import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './style.module.scss'
import Card from '@/widgets/Card/Card'
import img from '../../../shared/assets/images/photo.png'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'

interface Event {
  id: number
  img: string
  title: string
  description: string
}

const UpcomingEvents: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null)

  const Events: Event[] = [
    { id: 1, img, title: 'Событие 1', description: 'Описание 1' },
    { id: 2, img, title: 'Событие 2', description: 'Описание 2' },
    { id: 3, img, title: 'Событие 3', description: 'Описание 3' },
    { id: 4, img, title: 'Событие 4', description: 'Описание 4' },
    { id: 5, img, title: 'Событие 5', description: 'Описание 5' },
    { id: 6, img, title: 'Событие 6', description: 'Описание 6' },
  ]

  // Когда рефы появятся, подставляем их в Swiper
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current
      swiperInstance.params.navigation.nextEl = nextRef.current
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [swiperInstance])

  return (
    <div className={styles.UpcomingEvents}>
      <h1 className={styles.title}>Предстоящие мероприятия</h1>

      <div className={styles.swiperWrapper}>
        <button ref={prevRef} className={styles.customArrow}>
          &lt;
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2.1 },
            769: { slidesPerView: 3.1 },
          }}
        >
          {Events.map((event) => (
            <SwiperSlide key={event.id}>
              <Card item={event} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className={styles.customArrow}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default UpcomingEvents
