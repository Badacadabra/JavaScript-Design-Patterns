import { Strategy } from './strategies';

// ==============================
// CONTEXT (FIGHTING GAME)
// ==============================

export interface Game {
    strategy: Strategy; 
    play(): string;
}

export const fightingGame: Game = {
    strategy: null,
    play() {
        return this.strategy.fight(); 
    }
};
