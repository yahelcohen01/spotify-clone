import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { Link, useRouterState } from "@tanstack/react-router";
import { useContext } from "react";
import { themeContext, ThemeContext } from "../../../../theme/Theme";

export const LibraryButton = () => {
  const {
    location: { pathname },
  } = useRouterState();
  const { regularView } = useContext(themeContext) as ThemeContext;
  return (
    <Link to="/library">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          opacity: pathname === "/Library" ? 1 : 0.6,
          "&:hover": { opacity: 1 },
        }}
      >
        <ListItemIcon>
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
  );
};
