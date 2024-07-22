import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemIcon, MenuItem, MenuList } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export function SmallHome() {
  return (
    <Box
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: "1rem",
        gap: "0.5rem",
      }}
    >
      <Box
        style={{
          display: "grid",
          width: "10%",
          gridTemplateRows: "20% 80%",
          minWidth: "68px",
        }}
      >
        <Card sx={{ display: "grid", alignItems: "center" }}>
          <MenuList>
            <MenuItem
              sx={{
                display: "flex",
                gap: "5%",
                justifyContent: "end",
              }}
              disableRipple
            >
              <ListItemIcon>
                <HomeIcon fontSize="large" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                gap: "5%",
                justifyContent: "end",
              }}
              disableRipple
            >
              <ListItemIcon>
                <SearchIcon fontSize="large" />
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </Card>
        <Card sx={{ marginTop: "2.5%" }}>sda</Card>
      </Box>
      <Card style={{ width: "90%", minWidth: "68px" }}>asd</Card>
    </Box>
  );
}
