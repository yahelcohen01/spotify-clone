import { Box } from "@mui/material";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { Controls } from "../components/global/AudioControl";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});
