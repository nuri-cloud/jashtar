import React from "react";
import { ArrowRightIcon } from "lucide-react";
import styles from "./DateSelectButton.module.scss";

interface DateSelectButtonProps {
  text: string;
}

export const DateSelectButton: React.FC<DateSelectButtonProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} aria-label="Выбрать дату">
        <span className={styles.buttonText}>{text}</span>
        <ArrowRightIcon className={styles.buttonIcon} />
      </button>

      {/* Всплывающее окно выбора даты */}
      <div className={styles.datePicker}>
        <input type="date" className={styles.input} />
      </div>
    </div>
  );
};
