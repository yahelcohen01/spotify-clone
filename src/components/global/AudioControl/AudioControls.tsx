import { Box, IconButton, Tooltip } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import { useState } from "react";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

export const AudioControls = () => {
  const [isShrinking, setIsShrinking] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
    setIsShrinking(true);
    setTimeout(() => setIsShrinking(false), 100); // Reset after animation duration
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        flex={1}
      >
        <Box display={"flex"} flex={1} justifyContent={"flex-end"}>
          <IconButton
            disableRipple
            sx={{
              opacity: 0.6,
              transition: "opacity 0.1s ease",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <ShuffleIcon />
          </IconButton>
          <Tooltip placement="top" title="Previous">
            <IconButton
              disableRipple
              sx={{
                opacity: 0.6,
                transition: "opacity 0.1s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <FirstPageOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box alignSelf={"center"}>
          {playing ? (
            <Tooltip placement="top" title="Play" sx={{}}>
              <IconButton
                sx={{ padding: "0" }}
                disableRipple
                className={`shrink-button ${isShrinking ? "shrink" : ""}`}
                onClick={handleClick}
              >
                <PlayCircleIcon sx={{ fontSize: "40px" }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip placement="top" title="Pause">
              <IconButton
                sx={{ padding: "0" }}
                disableRipple
                className={`shrink-button ${isShrinking ? "shrink" : ""}`}
                onClick={handleClick}
              >
                <PauseCircleIcon sx={{ fontSize: "40px" }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <Box flex={1} display={"flex"} justifyContent={"flex-start"}>
          <Tooltip placement="top" title="Next">
            <IconButton
              disableRipple
              sx={{
                opacity: 0.6,
                transition: "opacity 0.1s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <LastPageRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title="Enable repeat">
            <IconButton
              disableRipple
              sx={{
                opacity: 0.6,
                transition: "opacity 0.1s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <RepeatRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box>ooooo</Box>
    </>
  );
};
