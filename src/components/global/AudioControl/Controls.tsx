import { SongInfo } from "./SongInfo/SongInfo";
import { AudioControls } from "./AudioControls/AudioControls";
import "./style.css";
import { Box } from "@mui/material";
import { AdditionalActions } from "./AdditionalControls/AdditionalActions";

export const Controls = () => {
  return (
    <Box
      sx={{
        height: 72,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          columnGap: "1rem",
          width: "30%",
        }}
      >
        <SongInfo />
      </Box>
      <Box
        flex={1}
        sx={{ display: "flex", flexDirection: "column", width: "40%" }}
      >
        <AudioControls />
      </Box>
      <Box display={"flex"} justifyContent={"center"} sx={{ width: "30%" }}>
        <AdditionalActions />
      </Box>
    </Box>
  );
};
