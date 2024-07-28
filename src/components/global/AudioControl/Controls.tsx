import { Box, IconButton, Tooltip } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

export const Controls = () => {
  return (
    <>
      <Box>
        <IconButton>
          <ShuffleIcon />
        </IconButton>
        <Tooltip title="Previous">
          <IconButton>
            <FirstPageOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Play">
          <IconButton>
            <PlayCircleRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Next">
          <IconButton>
            <LastPageRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Enable repeat">
          <IconButton>
            <RepeatRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};
