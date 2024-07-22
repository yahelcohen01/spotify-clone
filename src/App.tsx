import { useMediaQuery } from "@mui/material";
import { Home } from "./components/Home";
import { SmallHome } from "./components/SmallHome";
import "./theme/globals.css";

function App() {
  const baseView = useMediaQuery("(min-width:650px)");

  return (
    <>
      {baseView && <Home />}
      {!baseView && <SmallHome />}
    </>
  );
}
export default App;
