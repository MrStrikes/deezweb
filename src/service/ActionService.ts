import { AlbumInterface } from "@/interfaces/AlbumInterface";

export async function saveToFavorites(favorite: []) {
  await localStorage.setItem("favorites", JSON.stringify(favorite));
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")!) || [];
}
