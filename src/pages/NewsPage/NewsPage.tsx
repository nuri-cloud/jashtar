import Navpanel from '@/widgets/Navpanel/Navpanel'
import NewsHeadline from './NewsHeadline/NewsHeadline'
import { OtherNews } from './OtherNews/OtherNews'

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
