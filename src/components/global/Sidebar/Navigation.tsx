import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { themeContext, ThemeContext } from "../../../theme/Theme";
import {
  Card,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";

export const Navigation = () => {
  const { pathname } = useLocation();
  const { regularView } = useContext(themeContext) as ThemeContext;
  return (
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
            {regularView && (
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
            {regularView && (
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
  );
};
