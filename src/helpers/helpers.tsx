export type ValidCardType =
  | 'Pet'
  | 'Anchor'
  | 'Snowflake'
  | 'Plane'
  | 'Clock'
  | 'Phone'
  | 'Hand'
  | 'Croissant'
  | 'Moon'
  | 'Umbrella'
  | 'Sun'
  | 'Cake'
  | 'Car'
  | 'Smile'
  | 'Flower'
  | 'SpoonAndFork'
  | 'Heart'
  | 'Burger';

export type FlippingCardType = {
  type: ValidCardType;
  isOpen: boolean;
  isVisible: boolean;
  isDisabled: boolean;
};

export const validCards: ValidCardType[] = [
  'Pet',
  'Anchor',
  'Snowflake',
  'Plane',
  'Clock',
  'Phone',
  'Hand',
  'Croissant',
  'Moon',
  'Umbrella',
  'Sun',
  'Cake',
  'Car',
  'Smile',
  'Flower',
  'SpoonAndFork',
  'Heart',
  'Burger',
];

export function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

/// TODO add T
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export type GameVariation = 'Standard' | 'Colored' | 'Moving' | 'Triples';
export type PlayersVariation = 'Single' | 'Multiplayer';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Expert';

export const difficultyLevelArr: DifficultyLevel[] = ['Easy', 'Medium', 'Hard', 'Expert'];
export const gameVariationArr: GameVariation[] = ['Standard', 'Colored', 'Moving', 'Triples'];
