import { Card } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/library")({
  component: LibraryRoute,
});

function LibraryRoute() {
  return <Card style={{ width: "100%" }}>Library</Card>;
}
