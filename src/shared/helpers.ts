import type { Card } from "./types";

export const suitMap: Record<string, string> = {
  "hearts": "♥",
  "diamonds": "♦",
  "spades": "♠",
  "clubs": "♣",
};

export const numberMap: Record<number, string> = {
  1: "A",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "J",
  12: "Q",
  13: "K",
};

export const numToSuit: Record<string, string> = {
  0: "hearts",
  1: "diamonds",
  2: "spades",
  3: "clubs",
};

export function cardToString(card: Card): string{
  return numberMap[card.value]+suitMap[card.suit];
}

export function numToCard(val: number): Card {
  return {
    suit: numToSuit[Math.floor(val/13)],
    value: val % 13 + 1,
  }
}