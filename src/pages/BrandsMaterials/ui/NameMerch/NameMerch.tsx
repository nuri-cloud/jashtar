import React, { useEffect, useState } from "react";
import styles from "./NameMerch.module.scss";
import { useMaterialsStore } from "../../../../app/store/Brands/materialsStore"
import { Link } from "react-router-dom";

function NameMerch() {
    const { materials, fetchMaterials, loading, error } = useMaterialsStore();
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        fetchMaterials();
    }, [fetchMaterials]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ката: {error}</p>;

    return (
        <div className={styles.container2}>
            {materials.slice(startIndex, startIndex + visibleCount).map((item) => (
                <Link key={item.id}
                    to={`/detailview/${item.id}`}
                    state={{ image: item.file }}>
                    <div key={item.id} className={styles.card}>
                        <img src={item.file.startsWith("http") ? item.file : `https://yourdomain.com/${item.file}`}
                            alt={item.title}
                            className={styles.image} />
                        <div className={styles.div}>
                            <h2 className={styles.name}>{item.title}</h2>
                            <p className={styles.price}>{item.price}</p>
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    );
}

export default NameMerch;
