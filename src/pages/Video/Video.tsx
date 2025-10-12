import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./VideoGallry.module.scss";
import { AlbumCard } from "@/shared/ui/Media/MediaCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navpanel from "@/widgets/Navpanel/Navpanel";
import { VideoCard } from "../Media/ui/VideoCard/VideoCard";
import { useVideoStore } from "@/app/store/Media/video";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DateSelectButton } from "@/shared/ui/DateButton/DateButton";

export function Video() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const navigate = useNavigate();
    const { t, i18n } = useTranslation()
    const { loading, error, fetchVideos, videos } = useVideoStore();

    useEffect(() => {
        fetchVideos();
    }, []);

    // Вычисляем пагинацию на основе videos
    const totalPages = Math.ceil((videos?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentVideos = videos?.slice(startIndex, startIndex + itemsPerPage) || [];

    // Если текущая страница больше доступных страниц, сбрасываем на первую
    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={styles.container}>
            {/* Навигация */}
            <div className={styles.breadcrumbs}>
                <Navpanel text={t('VideoLibrary.home')} link="/" text2={t('VideoLibrary.media')} link2="/media" text3={t('VideoLibrary.VideoLibrary')} />
            </div>

            {/* Заголовок */}
            <div className={styles.header}>
                <h1 className={styles.title}>{t('VideoLibrary.VideoLibrary')}</h1>
                <div className={styles.buttons}>
                    <DateSelectButton text={t('VideoLibrary.selectDate')} />
                    <button className={styles.button} onClick={() => navigate("/media")}>
                        <span className={styles.buttonText}>{t('VideoLibrary.goBack')}</span>
                        <ArrowRightIcon className={styles.buttonIcon} />
                    </button>
                </div>
            </div>

            {/* Галерея */}
            <div className={styles.gallery}>
                {loading && <div className="loader" />}
                {error && <p className={styles.error}>Ошибка: {error}</p>}
                {!loading && !error && currentVideos?.map((video) => (
                    <VideoCard
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        videoUrl={video.video_url}
                    />
                ))}
            </div>

            {/* Пагинация */}

            <div className={styles.pagination}>
                <button
                    className={styles.pageButton}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    <IoIosArrowBack />
                </button>

                <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.active : ""
                                }`}
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
                    <IoIosArrowForward />
                </button>
            </div>

        </div>
    );
}