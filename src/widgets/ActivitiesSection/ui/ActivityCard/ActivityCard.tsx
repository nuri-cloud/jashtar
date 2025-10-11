
import React from "react";
import clsx from "clsx";
import styles from "./ActivityCard.module.scss";
import dropDownImg from "../../../../shared/assets/images/drop down.svg";
import instagramImg from "../../../../shared/assets/images/instagram-line.svg";
import telegramImg from "../../../../shared/assets/images/telegram-2-fill.svg";

interface ActivityCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  onClick?: () => void;
  telegram?: string;
  instagram?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  imageSrc,
  bgColor,
  onClick,
  telegram,
  instagram,
}) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(to right, ${bgColor} 40%, rgba(0, 0, 0, 0) 100%), url(${imageSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right center",
  } as React.CSSProperties;

  return (
    <>
    <div className={clsx(styles.activityCard)} style=
    {cardStyle}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.buttons}>
          {telegram && (
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img src={telegramImg} alt="Telegram" />
            </a>
          )}

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img src={instagramImg} alt="Instagram" />
            </a>
          )}

          <button onClick={onClick} className={styles.button}>
            Подробнее
            <img src={dropDownImg} alt="Подробнее" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};


export default ActivityCard;
