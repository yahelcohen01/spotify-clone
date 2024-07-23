import Card from "@mui/material/Card";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../theme/Theme";

export function Home() {
  const { smallView } = useContext(themeContext) as ThemeContext;

  return <Card style={{ width: smallView ? "90%" : "80%" }}>asd</Card>;
}
