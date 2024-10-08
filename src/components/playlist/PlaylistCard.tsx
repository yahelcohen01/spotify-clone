import React from "react";

interface PlaylistCardProps {
  name: string;
  image: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  name,
  image = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="flex flex-col items-center shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
    </div>
  );
};

export default PlaylistCard;
