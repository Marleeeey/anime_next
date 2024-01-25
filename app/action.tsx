"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchata = async (page: number) => {
  const url = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await url.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
