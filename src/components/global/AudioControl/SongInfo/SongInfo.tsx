import { useState } from "react";
import starboy from "../../../../../public/theWeeknd_starboy.png";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const values = {
  name: "I Feel It Coming",
  artists: ["The Weeknd", "Daft Punk"],
  image: starboy,
  isInLibrary: true,
};

export const SongInfo = () => {
  const [exampleTrack, setExampleTrack] = useState(values);

  const AddorRemoveToLibrary = () =>
    setExampleTrack({
      ...exampleTrack,
      isInLibrary: !exampleTrack.isInLibrary,
    });
  return (
    <Grid container>
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
      <Box
        sx={{
          display: "grid",
          alignItems: "start",
          gridTemplateRows: "60% 40%",
        }}
      >
        <Box display={"grid"} alignSelf={"end"}>
          <Link to="/">
            <Typography
              fontSize={".95rem"}
              fontWeight={400}
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {exampleTrack.name}
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {exampleTrack.artists.map((artist, i) => {
            const isLastIndex = i === exampleTrack.artists.length - 1;
            return (
              <Box display={"grid"} alignItems={"start"} minHeight={"1rem"}>
                <Link to="/">
                  <Typography
                    fontWeight={400}
                    color={"#adadad"}
                    fontSize={"0.75rem"}
                    sx={{
                      opacity: 0.7,
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#fff",
                        opacity: 1,
                      },
                    }}
                  >
                    {artist}
                    {!isLastIndex ? ", " : ""}
                  </Typography>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box display={"grid"} alignItems={"center"}>
        {exampleTrack.isInLibrary ? (
          <Tooltip title="Remove from Playlist">
            <IconButton onClick={AddorRemoveToLibrary} size="small">
              <CheckCircleIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add to Playlist" onClick={AddorRemoveToLibrary}>
            <IconButton onClick={AddorRemoveToLibrary} size="small">
              <CheckCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Grid>
  );
};
