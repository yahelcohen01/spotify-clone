import { Box } from "@mui/system";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../theme/Theme";
import { Library } from "./Library/Library";
import { Navigation } from "./Navigation";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const {
    regularView,
    sidebar: { sidebarWidth },
  } = useContext(themeContext) as ThemeContext;

  return (
    <Box
      sx={{
        display: "grid",
        width: regularView ? sidebarWidth : "68px !important",
        minWidth: "68px",
        height: "87vh",
        gridTemplateRows: "20% 80%",
      }}
    >
      <Navigation />
      <Library />
    </Box>
  );
};
