import { Slider, styled } from "@mui/material";

const BoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

export const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#0a84ff",
  height: 5,
  padding: "15px 0",
  "&:hover": {
    "& .MuiSlider-thumb": { visibility: "visible" },
    "& .MuiSlider-track": {
      backgroundColor: "#1db954",
    },
  },
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
    visibility: "hidden",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
      "@media (hover: none)": {
        boxShadow: BoxShadow,
      },
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
    backgroundColor: "#fff",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));
