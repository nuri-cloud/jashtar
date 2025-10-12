import React, { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./Register.module.scss";
import authimage from "@/shared/assets/images/authImage.png";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth/register";

interface FormData {
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Register = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const { register, loading, error, success, user } = useAuthStore();

    const [visiblePasswords, setVisiblePasswords] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const togglePasswordVisibility = (field: keyof FormData) => {
        if (field === "password")
            setVisiblePasswords((prev) => ({ ...prev, password: !prev.password }));
        if (field === "confirmPassword")
            setVisiblePasswords((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
            }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: string[] = [];

        if (formData.lastName.length < 3) {
            errors.push(t("register.errorLastName"));
        }
        if (!formData.firstName.trim()) {
            errors.push(t("register.errorFirstName"));
        }
        if (!formData.middleName.trim()) {
            errors.push(t("register.errorMiddleName"));
        }
        if (!formData.email.includes("@")) {
            errors.push(t("register.errorEmail"));
        }
        if (formData.password.length < 8) {
            errors.push(t("register.errorPassword"));
        }
        if (formData.password !== formData.confirmPassword) {
            errors.push(t("register.errorPasswordMismatch"));
        }

        if (errors.length > 0) {
            alert(t("register.errorAlert") + "\n" + errors.join("\n"));
            return;
        }

        // подготовка full_name для API
        const full_name = `${formData.lastName} ${formData.firstName} ${formData.middleName}`;

        await register({
            surname: formData.lastName,
            second_name: formData.lastName,
            name: formData.firstName,
            full_name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.confirmPassword,
        });
    };

    useEffect(() => {
        if (success) {
            navigate("/verify-email");
        }
    }, [success, navigate]);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.title}>{t("register.title")}</h1>
                <div className={styles.fieldsContainer}>
                    {/* Фамилия */}
                    <div className={`${styles.fieldContainer} ${styles.small}`}>
                        <label className={styles.label}>
                            {t("register.lastNameLabel")}<span className={styles.required}>{t("register.required")}</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <UserIcon className={styles.icon} />
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleChange("lastName", e.target.value)}
                                placeholder={t("register.lastNamePlaceholder")}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.helpText}>
                            {t("register.lastNameHint")}
                        </div>
                    </div>

                    {/* Имя */}
                    <div className={`${styles.fieldContainer} ${styles.small}`}>
                        <label className={styles.label}>
                            {t("register.firstNameLabel")}<span className={styles.required}>{t("register.required")}</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <UserIcon className={styles.icon} />
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleChange("firstName", e.target.value)}
                                placeholder={t("register.firstNamePlaceholder")}
                                className={styles.input}
                            />
                        </div>
                    </div>
                </div>

                {/* Отчество */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("register.middleNameLabel")}<span className={styles.required}>{t("register.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <UserIcon className={styles.icon} />
                        <input
                            type="text"
                            value={formData.middleName}
                            onChange={(e) => handleChange("middleName", e.target.value)}
                            placeholder={t("register.middleNamePlaceholder")}
                            className={styles.input}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("register.emailLabel")}<span className={styles.required}>{t("register.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <MailIcon className={styles.icon} />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder={t("register.emailPlaceholder")}
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.fieldsContainer}>
                    {/* Пароль */}
                    <div className={`${styles.fieldContainer} ${styles.small}`}>
                        <label className={styles.label}>
                            {t("register.passwordLabel")}<span className={styles.required}>{t("register.required")}</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <input
                                type={visiblePasswords.password ? "text" : "password"}
                                value={formData.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                                placeholder={t("register.passwordPlaceholder")}
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
                        <div className={styles.helpText}>
                            {t("register.passwordHint")}
                        </div>
                    </div>

                    {/* Повтор пароля */}
                    <div className={`${styles.fieldContainer} ${styles.medium}`}>
                        <label className={styles.label}>
                            {t("register.confirmPasswordLabel")}<span className={styles.required}>{t("register.required")}</span>
                        </label>
                        <div className={styles.inputWrapper}>
                            <input
                                type={visiblePasswords.confirmPassword ? "text" : "password"}
                                value={formData.confirmPassword}
                                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                                placeholder={t("register.confirmPasswordPlaceholder")}
                                className={styles.input}
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility("confirmPassword")}
                                className={styles.passwordToggle}
                            >
                                {visiblePasswords.confirmPassword ? (
                                    <EyeIcon className={styles.icon} />
                                ) : (
                                    <EyeOffIcon className={styles.icon} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Кнопка */}
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? t("register.submitButtonLoading") : t("register.submitButton")}
                </button>

                {/* Ошибки */}
                {error && <div className={styles.errorText}>{error}</div>}

                {/* Секция входа */}
                <div className={styles.loginSection}>
                    <span className={styles.loginText}>{t("register.haveAccount")}</span>
                    <button
                        type="button"
                        className={styles.loginLink}
                        onClick={() => navigate("/login")}
                    >
                        {t("register.signIn")}
                    </button>
                </div>
            </form>

            <img className={styles.backgroundImage} alt="Background" src={authimage} />
        </div>
    );
};