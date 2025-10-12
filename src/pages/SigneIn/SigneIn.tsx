import React, { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./SignIn.module.scss";
import authimage from "@/shared/assets/images/authImage.png";
import { useLoginStore } from "@/app/store/auth/signein";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignIn = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const { setField, submit, loading, error, success } = useLoginStore();

    const [visiblePasswords, setVisiblePasswords] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        if (field === "email" || field === "password") {
            setField(field, value);
        }
    };

    const togglePasswordVisibility = (field: keyof FormData) => {
        if (field === "password") {
            setVisiblePasswords((prev) => ({ ...prev, password: !prev.password }));
        }
        if (field === "confirmPassword") {
            setVisiblePasswords((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: string[] = [];

        if (!formData.email.includes("@")) {
            errors.push(t("signIn.errorEmail"));
        }
        if (formData.password.length < 8) {
            errors.push(t("signIn.errorPassword"));
        }

        if (errors.length > 0) {
            alert(t("signIn.errorAlert") + "\n" + errors.join("\n"));
            return;
        }

        await submit();
        if (success) {
            alert(t("signIn.successAlert"));
        }
    };

    useEffect(() => {
        if (success) {
            navigate("/profile");
        }
    }, [success]);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.title}>{t("signIn.title")}</h1>

                {/* Email */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("signIn.emailLabel")}<span className={styles.required}>{t("signIn.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <MailIcon className={styles.icon} />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder={t("signIn.emailPlaceholder")}
                            className={styles.input}
                        />
                    </div>
                </div>

                {/* Пароль */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("signIn.passwordLabel")}<span className={styles.required}>{t("signIn.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={visiblePasswords.password ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder={t("signIn.passwordPlaceholder")}
                            className={styles.input}
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility("password")}
                            className={styles.passwordToggle}
                        >
                            {visiblePasswords.password ? (
                                <EyeIcon className={styles.icon} />
                            ) : (
                                <EyeOffIcon className={styles.icon} />
                            )}
                        </button>
                    </div>
                    <div className={styles.helpText} onClick={() => navigate("/forgot-password")}>
                        {t("signIn.forgotPassword")}
                    </div>
                </div>

                {/* Кнопка */}
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    <span className={styles.buttonText}>
                        {loading ? t("signIn.submitButtonLoading") : t("signIn.submitButton")}
                    </span>
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{t("signIn.successMessage")}</p>}

                {/* Секция входа */}
                <div className={styles.loginSection}>
                    <span className={styles.loginText}>{t("signIn.noAccount")}</span>
                    <button
                        type="button"
                        className={styles.loginLink}
                        onClick={() => navigate("/register")}
                    >
                        {t("signIn.register")}
                    </button>
                </div>
            </form>

            <img className={styles.backgroundImage} alt="Background" src={authimage} />
        </div>
    );
};