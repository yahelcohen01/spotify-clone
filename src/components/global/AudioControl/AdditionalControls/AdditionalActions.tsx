import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { CustomSlider } from "../components/CustomSlider";
import { VolumnButton } from "./VolumnButton";

export const AdditionalActions = () => {
  const [volumn, setVolumn] = useState(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setVolumn(newValue as number);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignSelf={"center"}
      flex={1}
    >
      <Tooltip title={"Queue"} placement="top">
        <IconButton disableRipple>
          <HorizontalSplitOutlinedIcon />
        </IconButton>
      </Tooltip>
      <VolumnButton volumn={volumn} setVolumn={setVolumn} />
      <CustomSlider
        sx={{ maxWidth: "100px", alignSelf: "center" }}
        value={volumn}
        onChange={(e, newValue) => {
          handleSliderChange(e, newValue);
        }}
        aria-labelledby="input-slider-volumn"
      />
    </Box>
  );
};
