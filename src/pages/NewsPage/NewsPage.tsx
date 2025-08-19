import React from 'react'
import NewsHeadline from './NewsHeadline/NewsHeadline'
import { OtherNews } from './OtherNews/OtherNews'
import Navpanel from '@/widgets/Navpanel/Navpanel'

function NewsPage() {
  return (
    <>
      <Navpanel text='Главная' link='/' text2='Новости' link2='/news' text3='Новости заголовок'/>
      <NewsHeadline/>
      <OtherNews/>
    </>
  )
}

export default NewsPage
