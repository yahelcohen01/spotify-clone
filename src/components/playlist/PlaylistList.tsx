// bunch of PlaylistCard components

import { type Playlist } from "../../types/playlist";
import PlaylistCard from "./PlaylistCard";
interface PlaylistListProps {
  playlists: Playlist[];
}

const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} {...playlist} />
      ))}
    </div>
  );
};
export default PlaylistList;
