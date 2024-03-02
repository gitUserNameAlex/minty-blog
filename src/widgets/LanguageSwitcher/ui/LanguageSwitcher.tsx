import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string,
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const switchLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={switchLanguage}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.languageSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};

export default LanguageSwitcher;
