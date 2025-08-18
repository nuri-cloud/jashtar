import React from 'react'
import './style.module.scss'
import EventsArchive from './EventsArchive/EventsArchive'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'
import Navpanel from '@/widgets/Navpanel/Navpanel'
function Events() {
  return (
    <>
      <Navpanel text='Главная' text2='Мероприятия '/>
      <UpcomingEvents/>
      <EventsArchive/>
    </>
  )
}

export default Events
