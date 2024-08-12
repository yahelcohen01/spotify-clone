import type { Image } from "./image";
import type { Playlist } from "./playlist";

export type User = {
  id: string;
  email: string;
  image?: Image | null;
  imageId?: string | null;
  name: string;
  password: string;
  createdAt: string; // ISO string representation of DateTime
  updatedAt: string; // ISO string representation of DateTime
  playlists: Playlist[];
};
