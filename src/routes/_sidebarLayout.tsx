import { Box } from "@mui/material";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Controls } from "../components/global/AudioControl";
import { Sidebar } from "../components/global/Sidebar/Sidebar";

export const Route = createFileRoute("/_sidebarLayout")({
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
      <Controls />
    </>
  ),
});
