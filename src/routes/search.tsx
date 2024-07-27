import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@mui/material";

export const Route = createFileRoute("/search")({
  component: SearchRoute,
});

function SearchRoute() {
  return <Card style={{ width: "100%" }}>Search</Card>;
}
