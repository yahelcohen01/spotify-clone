import { Box } from "@mui/material";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { Controls } from "../components/global/AudioControl";

export const Route = createRootRoute({
  component: () => (
    <>
      <Box
        style={{
          display: "flex",
          minHeight: "87vh",
          padding: ".5rem",
          columnGap: ".5rem",
        }}
      >
        <Sidebar />
        <Outlet />
      </Box>
      <Box padding={".5rem"}>
        <Controls />
      </Box>
    </>
  ),
});
