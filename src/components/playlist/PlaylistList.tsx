import React from "react";
import type { PlaylistList } from "../../types/playlist";
import PlaylistCard from "./PlaylistCard";

interface PlaylistListProps {
  playlistlist: PlaylistList;
}

export const PlaylistListComponent: React.FC<PlaylistListProps> = ({
  playlistlist,
}) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-2">
        {playlistlist.playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistListComponent;
