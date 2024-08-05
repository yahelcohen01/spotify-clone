import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@mui/material";

export const Route = createFileRoute("/_sidebarLayout/search")({
  component: SearchRoute,
});

function SearchRoute() {
  return <>asd</>;
}
