import { Box, Tooltip } from "@mui/material";
import { SetState } from "../../../../types/types";
import { VolumnButtonState } from "../utils";

interface VolumnButtonProps {
  volumn: number;
  setVolumn: SetState<number>;
}

export const VolumnButton = ({ volumn, setVolumn }: VolumnButtonProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (volumn === 0) {
      setVolumn(50);
      return;
    }
    setVolumn(0);
  };
  return (
    <>
      <Box>
        <Tooltip title={volumn ? "Mute" : "Unmute"}>
          {VolumnButtonState(volumn, onClick)}
        </Tooltip>
      </Box>
    </>
  );
};
