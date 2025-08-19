// EventsArchive.tsx
import img from '../../shared/assets/images/photo.png'
// import './style.scss'
import Card from '@/widgets/Card/Card'
import { useNavigate } from 'react-router-dom'
interface Event {
  id: number
  img: string
  title: string
  description: string
}

export function EventsPages() {
    const usenavigate = useNavigate()
  const Events: Event[] = [
    {
      id: 1,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
    },
    {
      id: 2,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
    },
    {
      id: 3,
      img: img,
      title: 'Событие Событие Событие Событие',
      description: 'Описание Описание Описание Описание Описание Описание Описание',
    },

  ]

  return (
    <div className='othernews container'>
        <div className='other-text'>
        <h1>Предстоящие мероприятия</h1>
         <button onClick={() => usenavigate('/')}>Подробнее</button>
        </div>
    <div className='Other-news'>
      {Events.map((event) => (
        <Card key={event.id} item={event} />
      ))}
    </div>
    </div>
  )
}

