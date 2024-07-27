import React, { useContext } from "react";
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
import { Link, useRouterState } from "@tanstack/react-router";

export const Navigation = () => {
  const {
    location: { pathname },
  } = useRouterState();
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
                justifyContent: "center",
                display: "flex",
                opacity: pathname === "/" ? 1 : 0.6,
                "&:hover": { opacity: 1 },
              }}
            >
              {pathname === "/" ? (
                <HomeIcon sx={{ fontSize: "31px" }} />
              ) : (
                <HomeOutlinedIcon sx={{ fontSize: "31px" }} />
              )}
            </ListItemIcon>
            {regularView && (
              <Typography
                sx={{
                  position: "fixed",
                  left: "70px",
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
            <ListItemIcon
              sx={{
                justifyContent: "center",
                display: "flex",
                opacity: pathname === "/search" ? 1 : 0.6,
              }}
            >
              <SearchIcon sx={{ fontSize: "33px" }} />
            </ListItemIcon>
            {regularView && (
              <Typography
                color={pathname === "/search" ? "white" : "#b3b3b3"}
                sx={{ position: "fixed", left: "70px" }}
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
