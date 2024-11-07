import { Grid } from "@mui/material";
import { Playlist } from "./Playlist";

export const MainPlaylists = () => {
  return (
    <Grid container item padding={3}>
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </Grid>
  );
};
