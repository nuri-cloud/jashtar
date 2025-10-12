import React, { useState } from "react";
import { MailIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./ForgotPassword.module.scss";
import authimage from "@/shared/assets/images/authImage.png";
import { useForgotPasswordStore } from "@/app/store/auth/ForgotPassword";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
}

export const ForgotPassword = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        email: "",
    });
    const navigate = useNavigate();

    const { loading, error, success, forgotPassword } = useForgotPasswordStore();

    const handleChange = (value: string) => {
        setFormData({ email: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email.includes("@")) {
            alert(t("forgotPassword.errorEmail"));
            return;
        }

        await forgotPassword({ email: formData.email });
    };

    if (success) {
        navigate("/verify-code");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.title}>{t("forgotPassword.title")}</h1>
                <p className={styles.subtitle}>
                    {t("forgotPassword.subtitle")}
                </p>
                {/* Email */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("forgotPassword.emailLabel")}<span className={styles.required}>{t("forgotPassword.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <MailIcon className={styles.icon} />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder={t("forgotPassword.emailPlaceholder")}
                            className={styles.input}
                            disabled={loading}
                        />
                    </div>
                </div>

                {/* Кнопка */}
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    <span className={styles.buttonText}>
                        {loading ? t("forgotPassword.submitButtonLoading") : t("forgotPassword.submitButton")}
                    </span>
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && (
                    <p style={{ color: "green" }}>
                        {t("forgotPassword.successMessage", { email: formData.email })}
                    </p>
                )}
            </form>

            <img className={styles.backgroundImage} alt="Background" src={authimage} />
        </div>
    );
};