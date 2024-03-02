import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Theme, useTheme } from 'shared/providers/ThemeProvider';

import cls from './ThemeSwitcher.module.scss';
import Button, { ThemeButton } from '../Button/Button';

interface ThemeSwitcherProps {
    className?: string,
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
