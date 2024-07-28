import React from "react";
import type { Playlist } from "../../types/playlist";

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  playlist: { image = "https://placehold.co/600x400/EEE/31343C", name },
}) => {
  return (
    <div className="flex flex-col items-center shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover rounded-lg shadow-md"
      />
      <h2 className="text-lg font-semibold mt-4 text-center">{name}</h2>
    </div>
  );
};

export default PlaylistCard;
