import { Box, IconButton } from "@mui/material";
import { themeContext, ThemeContext } from "../../../../theme/Theme";
import { useContext } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export const ButtonsGroup = () => {
  const {
    sidebar: { setSideBarWIdth, sidebarWidth },
  } = useContext(themeContext) as ThemeContext;

  return (
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
  );
};
