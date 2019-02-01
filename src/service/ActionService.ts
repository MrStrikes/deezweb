import { AlbumInterface } from "@/interfaces/AlbumInterface";

export async function saveToFavorites(
  favorite: AlbumInterface[]
): Promise<any> {
  await localStorage.setItem("favorites", JSON.stringify(favorite));
}

export function getFavorites(): [AlbumInterface] {
  return JSON.parse(localStorage.getItem("favorites")!) || [];
}

export function isInFavorites(song: any): boolean {
  const favorites = JSON.stringify(getFavorites());
  const stringedSong: string = JSON.stringify(song);
  return favorites.includes(stringedSong);
}

export async function removeFromFavorites(index: number) {
  const favorites = getFavorites();
  favorites.splice(index, 1);
  return await saveToFavorites(favorites);
}

export function shuffleFavorites(): number {
  const favorites = getFavorites();
  return Math.floor(Math.random() * favorites.length);
}
