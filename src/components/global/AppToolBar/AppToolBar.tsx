import { AppBar, Box, Grid, IconButton, Toolbar, Tooltip } from "@mui/material";
import { CustomSearchInput } from "../../search/CustomSearchInput";
import { useRouterState } from "@tanstack/react-router";
import { BackAndForward } from "./components/BackAndForward";
import { UserProfileButton } from "./components/UserProfileButton";

interface AppToolBarProps {
  opacity: number;
}

export const AppToolBar = ({ opacity }: AppToolBarProps) => {
  const {
    location: { pathname },
  } = useRouterState();

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        background: "none",
        backgroundColor: `rgba(18, 18, 18, ${opacity})`,
        height: 64,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <BackAndForward />
          {pathname === "/search" && (
            <CustomSearchInput
              placeholder="What do you want to play?"
              fullWidth
              sx={{ fontSize: ".9rem" }}
            />
          )}
        </div>
        <UserProfileButton />
      </Toolbar>
    </AppBar>
  );
};
