import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_sidebarLayout/search")({
  component: SearchRoute,
});

function SearchRoute() {
  return <>asd</>;
}
