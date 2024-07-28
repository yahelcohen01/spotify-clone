import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useMemo, useState } from "react";
import { SetState } from "../types/types";

type Mode = "dark" | "light";
type SidebarWidth = "60%" | "30%";

export type ThemeContext = {
  mode: string;
  regularView: boolean;
  sidebar: {
    sidebarWidth: SidebarWidth;
    setSideBarWIdth: SetState<SidebarWidth>;
  };
};

const themeContext = createContext<ThemeContext | null>(null);

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  const mode: Mode = "dark";
  const regularView = useMediaQuery("(min-width:1100px)");
  const [sidebarWidth, setSideBarWIdth] = useState<SidebarWidth>("30%");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#121212" : "#fffff",
            paper: mode === "dark" ? "#121212" : "#fff",
          },
        },
        components: {
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                backgroundColor: "#2f2f2f",
              },
            },
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                padding: "0",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                fontWeight: 400,
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: "#121212",
                borderRadius: "8px",
              },
            },
          },
        },
      }),
    [mode]
  );

  const contextValue: ThemeContext = {
    mode,
    regularView,
    sidebar: {
      sidebarWidth,
      setSideBarWIdth,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={contextValue}>
        {children}
      </themeContext.Provider>
    </ThemeProvider>
  );
}
export { themeContext };
