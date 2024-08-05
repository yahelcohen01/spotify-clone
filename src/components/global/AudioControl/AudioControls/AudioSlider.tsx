import { Slider, styled, Typography } from "@mui/material";
import { useState } from "react";
import { currentTime, timeRemaining } from "../utils";
import { CustomSlider } from "../components/CustomSlider";

export const AudioSlider = () => {
  const [value, setValue] = useState(30);
  const totalTimeInSeconds = 100;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <>
      <Typography
        fontWeight={300}
        alignSelf={"center"}
        fontSize={".8rem"}
        minWidth={"40px"}
      >
        {currentTime(value)}
      </Typography>
      <CustomSlider
        value={typeof value === "number" ? value : 0}
        onChange={(e, newValue) => {
          handleSliderChange(e, newValue);
        }}
        aria-labelledby="input-slider"
      />
      <Typography
        fontWeight={300}
        alignSelf={"center"}
        fontSize={".8rem"}
        minWidth={"40px"}
      >
        {timeRemaining(value, totalTimeInSeconds)}
      </Typography>
    </>
  );
};
