import { Card } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Card style={{ width: "100%" }}>Home</Card>,
});
