import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './EditProfile.module.scss';
import { useEditProfileStore } from '@/app/store/Profile/EditProfile';

interface FormData {
    telegram_channel: string;
    google_form_link: string;
}
interface EditProfileProps {
    onCallBack: () => void;
}

export const EditProfile = ({ onCallBack }: EditProfileProps) => {
    const { t } = useTranslation();
    const { profile, loading, error, updateProfile } = useEditProfileStore();
    const [formData, setFormData] = useState<FormData>({
        telegram_channel: '',
        google_form_link: ''
    });
    const [saved, setSaved] = useState<boolean>(false);

    // Загружаем данные профиля при монтировании компонента
    useEffect(() => {
        if (profile) {
            setFormData({
                telegram_channel: profile.telegram_channel || '',
                google_form_link: profile.google_form_link || ''
            });
        }
    }, [profile]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();

        try {
            await updateProfile(formData);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
            onCallBack();
        } catch (err) {
            console.error('Error updating profile:', err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>{t('profile.editProfilePage.title')}</h1>
                <p className={styles.subtitle}>{t('profile.editProfilePage.subtitle')}</p>

                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('profile.editProfilePage.telegramLabel')}</label>
                        <input
                            type="text"
                            name="telegram_channel"
                            value={formData.telegram_channel}
                            onChange={handleChange}
                            placeholder={t('profile.editProfilePage.telegramPlaceholder')}
                            className={styles.input}
                            disabled={loading}
                        />
                        <p className={styles.hint}>{t('profile.editProfilePage.telegramHint')}</p>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('profile.editProfilePage.googleFormLabel')}</label>
                        <input
                            type="url"
                            name="google_form_link"
                            value={formData.google_form_link}
                            onChange={handleChange}
                            placeholder={t('profile.editProfilePage.googleFormPlaceholder')}
                            className={styles.input}
                            disabled={loading}
                        />
                        <p className={styles.hint}>{t('profile.editProfilePage.googleFormHint')}</p>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className={styles.button}
                        disabled={loading}
                    >
                        <Send size={16} />
                        {loading ? t('profile.editProfilePage.buttonLoading') : t('profile.editProfilePage.buttonSave')}
                    </button>

                    {saved && (
                        <div className={styles.successMessage}>
                            <CheckCircle size={18} />
                            {t('profile.editProfilePage.successMessage')}
                        </div>
                    )}

                    {error && (
                        <div className={styles.errorMessage}>
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};