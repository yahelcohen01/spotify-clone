import type { Playlist } from "./playlist";

export type Song = {
  id: string;
  name: string;
  artist: string;
  playlistId: string;
  playlist: Playlist;
};
