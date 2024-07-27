import { Card } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../../components/home/Home";

export const Route = createFileRoute("/_sidebarLayout/")({
  component: () => <Home />,
});
