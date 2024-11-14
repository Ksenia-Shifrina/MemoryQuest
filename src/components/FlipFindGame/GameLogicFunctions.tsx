import {
  FlippingCardType,
  GameVariation,
  getRandomInteger,
  shuffleArray,
  validCards,
  ValidCardType,
} from '../../helpers/helpers';

export const generateCards = (numOfCards: number, gameOptions: GameVariation[], setCards: Function) => {
  const newCards: FlippingCardType[] = [];
  const keepTrack: number[] = [];

  while (newCards.length < numOfCards) {
    const randomInt = getRandomInteger(0, validCards.length);
    if (!keepTrack.includes(randomInt)) {
      keepTrack.push(randomInt);
      const newCard: FlippingCardType = {
        type: validCards[randomInt],
        isOpen: true,
        isVisible: true,
        isDisabled: true,
        color: '#A48F8A',
      };
      newCards.push({ ...newCard }, { ...newCard });
      if (gameOptions.includes('Triples')) {
        newCards.push({ ...newCard });
      }
    }
  }

  setCards(newCards);
};

export const shuffleCards = (setCards: Function) => {
  setCards((prevState: FlippingCardType[]) => shuffleArray(prevState));
};

export const addBlankCards = (numOfCards: number, setNumOfCards: Function, setCards: Function) => {
  const blankCard: FlippingCardType = {
    type: 'Blank',
    isOpen: false,
    isVisible: false,
    isDisabled: true,
    color: 'none',
  };

  if (numOfCards === 12) {
    setNumOfCards(16);
    setCards((prevState: FlippingCardType[]) => {
      const newCards = [...prevState];
      newCards.splice(0, 0, blankCard);
      newCards.splice(3, 0, blankCard);
      newCards.splice(12, 0, blankCard);
      newCards.splice(15, 0, blankCard);
      return newCards;
    });
  } else if (numOfCards === 18) {
    setNumOfCards(25);
    setCards((prevState: FlippingCardType[]) => {
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
    setCards((prevState: FlippingCardType[]) => {
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

const randomColors: string[] = ['#AE8176', '#B1AB99', '#7B4234', '#E2D4BA', '#653239', '#A48F8A'];

export const addColors = (setCards: Function) => {
  setCards((prevState: FlippingCardType[]) => {
    const updatedState = [...prevState];
    for (let i = 0; i < updatedState.length; i++) {
      const color = randomColors[getRandomInteger(0, randomColors.length)];
      updatedState[i].color = color;
    }
    return updatedState;
  });
};

export const closeAllCards = (setCards: Function) => {
  const timer = setTimeout(() => {
    setCards((prevState: FlippingCardType[]) =>
      prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false }))
    );
  }, 3000);

  return () => clearTimeout(timer);
};
