// EventsArchive.tsx
import Card from '@/widgets/Card/Card'
import React, { useEffect } from 'react'
import img from '../../../shared/assets/images/photo.png'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { eventsStore } from '@/app/store/events/events'

function EventsArchive() {
    const usenavigate = useNavigate()
     const {t, i18n} = useTranslation()
   const { event, loading, error, fetchevents } = eventsStore();
 
   useEffect(() => {
     fetchevents();
   }, []);
  if (loading) {
   return <p>Загрузка...</p>;
 }
 if (error) {
   return <p style={{ color: "red" }}>{error}</p>;
 }
  return (
    <div className='events container'>
        <div className='events-text'>
        <h1>{t('events.eventArchive')}</h1>
         <button onClick={() => usenavigate('/eventsArchivePage')}>{t('events.button')}</button>
        </div>
    <div className='EventsArchive'>
      {event.slice(0 , 3).map((event) => (
        <Card onClick={() => usenavigate(`/events/${event.id}/`)} key={event.id} item={event} />
      ))}
    </div>
    </div>
  )
}

export default EventsArchive
