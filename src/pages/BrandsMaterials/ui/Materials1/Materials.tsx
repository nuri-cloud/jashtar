<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
import styles from "./Materials.module.scss";
import { Link } from "react-router-dom";

type Material = {
<<<<<<< HEAD
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
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const updateVisibleCount = () => {
    const width = window.innerWidth;

    if (width <= 600) setVisibleCount(1);
    else if (width <= 800) setVisibleCount(2);
    else if (width <= 1200) setVisibleCount(3);
    else setVisibleCount(4);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className={styles.materialsContainer}>
      {materials.slice(0, visibleCount).map((item) => (
        <Link key={item.id} to={`/detailview`}>
          <div className={styles.materialCard}>
            <img src={item.image} />
            <div>
              <h3>{item.name}</h3>
              <p className={styles.price}>{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
=======
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
>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
}

export default Materials;
