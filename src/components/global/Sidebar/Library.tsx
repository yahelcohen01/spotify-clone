import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../theme/Theme";

export const Library = () => {
  const { pathname } = useLocation();
  const {
    regularView,
    sidebar: { setSideBarWIdth, sidebarWidth },
  } = useContext(themeContext) as ThemeContext;

  return (
    <Card sx={{ marginTop: ".5rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/Library">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
              opacity: pathname === "/Library" ? 1 : 0.6,
              "&:hover": { opacity: 1 },
            }}
          >
            <ListItemIcon sx={{}}>
              {pathname === "/Library" ? (
                <LibraryBooksIcon sx={{ fontSize: "29px" }} />
              ) : (
                <LibraryBooksOutlinedIcon sx={{ fontSize: "29px" }} />
              )}
            </ListItemIcon>
            {regularView && (
              <Typography
                alignSelf={"center"}
                sx={{ position: "fixed", left: "70px" }}
              >
                Your Library
              </Typography>
            )}
          </Box>
        </Link>
        {regularView && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton sx={{ alignSelf: "center" }}>
              <AddOutlinedIcon />
            </IconButton>
            {sidebarWidth === "30%" ? (
              <IconButton
                sx={{ alignSelf: "center" }}
                onClick={() => setSideBarWIdth("60%")}
              >
                <ArrowForwardOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                sx={{ alignSelf: "center" }}
                onClick={() => setSideBarWIdth("30%")}
              >
                <ArrowBackOutlinedIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>

      <CardContent>adcdscs</CardContent>
    </Card>
  );
};
