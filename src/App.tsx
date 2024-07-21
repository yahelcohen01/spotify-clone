import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import "./theme/globals.css";

function App() {
  return (
    <>
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
            width: "20%",
            gap: "0.5rem",
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
          <Card>sda</Card>
        </Box>
        <Card style={{ width: "80%" }}>asd</Card>
      </Box>
    </>
  );
}
export default App;
