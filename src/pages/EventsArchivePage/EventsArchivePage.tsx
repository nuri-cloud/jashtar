import React, { useState } from 'react'
import styles from './style.module.scss'
import img from '../../shared/assets/images/photo.png'
import Card from '@/widgets/Card/Card'
import Navpanel from '@/widgets/Navpanel/Navpanel'

interface Event {
  id: number
  img: string
  title: string
  description: string
}

function EventsArchivePage() {
  const Events: Event[] = Array.from({ length: 55 }, (_, i) => ({
    id: i + 1,
    img: img,
    title: `Событие номер ${i + 1}`,
    description: 'Описание Описание Описание Описание Описание Описание Описание',
  }))

  // 👉 Настройки пагинации
  const pageSize = 12
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(Events.length / pageSize)

  const startIndex = (currentPage - 1) * pageSize
  const currentEvents = Events.slice(startIndex, startIndex + pageSize)

  // 👉 Функция для "умной" пагинации
  const getPaginationRange = () => {
    const delta = 2 // сколько кнопок показывать вокруг текущей
    const range: (number | string)[] = []
    const left = Math.max(2, currentPage - delta)
    const right = Math.min(totalPages - 1, currentPage + delta)

    range.push(1)

    if (left > 2) {
      range.push('...')
    }

    for (let i = left; i <= right; i++) {
      range.push(i)
    }

    if (right < totalPages - 1) {
      range.push('...')
    }

    if (totalPages > 1) {
      range.push(totalPages)
    }

    return range
  }

  return (
    <div className={`${styles.eventsArchivePage} container`}>
      <Navpanel text='Главная' link='/' text2='Мероприятия' link2='/events' text3='Архив мероприятий '/>
      <div className={styles.eventsText2}>
        <h1>Архив мероприятий</h1>
      </div>

      <div className={styles.eventsArchive2}>
        {currentEvents.map((event) => (
          <Card key={event.id} item={event} />
        ))}
      </div>

      {/* 👉 Пагинация */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            назад
          </button>
        
          {getPaginationRange().map((page, index) =>
            page === '...' ? (
              <span key={index} className={styles.ellipsis}>
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(Number(page))}
                className={currentPage === page ? styles.activePage : ''}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            вперед
          </button>
        </div>
      )}
    </div>
  )
}

export default EventsArchivePage
