import { useTranslation } from 'react-i18next';
import styles from './Education.module.scss';

export function Education({ item }: any) {
    const { t } = useTranslation()

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('profile.materials')}</h2>
            <div className={styles.projectsGrid}>
               {
                item?.education_materials?.length > 0
                ? item.education_materials.map((material: any, index: number) => (
                    <div
                        key={index}
                        className={`${styles.projectCard}`}
                        style={{ '--index': index } as React.CSSProperties}
                    >
                        <h3 className={styles.projectTitle}>
                            {material.title}
                        </h3>
                        <button className={styles.downloadButton} onClick={() => window.open(material.attachment, '_blank')}>
                            {t('profile.download')}
                        </button>
                    </div>
                ))
                : null
               }
            </div>
            
        </section>
    );
}
