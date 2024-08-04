import { Box, Grid } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { Controls } from "../components/global/AudioControl";

export const Route = createFileRoute("/_sidebarLayout")({
  component: () => (
    <Grid container height="100%">
      <Grid item xs={12}
        style={{
          display: "flex",
          padding: ".5rem",
          columnGap: ".5rem",
        }}
      >
        <Sidebar />
        <Outlet />
      </Grid>
      <Grid item xs={12} padding={".5rem"}>
        <Controls />
      </Grid>
    </Grid>
  ),
});
