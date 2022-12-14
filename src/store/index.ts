import { defineStore } from "pinia";
import type { Card, BoardState } from '@/shared/types'
import { cardToString, numToCard } from '@/shared/helpers';

function shuffleDeck(): Card[] {
  const cardArr: {card: Card, sortVal: number}[] = [];

  for (let i = 0; i < 52; i ++){
    cardArr.push({
      card: numToCard(i),
      sortVal: Math.random(),
    });
  }

  return cardArr.sort((a, b) => a.sortVal - b.sortVal).map(obj => obj.card);
}

export const useStore = defineStore('main', {
  state: (): BoardState => {
    return {
      tableau: [] as Card[][],
      stack: [] as Card[],
      foundations: [] as Card[][],
      talon: [] as Card[],
    }
  },
  getters: {
    
  },
  actions: {
    initGame() {
      const newTableau: Card[][] = [];
      const newStack: Card[] = [];
      
      const shuffledCards = shuffleDeck();
      for (let i = 0; i < 7; i ++) {
        newTableau.push(shuffledCards.splice(0, i + 1))
      }
      newStack.splice(0, 0, ...shuffledCards);

      // this is scuffed but it works so whatever
      this.tableau.splice(0, this.stack.length, ...newTableau);
      this.stack.splice(0, this.stack.length, ...newStack);
      this.foundations.splice(0, this.foundations.length);
      this.talon.splice(0, this.talon.length);
    }
  }
})