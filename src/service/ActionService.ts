import { AlbumInterface } from "@/interfaces/AlbumInterface";

export async function saveToFavorites(
  favorite: [AlbumInterface]
): Promise<any> {
  await localStorage.setItem("favorites", JSON.stringify(favorite));
}

export function getFavorites(): [AlbumInterface] {
  return JSON.parse(localStorage.getItem("favorites")!) || [];
}

export function isInFavorites(song: any) {
  const favorites = JSON.stringify(getFavorites());
  const stringedSong: string = JSON.stringify(song);
  return favorites.includes(stringedSong);
}
