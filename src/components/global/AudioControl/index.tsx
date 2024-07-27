import { Box, Typography } from "@mui/material";
import starboy from "../../../../public/theWeeknd_starboy.png";
import { Link } from "@tanstack/react-router";

const exampleTrack = {
  name: "I Feel It Coming",
  artists: ["The Weeknd", "Daft Punk"],
  image: starboy,
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
        <Box alignSelf={"center"}>
          <img
            style={{
              borderRadius: "4px",
              maxHeight: "3.5rem",
            }}
            src={exampleTrack.image}
            alt={exampleTrack.name}
            loading="lazy"
          />
        </Box>
        <Box sx={{ display: "grid", alignItems: "start", alignSelf: "end" }}>
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              {exampleTrack.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
            }}
          >
            {exampleTrack.artists.map((artist, i) => {
              const isLastIndex = i === exampleTrack.artists.length - 1;
              return (
                <Typography
                  variant="subtitle2"
                  color={"grey"}
                  alignSelf={"end"}
                >
                  {artist}
                  {!isLastIndex ? ", " : ""}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box flex={1}>controls</Box>
      <Box flex={1}>additional actions</Box>
    </Box>
  );
};
