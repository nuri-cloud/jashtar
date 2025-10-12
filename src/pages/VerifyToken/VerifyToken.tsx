import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./VerifyToken.module.scss";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import authimage from "@/shared/assets/images/authImage.png";
import { useVerifyStore } from "@/app/store/auth/Verify";

interface FormData {
    uid: string;
    token: string;
}

export function VerifyToken() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        uid: "",
        token: "",
    });
    const navigate = useNavigate();
    const [visibletokens, setVisibletokens] = useState({
        token: false,
    });

    const { verify, loading, error, success } = useVerifyStore();

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggletokenVisibility = () => {
        setVisibletokens((prev) => ({ ...prev, token: !prev.token }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: string[] = [];

        if (formData.token.length < 6) {
            errors.push(t("verifyToken.errorToken"));
        }

        if (errors.length > 0) {
            alert(t("verifyToken.errorAlert") + "\n" + errors.join("\n"));
            return;
        }

        await verify({
            uid: Number(formData.uid),
            token: formData.token,
        });
    };

    if (success) {
        navigate("/login");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.title}>{t("verifyToken.title")}</h1>
                <p className={styles.subtitle}>
                    {t("verifyToken.subtitle")}
                </p>

                {/* uid */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("verifyToken.uidLabel")}<span className={styles.required}>{t("verifyToken.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <MailIcon className={styles.icon} />
                        <input
                            type="text"
                            value={formData.uid}
                            onChange={(e) => handleChange("uid", e.target.value)}
                            placeholder={t("verifyToken.uidPlaceholder")}
                            className={styles.input}
                        />
                    </div>
                </div>

                {/* Код */}
                <div className={`${styles.fieldContainer} ${styles.large}`}>
                    <label className={styles.label}>
                        {t("verifyToken.tokenLabel")}<span className={styles.required}>{t("verifyToken.required")}</span>
                    </label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={visibletokens.token ? "text" : "password"}
                            value={formData.token}
                            onChange={(e) => handleChange("token", e.target.value)}
                            placeholder={t("verifyToken.tokenPlaceholder")}
                            className={styles.input}
                        />
                        <button
                            type="button"
                            onClick={toggletokenVisibility}
                            className={styles.tokenToggle}
                        >
                            {visibletokens.token ? (
                                <EyeIcon className={styles.icon} />
                            ) : (
                                <EyeOffIcon className={styles.icon} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Кнопка */}
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    <span className={styles.buttonText}>
                        {loading ? t("verifyToken.submitButtonLoading") : t("verifyToken.submitButton")}
                    </span>
                </button>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{t("verifyToken.successMessage")}</p>}

                {/* Секция входа */}
                <div className={styles.loginSection}>
                    <span className={styles.loginText}>{t("verifyToken.noAccount")}</span>
                    <button
                        type="button"
                        className={styles.loginLink}
                        onClick={() => { navigate("/register"); }}  
                    >
                        {t("verifyToken.register")}
                    </button>
                </div>
            </form>

            <img className={styles.backgroundImage} alt="Background" src={authimage} />
        </div>
    );
}