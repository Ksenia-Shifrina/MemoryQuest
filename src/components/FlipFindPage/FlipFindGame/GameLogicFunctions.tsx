import { getRandomInteger, shuffleArray } from '../../../helpers/helperFunctions';
import { cardTypes, FlippingCard, GameOptions, randomColors } from '../../../helpers/types';

export const generateCards = (numOfCards: number, gameOptions: GameOptions[], setCards: Function) => {
  const newCards: FlippingCard[] = [];
  const keepTrack: number[] = [];

  while (newCards.length < numOfCards) {
    const randomInt = getRandomInteger(0, cardTypes.length);
    if (!keepTrack.includes(randomInt)) {
      keepTrack.push(randomInt);
      const newCard: FlippingCard = {
        type: cardTypes[randomInt],
        isOpen: true,
        isVisible: true,
        isDisabled: true,
        color: '#A48F8A',
        id: cardTypes[randomInt],
      };
      newCards.push({ ...newCard, id: cardTypes[randomInt] + ': a' }, { ...newCard, id: cardTypes[randomInt] + ': b' });
      if (gameOptions.includes('Triples')) {
        newCards.push({ ...newCard, id: cardTypes[randomInt] + ': c' });
      }
    }
  }

  setCards(newCards);
};

export const shuffleCards = (setCards: Function) => {
  setCards((prevState: FlippingCard[]) => shuffleArray(prevState));
};

export const addBlankCards = (numOfCards: number, setNumOfCards: Function, setCards: Function) => {
  const blankCard: FlippingCard = {
    type: 'Blank',
    isOpen: false,
    isVisible: false,
    isDisabled: true,
    color: 'none',
    id: 'blank',
  };

  if (numOfCards === 12) {
    setNumOfCards(16);
    setCards((prevState: FlippingCard[]) => {
      const newCards = [...prevState];
      newCards.splice(0, 0, blankCard);
      newCards.splice(3, 0, blankCard);
      newCards.splice(12, 0, blankCard);
      newCards.splice(15, 0, blankCard);
      return newCards;
    });
  } else if (numOfCards === 18) {
    setNumOfCards(25);
    setCards((prevState: FlippingCard[]) => {
      const newCards = [...prevState];
      newCards.splice(0, 0, blankCard);
      newCards.splice(4, 0, blankCard);
      newCards.splice(7, 0, blankCard);
      newCards.splice(12, 0, blankCard);
      newCards.splice(17, 0, blankCard);
      newCards.splice(20, 0, blankCard);
      newCards.splice(24, 0, blankCard);
      return newCards;
    });
  } else if (numOfCards === 24) {
    setNumOfCards(36);
    setCards((prevState: FlippingCard[]) => {
      const newCards = [...prevState];
      newCards.splice(0, 0, blankCard);
      newCards.splice(1, 0, blankCard);
      newCards.splice(4, 0, blankCard);
      newCards.splice(5, 0, blankCard);
      newCards.splice(6, 0, blankCard);
      newCards.splice(11, 0, blankCard);
      newCards.splice(24, 0, blankCard);
      newCards.splice(29, 0, blankCard);
      newCards.splice(30, 0, blankCard);
      newCards.splice(31, 0, blankCard);
      newCards.splice(34, 0, blankCard);
      newCards.splice(35, 0, blankCard);
      return newCards;
    });
  }
};

export const addColors = (setCards: Function) => {
  setCards((prevState: FlippingCard[]) => {
    const updatedState = [...prevState];
    for (let i = 0; i < updatedState.length; i++) {
      const color = randomColors[getRandomInteger(0, randomColors.length)];
      updatedState[i].color = color;
    }
    return updatedState;
  });
};

export const closeAllCards = (setCards: Function, actualNumOfCards: number) => {
  const seconds = actualNumOfCards === 12 ? 3000 : actualNumOfCards === 18 ? 4000 : 5000;

  const timer = setTimeout(() => {
    setCards((prevState: FlippingCard[]) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
  }, seconds);
  return () => clearTimeout(timer);
};
