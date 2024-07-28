import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

import { useState } from "react";
import { SongInfo } from "./SongInfo";

export const Controls = () => {
  return (
    <Box
      sx={{
        minHeight: "9vh",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <Box
        flex={1}
        sx={{ display: "flex", justifyContent: "left", columnGap: "1rem" }}
      >
        <SongInfo />
      </Box>
      <Box flex={1}>
        <Controls />
      </Box>
      <Box flex={1}>additional actions</Box>
    </Box>
  );
};
