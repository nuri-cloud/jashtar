import React from "react";
import styles from "./Materials.module.scss";
import { Link } from "react-router-dom";

type Material = {
    id: number;
    image: string;
    price: string;
    name: string;
};

const materials: Material[] = [
    { id: 1, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча "Название"', price: "1000 KGZ" },
    { id: 2, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча "Название"', price: "1000 KGZ" },
    { id: 3, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча "Название"', price: "1000 KGZ" },
    { id: 4, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча "Название"', price: "1000 KGZ" },
];

function Materials() {
    return (
        <div className={styles.materialsContainer}>
            {materials.map((item) => (
                <Link  key={item.id} to={`/detailview`}  >
                    <div key={item.id} className={styles.materialCard}>
                        <img src={item.image} />
                        <div>
                            <h3>{item.name}</h3>
                            <p className={styles.price}>{item.price}</p>
                        </div>

                    </div></Link>

            ))}
        </div>
    );
}

export default Materials;
