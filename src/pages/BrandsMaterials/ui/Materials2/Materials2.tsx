<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
import styles from "./Materials2.module.scss";
import { Link } from "react-router-dom";

type Material2 = {
  id: number;
  image: string;
  price: string;
  name: string;
};

const materials: Material2[] = [
  { id: 1, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 1', price: "1000 KGZ" },
  { id: 2, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 2', price: "1200 KGZ" },
  { id: 3, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 3', price: "1500 KGZ" },
  { id: 4, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 4', price: "900 KGZ" },
<<<<<<< HEAD
  { id: 5, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 5', price: "1100 KGZ" },
=======
  { id: 5, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 5 ', price: "1100 KGZ" },
>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
  { id: 6, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 6', price: "1300 KGZ" },
];

const Materials2: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
<<<<<<< HEAD
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width <= 600) setVisibleCount(1);
    else if (width <= 900) setVisibleCount(2);
    else if (width <= 1200) setVisibleCount(3);
    else setVisibleCount(4);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

=======
  const visibleCount = 4;
>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
  const maxIndex = materials.length - visibleCount;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  const handleNumberClick = (num: number) => {
    setStartIndex(num - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.materialsContainer}>
        {materials.slice(startIndex, startIndex + visibleCount).map((item) => (
          <Link key={item.id} to={`/detailview`} className={styles.materialCard}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p className={styles.price}>{item.price}</p>
            </div>
          </Link>
<<<<<<< HEAD
=======

>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
        ))}
      </div>

      <div className={styles.controlsRow}>
        <button className={styles.btns} onClick={handlePrev} disabled={startIndex === 0}>
          <img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" alt="prev" />
        </button>

        <div className={styles.pagination}>
<<<<<<< HEAD
          {Array.from({ length: Math.ceil(materials.length / visibleCount) }, (_, i) => (
            <button
              key={i}
              className={startIndex === i * visibleCount ? styles.activeNumber : ""}
              onClick={() => setStartIndex(i * visibleCount)}
            >
              {i + 1}
=======
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={startIndex === num - 1 ? styles.activeNumber : ""}
              onClick={() => handleNumberClick(num)}
            >
              {num}
>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
            </button>
          ))}
        </div>

<<<<<<< HEAD
        <button className={styles.btns} onClick={handleNext} disabled={startIndex >= maxIndex}>
          <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="next" />
        </button>
      </div>
=======
        <button className={styles.btns} onClick={handleNext} disabled={startIndex === maxIndex}>
          <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="next" />
        </button>
      </div>

>>>>>>> f7896e35e6de1f15c0a4bd4f6499c40303c895ff
    </div>
  );
};

export default Materials2;
