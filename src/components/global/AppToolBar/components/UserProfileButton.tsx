/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../helpers/axios";
import type { User } from "../../../../types/user";
import { MenuPopper } from "../../general/menuPopper";

const userOptions = ["Account", "Profile", "Settings"];

export const UserProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axiosInstance
      .get<{ user: User }>("/api/user/name/User%20One")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.error(err));
  }, []);

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
      <Tooltip title={user?.name} placement="bottom">
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
          <img src={user?.image?.url} alt={user?.name} />
        </Box>
      </Tooltip>
      <Component />
    </>
  );
};
