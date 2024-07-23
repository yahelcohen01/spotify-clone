import {
  Card,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../theme/Theme";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const { pathname } = useLocation();
  const { smallView } = useContext(themeContext) as ThemeContext;

  return (
    <Box
      sx={{
        display: "grid",
        width: smallView ? "20%" : "10%",
        gridTemplateRows: "20% 80%",
        minWidth: smallView ? null : "68px",
      }}
    >
      <Card sx={{ display: "grid", alignItems: "center" }}>
        <MenuList>
          <Link to="/">
            <MenuItem
              sx={{
                display: "flex",
                gap: "5%",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
              disableRipple
            >
              <ListItemIcon
                sx={{
                  opacity: pathname === "/" ? 1 : 0.6,
                  "&:hover": { opacity: 1 },
                }}
              >
                {pathname === "/" ? (
                  <HomeIcon fontSize="large" />
                ) : (
                  <HomeOutlinedIcon fontSize="large" />
                )}
              </ListItemIcon>
              {smallView && (
                <Typography
                  fontWeight={700}
                  sx={{
                    "&:hover": {
                      transition: 0.5,
                      color: "white",
                      animation: "text 5s ease infinite",
                    },
                    "@keyframes text": {
                      "0%": {
                        textShadow: "none",
                      },
                      "100%": {
                        textShadow: "0 0 1px #fff",
                      },
                    },
                  }}
                  color={pathname === "/" ? "white" : "#b3b3b3"}
                >
                  Home
                </Typography>
              )}
            </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem
              sx={{
                display: "flex",
                gap: "5%",
                "&:hover": {
                  backgroundColor: "transparent",
                  textShadow: "0 0 1px #fff",
                  color: "white",
                },
              }}
              disableRipple
            >
              <ListItemIcon sx={{ opacity: pathname === "/search" ? 1 : 0.6 }}>
                <SearchIcon fontSize="large" />
              </ListItemIcon>
              {smallView && (
                <Typography
                  fontWeight={700}
                  color={pathname === "/search" ? "white" : "#b3b3b3"}
                >
                  Search
                </Typography>
              )}
            </MenuItem>
          </Link>
        </MenuList>
      </Card>
      <Card sx={{ marginTop: "2.5%" }}>sda</Card>
    </Box>
  );
};
