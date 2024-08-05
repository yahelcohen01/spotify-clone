import { IconButton, Tooltip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const BackAndForward = () => {
  return (
    <>
      <Tooltip title="Go back" placement="bottom">
        <IconButton
          sx={{ backgroundColor: "#121212" }}
          size="small"
          edge="start"
        >
          <ChevronLeftIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Go forward" placement="bottom">
        <IconButton
          sx={{ backgroundColor: "#121212" }}
          size="small"
          edge="start"
        >
          <ChevronRightIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
