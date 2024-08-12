import type { Image } from "./image";
import { type Song } from "./song";
import type { User } from "./user";

export type Playlist = {
  id: string;
  name: string;
  createdAt: string; // ISO string representation of DateTime
  updatedAt: string; // ISO string representation of DateTime
  userId: string;
  user: User;
  image?: Image | null;
  imageId?: string | null;
  songs: Song[];
};
