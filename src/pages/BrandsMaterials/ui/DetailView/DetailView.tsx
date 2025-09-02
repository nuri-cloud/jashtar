import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailView.module.scss";
import Materials from "../Materials1/Materials";
import { useDetailStore } from "@/app/store/detail/detailStore";

function DetailView() {
  const { id } = useParams<{ id: string }>();
  const { selectedMaterial, fetchMaterialById, loading, error } = useDetailStore();

  useEffect(() => {
    if (id) fetchMaterialById(Number(id));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!selectedMaterial) return <p>No material found</p>;

  return (
    <div className={styles.detailview}>
      <div className={styles.text}>
        <h2>Главная</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
        <p>Бренд материалы</p>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />
        <h4>{selectedMaterial.title}</h4>
      </div>

      <div className={styles.view}>
        <div className={styles.div}>
          <div className={styles.gallery}>
            <img src={selectedMaterial.image} alt={selectedMaterial.title} />
            <div className={styles.imgs}>
              {/* Мисалы, окшош сүрөттөрдү ушул жерге коюуга болот */}
              <img src={selectedMaterial.image} alt={selectedMaterial.title} />
              <img src={selectedMaterial.image} alt={selectedMaterial.title} />
              <img src={selectedMaterial.image} alt={selectedMaterial.title} />
            </div>
          </div>

          <div className={styles.price2}>
            <h1>Цена:</h1>
            <button>
              <p>1200 KGZ</p>
            </button>
          </div>
        </div>

        <div className={styles.name}>
          <div className={styles.hero}>
            <h1>{selectedMaterial.title}</h1>
            <h4>{selectedMaterial.description}</h4>
          </div>

          <div className={styles.price}>
            <h1>Цена:</h1>
            <button>
              <p>1200 KGZ</p>
            </button>
          </div>
        </div>
      </div>

      <h2 className={styles.h2}>Похожие товары</h2>
      <Materials />
    </div>
  );
}

export default DetailView;
