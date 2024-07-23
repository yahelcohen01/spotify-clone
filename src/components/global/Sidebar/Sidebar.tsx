import {
  Card,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../theme/Theme";
import { Navigation } from "./Navigation";
import { Library } from "./Library";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const { regularView } = useContext(themeContext) as ThemeContext;

  return (
    <Box
      sx={{
        display: "grid",
        width: regularView ? "20%" : "10%",
        gridTemplateRows: "20% 80%",
        minWidth: regularView ? null : "68px",
      }}
    >
      <Navigation />
      <Library />
    </Box>
  );
};
