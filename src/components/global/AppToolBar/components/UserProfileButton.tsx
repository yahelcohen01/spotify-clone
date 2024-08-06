import { Box, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { MenuPopper } from "../../general/menuPopper";

const user = {
  firstName: "Yahel",
  lastName: "Cohen",
};

const userOptions = ["Account", "Profile", "Settings"];

export const UserProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  // const openPopover = (e: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(e.currentTarget);
  // };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const { Component, openPopover } = MenuPopper({ options: userOptions });

  return (
    <>
      <Tooltip title={user.firstName} placement="bottom">
        <Box
          sx={{
            display: "grid",
            color: "black",
            backgroundColor: "#b49bc8",
            borderRadius: "15px",
            height: "30px",
            width: "30px",
            alignItems: "center",
            justifyItems: "center",
            fontSize: "1rem",
            fontWeight: 500,
            border: "3px black solid",
            cursor: "pointer",
          }}
          onClick={openPopover}
        >
          {user.firstName[0]}
        </Box>
      </Tooltip>
      <Component />
    </>
  );
};
