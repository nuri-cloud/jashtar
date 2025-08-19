import React, { useState, useEffect } from "react";
import styles from "./Materials.module.scss";
import { Link } from "react-router-dom";

type Material = {
  id: number;
  image: string;
  price: string;
  name: string;
};

const materials: Material[] = [
  { id: 1, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 1', price: "1000 KGZ" },
  { id: 2, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 2', price: "1200 KGZ" },
  { id: 3, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 3', price: "1500 KGZ" },
  { id: 4, image: "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg", name: 'Название мерча 4', price: "900 KGZ" },
];

function Materials() {
  const [visibleCount, setVisibleCount] = useState<number>(4);

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

  return (
    <div className={styles.materialsContainer}>
      {materials.slice(0, visibleCount).map((item) => (
        <Link key={item.id} to={`/detailview`}>
          <div className={styles.materialCard}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p className={styles.price}>{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Materials;


// import React, { useEffect, useState } from "react";
// import styles from "./Materials.module.scss";
// import { Link } from "react-router-dom";
// import { useMaterialsStore } from "@/app/store/Brands/materialsStore"

// function Materials() {
//   const { materials, fetchMaterials, loading, error } = useMaterialsStore();
//   const [visibleCount, setVisibleCount] = useState<number>(4);

//   const updateVisibleCount = () => {
//     const width = window.innerWidth;
//     if (width <= 600) setVisibleCount(1);
//     else if (width <= 900) setVisibleCount(2);
//     else if (width <= 1200) setVisibleCount(3);
//     else setVisibleCount(4);
//   };

//   useEffect(() => {
//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);

//      fetchMaterials().then(() => {
//     console.log("Materials from API:", materials);
//   });

//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
  

//   return (
//     <div className={styles.materialsContainer}>
//       {materials.slice(0, visibleCount).map((item) => (
//         <Link key={item.id} to={`/detailview`}>
//           <div className={styles.materialCard}>
//             <img src={item.file} alt={item.title} />
//             <div>
//               <h3>{item.title}</h3>
//               {/* <p className={styles.price}>{item.price}</p> */}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Materials;
