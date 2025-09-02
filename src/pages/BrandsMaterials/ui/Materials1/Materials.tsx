import React, { useEffect, useState } from "react";
import styles from "./Materials.module.scss";
import { Link } from "react-router-dom";
import { useMaterialsStore } from "@/app/store/Brands/materialsStore";

function Materials() {
  const { materials, fetchMaterials, loading, error } = useMaterialsStore();
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

    fetchMaterials();

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [fetchMaterials]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.materialsContainer}>
      {materials.slice(0, visibleCount).map((item) => (
        <Link key={item.id} to={`/detailview/${item.id}`}> 
          <div className={styles.materialCard}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Materials;
