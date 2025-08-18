import React from 'react'
import './style.module.scss'
import EventsArchive from './EventsArchive/EventsArchive'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'
function Events() {
  return (
    <>
      <UpcomingEvents/>
      <EventsArchive/>
    </>
  )
}

export default Events
