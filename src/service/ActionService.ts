import { AlbumInterface } from "@/interfaces/AlbumInterface";

export async function saveToFavorites(
  favorite: AlbumInterface[]
): Promise<any> {
  await localStorage.setItem("favorites", JSON.stringify(favorite));
}

export function getFavorites(): [AlbumInterface] {
  return JSON.parse(localStorage.getItem("favorites")!) || [];
}

export async function isInFavorites(song: any) {
  const favorites = JSON.stringify(getFavorites());
  const stringedSong: string = JSON.stringify(song);
  return await favorites.includes(stringedSong);
}

export async function removeFromFavorites(index: number) {
  const favorites = getFavorites();
  favorites.splice(index, 1);
  return await saveToFavorites(favorites);
}
