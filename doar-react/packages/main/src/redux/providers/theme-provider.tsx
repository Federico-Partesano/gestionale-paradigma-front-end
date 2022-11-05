import { ThemeProvider, themes } from "@doar/shared/styled";
import { GlobalStyle } from "@doar/shared/css";
import { TTheme } from "@doar/shared/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleTheme } from "../slices/theme";
import SettingsCard from "../../components/settings";

const Theme = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.theme);

    const themeHandler = (curTheme: TTheme) => {
        dispatch(toggleTheme({ theme: curTheme }));
    };

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <SettingsCard themeHandler={themeHandler} curTheme={theme} />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
