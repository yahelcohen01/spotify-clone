import { InputBase, styled, alpha } from "@mui/material";

export const CustomSearchInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 40,
    backgroundColor: "#242424",
    maxWidth: "22rem",
    padding: "15px 15px",
    transitions: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      border: "1px solid",
    },
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Search = styled("div")(({ theme }) => ({
  columnRuleWidth: "100%",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#121212",
  "&:hover": {
    opacity: 1.1,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
