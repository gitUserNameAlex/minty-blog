import { useState, useMemo, FC } from "react"
import { ThemeContext } from "./ThemeContext"
import { Theme } from "./ThemeContext"
import { LOCAL_STORAGE_THEME_KEY } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
			theme: theme,
			setTheme: setTheme,
		}),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}