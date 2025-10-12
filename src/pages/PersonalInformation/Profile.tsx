import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import { OpenProject } from "./ui/OpenProject/OpenProject";
import { FinishedProject } from "./ui/FinishedProject/FinishedProject";
import { Education } from "./ui/Education/Education";
import logo from "@/shared/assets/icons/logo.svg"
import { useNavigate } from "react-router-dom";
import { useProfileStore } from "@/app/store/Profile/Profile";
import { EditProfile } from "./ui/EditProfile/EditProfile";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const { t } = useTranslation()
  const navigationItems = [
    `${t('profile.editProfile')}`,
    `${t('profile.projects')}`,
    `${t('profile.materials')}`,
    `${t('profile.telegramChannel')}`,
    `${t('profile.yourApplications')}`,
  ];
  const [activeItem, setActiveItem] = React.useState(1);
  const { profile, fetchProfile, loading, error } = useProfileStore();
  const data = localStorage.getItem("user");
  const userData = data ? JSON.parse(data) : null;
  console.log(userData);

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  const navigate = useNavigate();
  // Функция для рендера контента
  const renderContent = () => {
    switch (activeItem) {
      case 1:
        return (
          <>
            <OpenProject projects={profile} />
            {/* <FinishedProject /> */}
          </>
        );
      case 2:
        return <Education item={profile} />;
      case 0:
        return <EditProfile onCallBack={() => fetchProfile()} />
      default:
        return <p>Выберите раздел</p>;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img title={t("header.home")} onClick={() => navigate("/")} className={styles.logo} alt="Logo" src={logo} />

        <h1 className={styles.title}>{t('profile.personalCabinet')}</h1>

        <button onClick={() => { navigate("/"); localStorage.removeItem("user"); localStorage.removeItem("access"); }} className={styles.logoutButton}>
          <span>{t('profile.logout')}</span>
          <svg
            className={styles.logoutIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </header>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.avatar}>
              <img src="/image.png" alt="User avatar" />
            </div>

            <div className={styles.userInfo}>
              <h2 className={styles.userName}>{userData?.full_name || userData?.name || userData.user.full_name}</h2>

              <p className={styles.userEmail}>{userData.email || userData.user.email}</p>
            </div>
            <nav className={styles.navigation}>
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.navItem} ${index === activeItem ? styles.active : ""
                    }`}
                  onClick={() => { item === t("profile.telegramChannel") ? window.open(profile?.telegram_channel, "_blank") : item === t("profile.yourApplications") ? window.open(profile?.google_form_link, "_blank") : setActiveItem(index) }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className={styles.contentArea}>{renderContent()}</main>
      </div>
    </div>
  );
};
