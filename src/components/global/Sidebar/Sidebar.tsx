import { Box } from "@mui/system";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../theme/Theme";
import { Navigation } from "./Navigation";
// import { Library } from "../../sidebar/Library";
import { Library } from "./Library/Library";

interface SidebarProps {}

// eslint-disable-next-line no-empty-pattern
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
