import { Divider } from "@mui/material";
import React from "react";
import type { PlaylistList } from "../../types/playlist";
import { PlaylistListComponent } from "../playlist/PlaylistList";

const Library: React.FC = () => {
  const playlistListArray: PlaylistList[] = [
    {
      name: "Playlist 1",
      playlists: [
        { name: "Playlist 1", id: "1", description: "" },
        { name: "Playlist 2", id: "2", description: "" },
        { name: "Playlist 3", id: "3", description: "" },
      ],
      description: "eliyahu",
    },
    {
      name: "Playlist 2",
      playlists: [
        { name: "Playlist 4", id: "4", description: "" },
        { name: "Playlist 5", id: "5", description: "" },
        { name: "Playlist 6", id: "6", description: "" },
      ],
      description: "eliyahu",
    },
    {
      name: "Playlist 3",
      playlists: [
        { name: "Playlist 7", id: "7", description: "" },
        { name: "Playlist 8", id: "8", description: "" },
        { name: "Playlist 9", id: "9", description: "" },
      ],
      description: "eliyahu",
    },
  ];

  return (
    <div className="flex flex-col max-h-full overflow-y-scroll p-4">
      {playlistListArray.map((playlistlist, index) => (
        <div key={index} className="mb-8">
          <p className="text-2xl font-semibold text-green-600 mb-2">
            {playlistlist.name}
          </p>
          <Divider className="mb-4" />
          <PlaylistListComponent playlistlist={playlistlist} />
        </div>
      ))}
    </div>
  );
};

export default Library;
