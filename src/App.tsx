import { Box, Card } from "@mui/material";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./theme/globals.css";
import { ThemeContext, themeContext } from "./theme/Theme";

function App() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          minHeight: "87vh",
          padding: ".5rem",
          columnGap: ".5rem",
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="search"
            element={<Card style={{ width: "100%" }}>asd</Card>}
          />
          <Route
            path="Library"
            element={<Card style={{ width: "100%" }}>asd</Card>}
          />
        </Routes>
      </Box>
    </>
  );
}
export default App;
