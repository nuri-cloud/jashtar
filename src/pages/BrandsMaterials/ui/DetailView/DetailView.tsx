import React from 'react'
import styles from "./DetailView.module.scss"
import Materials from '../Materials1/Materials'

function DetailView() {
    return (
        <div className={styles.detailview}>
            <div className={styles.text}>
                <h2>Главная</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
                <p>Бренд материалы </p>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
                <h4>Название мерча </h4>
            </div>

            <div className={styles.view}>
                <div className={styles.div}>
                    <div className={styles.gallery}>
                        <img src="https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg" alt="" />

                        <div className={styles.imgs}>
                            <img src="https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg" alt="" />
                            <img src="https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg" alt="" />
                            <img src="https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg" alt="" />
                        </div>
                    </div>
                    <div className={styles.price2}>
                        <h1>Цена:</h1>
                        <button>
                            <p> 1000 KGZ</p>
                        </button>
                    </div>
                </div>



                <div className={styles.name}>
                    <div className={styles.hero}>
                        <h1>Названия</h1>
                        <h4>Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.</h4>
                    </div>

                    <div className={styles.price}>
                        <h1>Цена:</h1>
                        <button>
                            <p> 1000 KGZ</p>
                        </button>
                    </div>
                </div>

            </div>

            <h2 className={styles.h2}>Похожие товары</h2>

            <Materials />

        </div>
    )
}

export default DetailView
