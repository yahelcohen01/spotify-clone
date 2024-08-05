import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import { CustomSearchInput } from "../../search/CustomSearchInput";

import { useRouterState } from "@tanstack/react-router";
import { BackAndForward } from "./components/BackAndForward";
import { UserProfileButton } from "./components/UserProfileButton";

export const AppToolBar = () => {
  const {
    location: { pathname },
  } = useRouterState();

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "primary", all: "unset" }}
    >
      <Toolbar sx={{ display: "flex", gap: ".5rem" }}>
        <BackAndForward />
        {pathname === "/search" && (
          <CustomSearchInput
            placeholder="What do you want to play?"
            fullWidth
            sx={{ fontSize: ".9rem", flex: 1 }}
          />
        )}
        <UserProfileButton />
      </Toolbar>
    </AppBar>
  );
};
