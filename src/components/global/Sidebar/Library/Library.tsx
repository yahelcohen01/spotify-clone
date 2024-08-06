import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useContext } from "react";
import { LibraryPlaylistCard } from "./LibraryPlaylistCard";
import { ThemeContext, themeContext } from "../../../../theme/Theme";
import { ButtonsGroup } from "./ButtonsGroup";
import ExpandableSearchBar from "./ExpandableSearchBar";
import { LibraryButton } from "./LibraryButton";
import { SortButton } from "./SortButton";

export type PlaylistInfo = {
  name: string;
  type: string;
  owner: string;
  image: string;
};

const Playlists: PlaylistInfo[] = [
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

export const Library = () => {
  const { regularView } = useContext(themeContext) as ThemeContext;

  return (
    <Card sx={{
       marginTop: ".5rem",
         height: 'calc(100% - 120px)',
  }} >
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
                <ExpandableSearchBar />
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
            <LibraryPlaylistCard item={item} index={i} />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
