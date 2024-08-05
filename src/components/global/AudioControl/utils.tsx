import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export const currentTime = (value: number) => {
  const [minutes, seconds] = [value / 60, value % 60];
  if (minutes < 1) {
    return `00:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  return `${Math.floor(minutes)}:${seconds < 10 ? "0" : ""}${seconds}`;
};
export const timeRemaining = (value: number, totalTime: number) => {
  const reversed = totalTime - value;
  const [minutes, seconds] = [reversed / 60, reversed % 60];

  if (minutes < 1) {
    return `00:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  return `${Math.floor(minutes)}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const isWithninRange = (num: number, min: number, max: number) => {
  return num >= min && num <= max;
};

export const VolumnButtonState = (
  volumn: number,
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
) => {
  switch (true) {
    case isWithninRange(volumn, 61, 100):
      return (
        <IconButton onClick={onClick} disableRipple>
          <VolumeUpIcon />
        </IconButton>
      );
    case isWithninRange(volumn, 31, 60):
      return (
        <IconButton onClick={onClick} disableRipple>
          <VolumeDownIcon />
        </IconButton>
      );
    case isWithninRange(volumn, 1, 30):
      return (
        <IconButton onClick={onClick} disableRipple>
          <VolumeMuteIcon />
        </IconButton>
      );
    case isWithninRange(volumn, 0, 0):
      return (
        <IconButton onClick={onClick} disableRipple>
          <VolumeOffIcon />
        </IconButton>
      );
    default:
      return <></>;
  }
};
