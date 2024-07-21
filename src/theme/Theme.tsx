import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useMemo } from "react";

type Mode = "dark" | "light";

type DarkModeContext = {
  mode: Mode;
};

const darkModeContext = createContext<DarkModeContext | null>(null);

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  const mode: Mode = "dark";

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
      <darkModeContext.Provider value={{ mode }}>
        {children}
      </darkModeContext.Provider>
    </ThemeProvider>
  );
}
