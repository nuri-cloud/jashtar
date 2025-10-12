import { log } from 'console';
import styles from './OpenProject.module.scss';
import { useTranslation } from 'react-i18next';
export function OpenProject({ projects }: any) {
    const { t } = useTranslation()
    return (
        <section className={styles.section}>   
            <h2 className={styles.sectionTitle}>
                {t('profile.openedProjects')}
            </h2>

            <div className={styles.projectsGrid}>
                {
                    projects?.projects?.length > 0
                        ? projects.projects.map((project: any, index: number) => (
                            <div
                                key={index}
                                className={`${styles.projectCard}`}
                                style={{ '--index': index } as React.CSSProperties}
                            >
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>
                            </div>
                        ))
                        : null

                }

            </div>
        </section>
    );
}
