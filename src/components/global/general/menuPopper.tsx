import { Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

interface MenuPopperProps {
  menuTitle?: string;
  options: string[];
}

export const MenuPopper = ({ menuTitle, options }: MenuPopperProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const openPopover = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closePopover = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return {
    Component: () => (
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={closePopover}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
          sx: {
            paddingRight: "4px",
            paddingLeft: "4px",
          },
        }}
      >
        {menuTitle && (
          <Typography
            className="px-4 py-2 opacity-60 text-xs"
            fontWeight={500}
            fontSize={"0.75rem"}
          >
            {menuTitle}
          </Typography>
        )}
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;
          return (
            <MenuItem
              key={option}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: isSelected ? "#1fcd5d" : "#e5e5e5",
                minWidth: "190px",
                borderRadius: "2px",
              }}
              selected={isSelected}
              onClick={(event) => handleMenuItemClick(event, index)}
              disableRipple
            >
              <Typography
                variant="subtitle2"
                color={isSelected ? "#1fcd5d" : "#e5e5e5"}
                fontWeight={400}
              >
                {option}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    ),
    openPopover,
  };
};
