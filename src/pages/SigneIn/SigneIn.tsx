import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import styles from "./SignIn.module.scss";
import authimage from "@/shared/assets/images/authImage.png";
import { useLogeinStore } from "@/app/store/auth/signein";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

export const SignIn = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [visiblePasswords, setVisiblePasswords] = useState({
        password: false,
        confirmPassword: false,
    });

    const { setField, submit, loading, error, success } = useLogeinStore();

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
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: string[] = [];

        if (!formData.email.includes("@")) {
            errors.push("Некорректный email");
        }
        if (formData.password.length < 8) {
            errors.push("Пароль должен содержать минимум 8 символов");
        }
       

        if (errors.length > 0) {
            alert("Ошибки в форме:\n" + errors.join("\n"));
            return;
        }

        await submit();
    };

    if(success) {
        navigate("/profile");
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.title}>Добро пожаловать!</h1>

                {/* Email */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        Email<span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <MailIcon className={styles.icon} />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="example@mail.com"
                            className={styles.input}
                        />
                    </div>
                </div>

                {/* Пароль */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        Пароль<span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={visiblePasswords.password ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder="Введите пароль"
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
                    <div className={styles.helpText}>Забыли пароль?</div>
                </div>

                {/* Кнопка */}
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    <span className={styles.buttonText}>
                        {loading ? "Входим..." : "Продолжить"}
                    </span>
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>Успешный вход!</p>}

                {/* Секция входа */}
                <div className={styles.loginSection}>
                    <span className={styles.loginText}>Нет аккаунта?</span>
                    <button
                        type="button"
                        className={styles.loginLink}
                        onClick={() => alert("Переход на страницу регистрации")}
                    >
                        Регистрация
                    </button>
                </div>
            </form>

            <img className={styles.backgroundImage} alt="Background" src={authimage} />
        </div>
    );
};
