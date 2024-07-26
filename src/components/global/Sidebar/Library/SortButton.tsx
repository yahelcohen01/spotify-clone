import { Button, styled } from "@mui/material";

export const SortButton = styled(Button)({
  boxShadow: "none",
  fontWeight: 500,
  color: "#b3b3b3",
  textTransform: "none",
  fontSize: ".6em",
  padding: "6px 12px",
  lineHeight: 1.5,
  transition: "all 0.3s ease",
  backgroundColor: "transparent",
  borderColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "transparent",
    boxShadow: "none",
    color: "#fff",
    transform: "scale(1.1)",
  },
});
