export interface Card{
  suit: string;
  value: number; // ace 1, j 11, q 12, k 13
}

export interface BoardState{
  stack: Card[]; // draw pile
  talon: Card[]; // unplayed cards from the draw pile
  tableau: Card[][]; // 7 stacks for gameplay
  foundations: Card[][]; // 4 stacks for putting the cards away
}