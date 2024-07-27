import "./theme/globals.css";
import {
  NotFoundRoute,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Route } from "./routes/__root";
import { NotFound } from "./components/notFound/NotFound";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => Route,
  component: () => <NotFound />,
});

const router = createRouter({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
