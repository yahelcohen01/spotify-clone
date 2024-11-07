import { Grid } from "@mui/material";
import { MainPlaylists } from "./MainPlaylists";

export function Home() {
  return (
    <Grid
      alignContent="flex-start"
      style={{ width: "100%", height: 1000, overflowY: "scroll" }}
      container
    >
      <MainPlaylists />
    </Grid>
  );
}
