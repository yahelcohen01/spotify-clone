import CheckIcon from "@mui/icons-material/Check";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

const sortingOptions = [
  "Recents",
  "Recentley Added",
  "Alphabetical",
  "Creator",
];

export const SortButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const open = Boolean(anchorEl);

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

  return (
    <>
      <Button
        sx={{
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
        }}
        disableRipple
        variant="contained"
        onClick={openPopover}
      >
        {sortingOptions[selectedIndex]}
      </Button>
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
        // sx={{ paddingRight: "4px", paddingLeft: "4px" }}
      >
        <Typography
          className="px-4 py-2 opacity-60 text-xs"
          fontWeight={500}
          fontSize={"0.75rem"}
        >
          Sort by
        </Typography>
        {sortingOptions.map((option, index) => {
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
              {isSelected && <CheckIcon fontSize="small" />}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
