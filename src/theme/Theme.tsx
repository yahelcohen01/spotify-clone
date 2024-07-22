import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useMemo } from "react";

type Mode = "dark" | "light";

export type ThemeContext = {
  smallView: boolean;
  mode: Mode;
};

const themeContext = createContext<ThemeContext | null>(null);

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  const mode: Mode = "dark";
  const smallView = useMediaQuery("(min-width:680px)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "var(--background-base)" : "#fffff",
            paper: mode === "dark" ? "#121212" : "#fff",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={{ mode, smallView }}>
        {children}
      </themeContext.Provider>
    </ThemeProvider>
  );
}
export { themeContext };
