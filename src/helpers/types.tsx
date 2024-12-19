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

export const cardTypes: CardType[] = [
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

export type FlippingCard = {
  type: CardType;
  isOpen: boolean;
  isVisible: boolean;
  isDisabled: boolean;
  color: string;
  id: string;
};

export type Pages = 'Memory Games' | 'Flip & Find' | 'Missing Item' | 'Cards Recall' | 'Sequence Master' | 'Settings';
export type GameOptions = 'Coloured' | 'Rotating' | 'Triples';
export type PlayerMode = 'Single' | 'Multiplayer';
export type DifficultyLevel = 'Casual' | 'Challenging' | 'Hardcore';
export type GameOptionsWithExplanations = { type: GameOptions; explanationText: string };
export type PagesWithDescriptions = { name: Pages; description: string; isCreated: boolean };

export const randomNicknames: string[] = [
  'Lion',
  'Hedgehog',
  'Zebra',
  'Tiger',
  'Fox',
  'Owl',
  'Bear',
  'Wolf',
  'Eagle',
  'Flamingo',
  'Penguin',
  'Panther',
];
export const randomColors: string[] = ['#A48F8A', '#B1AB99', '#C6B595', '#7E483B', '#76353F', '#666150'];
export const difficultyLevelArr: DifficultyLevel[] = ['Casual', 'Challenging', 'Hardcore'];

export const GameOptionsWithExplanations: GameOptionsWithExplanations[] = [
  {
    type: 'Coloured',
    explanationText:
      'Background of the cards will be in random colours but you still need to find the identical symbols',
  },
  { type: 'Rotating', explanationText: 'The whole set of cards will be rotating to make it more challenging' },
  { type: 'Triples', explanationText: 'You will need to find three cards with the same symbol instead of two' },
];

export const gamesPages: PagesWithDescriptions[] = [
  {
    name: 'Flip & Find',
    isCreated: true,
    description:
      'A classic memory game where players get a brief glimpse at a set of cards containing pairs or triples of identical symbols, then they are flipped over and players try to recall and match them!',
  },
  {
    name: 'Missing Item',
    isCreated: false,
    description:
      'A memory challenge where players are shown a set of cards, then one or more cards are removed, and the goal is to recall which ones are missing.',
  },
  {
    name: 'Cards Recall',
    isCreated: false,
    description:
      ' A memory game where you are briefly shown a set of cards, challenged to memorize them, and then tasked with recalling all the cards from memory.',
  },
  {
    name: 'Sequence Master',
    isCreated: false,
    description:
      'A memory game where players are shown a sequence of cards and must memorize not only the cards but the exact order in which they appear!',
  },
];
