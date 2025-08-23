// EventsArchive.tsx
import Card from '@/widgets/Card/Card'
import React from 'react'
import img from '../../../shared/assets/images/photo.png'
import './style.scss'
import { useNavigate } from 'react-router-dom'
interface Event {
  id: number
  img: string
  title: string
  description: string
  link: string
}

function EventsArchive() {
    const usenavigate = useNavigate()
  const Events: Event[] = [
    {
      id: 1,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
      link: '/nameoftheevent' 
    },
    {
      id: 2,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
      link: '/nameoftheevent' 
    },
    {
      id: 3,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
      link: '/nameoftheevent' 
    },
    {
      id: 4,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
      link: '/nameoftheevent' 
    },
    {
      id: 5,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
      link: '/nameoftheevent' 
    },
    {
      id: 6,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
      link: '/nameoftheevent' 
    },
  ]

  return (
    <div className='events container'>
        <div className='events-text'>
        <h1>Архив мероприятий</h1>
         <button onClick={() => usenavigate('/eventsArchivePage')}>Подробнее</button>
        </div>
    <div className='EventsArchive'>
      {Events.map((event) => (
        <Card key={event.id} item={event} />
      ))}
    </div>
    </div>
  )
}

export default EventsArchive
