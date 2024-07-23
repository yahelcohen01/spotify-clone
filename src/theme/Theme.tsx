import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useMemo } from "react";

type Mode = "dark" | "light";

export type ThemeContext = {
  regularView: boolean;
  mode: Mode;
};

const themeContext = createContext<ThemeContext | null>(null);

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  const mode: Mode = "dark";
  const regularView = useMediaQuery("(min-width:680px)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "black" : "#fffff",
            paper: mode === "dark" ? "black" : "#fff",
          },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: "#121212",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={{ mode, regularView }}>
        {children}
      </themeContext.Provider>
    </ThemeProvider>
  );
}
export { themeContext };
