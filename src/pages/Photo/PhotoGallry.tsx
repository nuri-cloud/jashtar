"use client";
import React, { useEffect, useState } from "react";
import styles from "./PhotoGallry.module.scss";
import { AlbumCard } from "@/shared/ui/Media/MediaCard";
import { useImagesStore } from "@/app/store/Media/images";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { DateSelectButton } from "@/shared/ui/DateButton/DateButton";

import styles from "./PhotoGallry.module.scss";
import { useTranslation } from "react-i18next";
// import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { useImagesStore } from "@/app/store/Media/images";




export const PhotoGallry = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { imagesCards, fetchImages, loading, error } = useImagesStore();
    const [currentPage, setCurrentPage] = useState(1);
    const albumsPerPage = 6;

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    // считаем страницы
    const totalPages = Math.ceil(imagesCards.length / albumsPerPage);

    // вычисляем диапазон карточек для текущей страницы
    const startIndex = (currentPage - 1) * albumsPerPage;
    const currentAlbums = imagesCards.slice(startIndex, startIndex + albumsPerPage);

    return (
        <div className={styles.albumPage}>
            <div className={styles.header}>
                <h1 className={styles.title}>{t('media.PhotoGallery')}</h1>
                <div className={styles.buttons}>
                    <DateSelectButton text={t('VideoLibrary.selectDate')} />
                    <button className={styles.button} onClick={() => navigate("/media")}>
                        <span className={styles.buttonText}>{t('VideoLibrary.goBack')}</span>
                        <ArrowRightIcon className={styles.buttonIcon} />
                    </button>
                </div>
            </div>
            <div className={styles.gallery}>
                {
                    loading ? <div className="loader"></div> :
                        error ? <p>Произошла ошибка{error}</p> :
                            imagesCards.length < 0 ? <p>
                                {imagesCards.length} фото
                            </p> :
                                currentAlbums.map((album) => (
                                    <AlbumCard
                                        key={album.id}
                                        id={album.id}
                                        date={album.date}
                                        title={album.title}
                                        imageUrl={album.image}
                                    />
                                ))}
            </div>

            {/* пагинация */}
            <div className={styles.pagination}>
                <button
                    className={styles.pageButton}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <IoIosArrowBack/>
                </button>

                <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.active : ""}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    className={styles.pageButton}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    {/* <IoIosArrowForward /> */}
                </button>
            </div>
        </div>
    );
};

