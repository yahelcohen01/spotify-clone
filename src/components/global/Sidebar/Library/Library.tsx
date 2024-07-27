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
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { ThemeContext, themeContext } from "../../../../theme/Theme";
import { SortButton } from "./SortButton";
import { LibraryButton } from "./LibraryButton";
import { ButtonsGroup } from "./ButtonsGroup";
import LikedSongs from "../../../../../public/liked_songs.jpg";
import DarkNecessities from "../../../../../public/dark_necessities_red_hot_chili_peppers.jpg";
import rihannaLoud from "../../../../../public/rihanna_loud.png";

const Playlists = [
  {
    name: "Liked Songs",
    type: "Playlist",
    owner: "Yahel",
    image: LikedSongs,
  },
  {
    name: "Loud",
    type: "Album",
    owner: "Rihanna",
    image: rihannaLoud,
  },
  {
    name: "Dark Necessities",
    type: "Album",
    owner: "Red Hot Chili Peppers",
    image: DarkNecessities,
  },
];

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
              <SortButton variant="contained" disableRipple>
                Recents
              </SortButton>
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
