import { Box, Card } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Sidebar } from "./components/global/Sidebar/Sidebar";
import "./theme/globals.css";
import { useContext } from "react";
import { ThemeContext, themeContext } from "./theme/Theme";

function App() {
  const { regularView: smallView } = useContext(themeContext) as ThemeContext;
  return (
    <>
      <Box
        style={{
          display: "flex",
          minHeight: "90vh",
          padding: "1rem",
          columnGap: "0.5rem",
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="search"
            element={
              <Card style={{ width: smallView ? "90%" : "80%" }}>asd</Card>
            }
          />
        </Routes>
      </Box>
    </>
  );
}
export default App;
