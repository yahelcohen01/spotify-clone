import { SongInfo } from "./SongInfo";
import { AudioControls } from "./AudioControls";
import "./style.css";
import { Box, Typography } from "@mui/material";

const exampleTrack = {
  name: "I Feel It Coming",
  artists: ["The Weeknd", "Daft Punk"],
  image: "/theWeeknd_starboy.png",
};

export const Controls = () => {
  return (
    <Box
      sx={{
        minHeight: "9vh",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <Box
        flex={1}
        sx={{ display: "flex", justifyContent: "left", columnGap: "1rem" }}
      >
        <SongInfo />
      </Box>
      <Box flex={1} sx={{ display: "flex", flexDirection: "column" }}>
        <AudioControls />
      </Box>
      <Box flex={1}>additional actions</Box>
    </Box>
  );
};
