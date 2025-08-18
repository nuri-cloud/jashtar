import React from "react";
import styles from "./NameMerch.module.scss";

type Merch = {
    id: number;
    name: string;
    price: string;
    image: string;
};

const merchList: Merch[] = [
    { id: 1, name: 'Название мерча "Название"', price: "1000 KGZ", image: "https://images.ctfassets.net/hrltx12pl8hq/1PJut3KG5eC0HbO5a3B9OZ/47bb44071a487cc6679dcebd0ce6d59e/6_black.webp" },
    { id: 2, name: 'Название мерча "Название" ', price: "1000 KGZ", image: "https://images.ctfassets.net/hrltx12pl8hq/1PJut3KG5eC0HbO5a3B9OZ/47bb44071a487cc6679dcebd0ce6d59e/6_black.webp" },
];

function NameMerch() {
    return (
        <div className={styles.container}>
            {merchList.map((item) => (
                <div key={item.id} className={styles.card}>
                    <img src={item.image} alt={item.name} className={styles.image} />
                    <div className={styles.div}>
                        <h2 className={styles.name}>{item.name}</h2>
                        <p className={styles.price}>{item.price}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default NameMerch;
