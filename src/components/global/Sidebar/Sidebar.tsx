import { Box } from "@mui/system";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../theme/Theme";
import { Navigation } from "./Navigation";
import { Library } from "./Library/Library";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const {
    regularView,
    sidebar: { sidebarWidth },
  } = useContext(themeContext) as ThemeContext;

  return (
    <Box
      sx={{
        width: regularView ? sidebarWidth : "68px !important",
        minWidth: "68px",
        height: "100%",
      }}
    >
      <Navigation />
      <Library />
    </Box>
  );
};
