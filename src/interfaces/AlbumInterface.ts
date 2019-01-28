export interface AlbumInterface {
  track: TrackInterface;
  artist: ArtistInterface;
}

interface TrackInterface {
  id: number;
  readable: boolean;
  title: string;
  link: string;
  duration: number;
  trackPosition: number;
  explicitLyrics: boolean;
  preview: string;
}

interface ArtistInterface {
  id: number;
  name: string;
}
