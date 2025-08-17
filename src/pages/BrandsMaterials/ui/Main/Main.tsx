import React from 'react'
import styles from "./Main.module.scss"
import Materials from '../Materials1/Materials'
import NameMerch from '../NameMerch/NameMerch'
import Materials2 from '../Materials2/Materials2'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <h2>Главная</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
                <p>Бренд материалы </p>
            </div>

            <div className={styles.herotext}>
                <h1>Бренд материалы</h1>
                <h3>Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.</h3>
            </div>

            <Materials />
            <NameMerch />
            <Materials2 />
        </div>
    )
}

export default Main
