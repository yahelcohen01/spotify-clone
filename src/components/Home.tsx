import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemIcon, MenuItem, MenuList } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export function Home() {
  return (
    <Box
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: "1rem",
        columnGap: "0.5rem",
      }}
    >
      <Box
        style={{
          display: "grid",
          width: "20%",
          gridTemplateRows: "20% 80%",
        }}
      >
        <Card sx={{ display: "grid", alignItems: "center" }}>
          <MenuList>
            <MenuItem sx={{ display: "flex", gap: "5%" }} disableRipple>
              <ListItemIcon>
                <HomeIcon fontSize="large" />
              </ListItemIcon>
              <Typography fontWeight={700}>Home</Typography>
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: "5%" }} disableRipple>
              <ListItemIcon>
                <SearchIcon fontSize="large" />
              </ListItemIcon>
              <Typography fontWeight={700}>Search</Typography>
            </MenuItem>
          </MenuList>
        </Card>
        <Card sx={{ marginTop: "2.5%" }}>sda</Card>
      </Box>
      <Card style={{ width: "80%" }}>asd</Card>
    </Box>
  );
}
