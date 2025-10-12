import React, { useState, useEffect } from "react";
import styles from "./DownCard.module.scss";
import dropDownImg from "../../../../shared/assets/images/drop down.svg";
import instagramImg from "../../../../shared/assets/images/instagram-line.svg";
import telegramImg from "../../../../shared/assets/images/telegram-2-fill.svg";

interface DownCardProps {
  onClick?: () => void;
  bgColor: string;
  index: number;
  show: number | null;
  title: string;
  fullText: string;
  telegram?: string;
  instagram?: string;
}

const DownCard: React.FC<DownCardProps> = ({
  onClick,
  bgColor,
  index,
  show,
  title,
  fullText,
  telegram,
  instagram,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show === index) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [show, index]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.container} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      style={{ backgroundColor: bgColor }}
    >
            <h1 className={styles.title}>{title}</h1>     {" "}
      <p className={styles.text}>{fullText}</p>     {" "}
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
          <img src={dropDownImg} alt="close" />       {" "}
        </button>
         {" "}
      </div>{" "}
    </div>
  );
};

export default DownCard;
