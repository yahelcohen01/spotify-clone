import { type Song } from "./song";

export type Playlist = {
  id: string;
  name: string;
  description: string;
  image?: string;
  songs?: Song[];
};

export type PlaylistList = {
  name: string;
  description: string;
  playlists: Playlist[];
};
