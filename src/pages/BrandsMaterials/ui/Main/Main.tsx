import React from 'react'
import styles from "./Main.module.scss"
import Materials from '../Materials1/Materials'
import NameMerch from '../NameMerch/NameMerch'
import Materials2 from '../Materials2/Materials2'
import Navpanel from '@/widgets/Navpanel/Navpanel'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <Navpanel text='Главная' link='/' text2='Бренд материалы'/>
            </div>

            <div className={styles.herotext}>
                <h1>Бренд материалы</h1>
                <h3>Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокиро ваны в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.</h3>
            </div>
            <Materials />
            <NameMerch />
            <Materials2 />
        </div>
    )
}

export default Main
