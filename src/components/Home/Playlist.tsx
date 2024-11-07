import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export const Playlist = () => {
  return (
    <Grid item container p={1} xs={4} md={3} height={20}>
      <Card>
        <CardActionArea>
          <CardMedia height="100%" component="img" image="/liked_songs.jpg" />
          <CardContent>
            <Typography variant="body2" component="div">
              Liked Songs
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
