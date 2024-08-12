import type { Playlist } from "./playlist";
import type { User } from "./user";

export type Image = {
  id: string;
  url: string;
  playlist?: Playlist | null;
  user?: User | null;
};
