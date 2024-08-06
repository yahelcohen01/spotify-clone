import {  Card, Grid } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { Controls } from "../components/global/AudioControl/Controls";
import { AppToolBar } from "../components/global/AppToolBar/AppToolBar";

export const Route = createFileRoute("/_sidebarLayout")({
  component: () => (
    <Grid container height="100%">
      <Grid item xs={12}
        style={{
          height: 'calc(100% - 72px)',
          display: "flex",
          padding: ".5rem",
          columnGap: ".5rem",
        }}
      >
        <Sidebar />
        <Card sx={{ width: "100%", backgroundColor: "#0a0a0a" }}>
          <AppToolBar />
          <Outlet />
        </Card>
      </Grid>
      <Controls />
    </Grid>
  ),
});
