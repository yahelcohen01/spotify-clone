import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  ImageListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../../theme/Theme";
import { ButtonsGroup } from "./ButtonsGroup";
import { LibraryButton } from "./LibraryButton";
import { SortButton } from "./SortButton";

const Playlists = [
  {
    name: "Liked Songs",
    type: "Playlist",
    owner: "Yahel",
    image: "/liked_songs.jpg",
  },
  {
    name: "Loud",
    type: "Album",
    owner: "Rihanna",
    image: "/rihanna_loud.png",
  },
  {
    name: "Dark Necessities",
    type: "Album",
    owner: "Red Hot Chili Peppers",
    image: "/dark_necessities_red_hot_chili_peppers.jpg",
  },
];
// src/components/Popover.tsx
import React, { useEffect, useRef, useState } from "react";

const Popover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      buttonRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={togglePopover}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Click me
      </button>
      {isOpen && (
        <div
          ref={popoverRef}
          className={`absolute z-10 p-4 mt-2 bg-white border border-gray-300 rounded shadow-lg transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          This is a popover!
        </div>
      )}
    </div>
  );
};

export const Library = () => {
  const { regularView } = useContext(themeContext) as ThemeContext;

  return (
    <Card sx={{ marginTop: ".5rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LibraryButton />
        {regularView && <ButtonsGroup />}
      </Box>

      <CardContent
        sx={{
          padding: regularView ? ".5rem" : "0",
          display: "grid",
        }}
      >
        {regularView && (
          <>
            <Box>
              <Chip
                label={"Playlists"}
                size="medium"
                sx={{ fontWeight: 400 }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Tooltip title="Search in Your Library" placement="top-start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <SortButton />
            </Box>
          </>
        )}
        {Playlists.map((item, i) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              borderRadius: "7px",
              maxHeight: "4rem",
              columnGap: regularView ? ".5rem" : "0",
              padding: ".5rem",
              "&:hover": {
                cursor: "pointer",
                boxShadow: "inset 0 0 100px 100px rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ImageListItem key={`${i}`}>
              <img
                style={{ borderRadius: "4px" }}
                src={`${item.image}?w=48&h=48&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
            {regularView && (
              <Box
                sx={{ display: "grid", alignItems: "start", padding: ".3rem" }}
              >
                <Typography
                  variant="subtitle1"
                  lineHeight={"normal"}
                  alignSelf={"center"}
                  fontWeight={400}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  lineHeight={"normal"}
                  alignItems={"end"}
                  fontWeight={400}
                  sx={{ opacity: 0.6 }}
                >
                  {item.type} • {item.owner}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
