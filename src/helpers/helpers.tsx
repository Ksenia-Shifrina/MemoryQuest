export type CardType =
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
  | 'Burger'
  | 'Blank';

export type FlippingCard = {
  type: CardType;
  isOpen: boolean;
  isVisible: boolean;
  isDisabled: boolean;
  color: string;
  id: string;
};

export const validCards: CardType[] = [
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

export type GameOptions = 'Colored' | 'Rotating' | 'Triples';
export type PlayerMode = 'Single' | 'Multiplayer';
export type DifficultyLevel = 'Casual' | 'Challenging' | 'Hardcore';
export type Pages = 'Flip & Find' | 'Missing Item' | 'Card Recall' | 'Sequence Master' | 'Settings';

export const difficultyLevelArr: DifficultyLevel[] = ['Casual', 'Challenging', 'Hardcore'];
export const gameVariationArr: GameOptions[] = ['Colored', 'Rotating', 'Triples'];
export const gamesPages: Pages[] = ['Missing Item', 'Flip & Find', 'Card Recall', 'Sequence Master'];
