import { Box, ImageListItem, Typography } from "@mui/material";
import { PlaylistInfo } from "./Library";
import { useContext } from "react";
import { themeContext, ThemeContext } from "../../../../theme/Theme";

interface LibraryPlaylistCardProps {
  item: PlaylistInfo;
  index: number;
}

export const LibraryPlaylistCard = ({
  index,
  item,
}: LibraryPlaylistCardProps) => {
  const { regularView } = useContext(themeContext) as ThemeContext;
  return (
    <>
      <ImageListItem key={`${index}`}>
        <img
          style={{ borderRadius: "4px" }}
          src={`${item.image}?w=48&h=48&fit=crop&auto=format`}
          alt={item.name}
          loading="lazy"
        />
      </ImageListItem>
      {regularView && (
        <Box sx={{ display: "grid", alignItems: "start", padding: ".3rem" }}>
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
    </>
  );
};
