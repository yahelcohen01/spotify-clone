import {
  NotFoundRoute,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { NotFound } from "./components/notFound/NotFound";
import { routeTree } from "./routeTree.gen";
import { Route } from "./routes/__root";
import "./theme/globals.css";

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
