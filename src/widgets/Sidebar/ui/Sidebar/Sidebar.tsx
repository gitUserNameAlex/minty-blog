import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={toggle} type="button">toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.langBtn} />
            </div>
        </div>
    );
};

export default Sidebar;
