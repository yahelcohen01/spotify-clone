import React from "react";
import type { Playlist } from "../../types/playlist";

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <div className="flex flex-col items-center shadow-lg">
      <img
        src={playlist.image?.url}
        alt={playlist.name}
        className="w-40 h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{playlist.name}</h2>
    </div>
  );
};

export default PlaylistCard;
