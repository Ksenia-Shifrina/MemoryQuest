import * as React from 'react';
import { Grid } from '@mui/material';
import CurrentGameDashboard from '../GameComponents/CurrentGameDashboard';
import BoxOfCards from '../GameComponents/BoxOfCards';
import { useEffect, useState } from 'react';
import {
  FlippingCardType,
  getRandomInteger,
  shuffleArray,
  ValidCardType,
  validCards,
  GameVariation,
} from '../../helpers/helpers';

export interface MiniGameProps {
  setIsMiniGameStarted: Function;
  numOfCards: number;
  setIsFloatingBackGround: Function;
  gameOptions: GameVariation[];
}

const MiniGame: React.FC<MiniGameProps> = ({
  setIsMiniGameStarted,
  numOfCards,
  setIsFloatingBackGround,
  gameOptions,
}) => {
  const [cards, setCards] = useState<FlippingCardType[]>([]);
  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(true);

  const [openedCard, setOpenedCard] = useState<ValidCardType | ''>('');
  // const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [openedIndexes, setOpenedIndexes] = useState<number[]>([]);

  const [attempts, setAttempts] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (cards.length === numOfCards && cards.every((card) => card.isVisible === false)) {
      setIsActiveTimer(false);
      setIsMiniGameStarted(false);
      setIsFloatingBackGround(true);
    }
  }, [cards]);

  const generateCards = (num: number) => {
    const newCards: FlippingCardType[] = [];
    const keepTrack: number[] = [];

    while (newCards.length < num) {
      const randomInt = getRandomInteger(0, validCards.length);
      if (!keepTrack.includes(randomInt)) {
        keepTrack.push(randomInt);
        const newCard = { type: validCards[randomInt], isOpen: true, isVisible: true, isDisabled: true };
        newCards.push(newCard, newCard);
        if (gameOptions.includes('Triples')) {
          newCards.push(newCard);
        }
      }
    }

    setCards(newCards);
  };

  const shuffleCards = () => {
    setCards((prevState) => shuffleArray(prevState));
  };

  const closeAllCards = () => {
    const timer = setTimeout(() => {
      setCards((prevState) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
    }, 3000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    generateCards(numOfCards);
    shuffleCards();
    if (gameOptions.includes('Moving')) {
      const middleIndex = Math.floor(cards.length / 2);
      // setCards((prevState) => {prevState.splice(middleIndex, 0, )});
    }
    closeAllCards();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActiveTimer) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActiveTimer]);

  const checkCard = (cardType: ValidCardType, index: number) => {
    if (openedCard === '' && openedIndexes.length === 0) {
      setOpenedCard(cardType);
      setOpenedIndexes([index]);
    } else if (cardType === openedCard && index !== openedIndexes[0]) {
      const timer = setTimeout(() => {
        setCards((prevState) =>
          prevState.map((card) => (card.type === cardType ? { ...card, isVisible: false } : card))
        );
      }, 900);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    } else if (cardType !== openedCard && openedCard !== '') {
      setCards((prevState) => prevState.map((card) => ({ ...card, isDisabled: true })));
      const timer = setTimeout(() => {
        setCards((prevState) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
      }, 800);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    }
  };

  const checkCardTriples = (cardType: ValidCardType, index: number) => {
    if (openedCard === '' && openedIndexes.length === 0) {
      setOpenedCard(cardType);
      setOpenedIndexes([index]);
    } else if (openedIndexes.length === 1 && cardType === openedCard && index !== openedIndexes[0]) {
      setOpenedIndexes((prevState) => [...prevState, index]);
    } else if (openedIndexes.length === 1 && cardType !== openedCard) {
      setCards((prevState) => prevState.map((card) => ({ ...card, isDisabled: true })));
      const timer = setTimeout(() => {
        setCards((prevState) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
      }, 800);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    } else if (
      openedIndexes.length === 2 &&
      cardType === openedCard &&
      index !== openedIndexes[1] &&
      index !== openedIndexes[0]
    ) {
      const timer = setTimeout(() => {
        setCards((prevState) =>
          prevState.map((card) => (card.type === cardType ? { ...card, isVisible: false } : card))
        );
      }, 900);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    } else if (openedIndexes.length === 2 && cardType !== openedCard) {
      setCards((prevState) => prevState.map((card) => ({ ...card, isDisabled: true })));
      const timer = setTimeout(() => {
        setCards((prevState) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
      }, 800);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <CurrentGameDashboard attempts={attempts} seconds={seconds} numOfCards={numOfCards} gameOptions={gameOptions} />
      </Grid>
      <Grid item xs={12} md={11} lg={8}>
        <BoxOfCards
          cards={cards}
          setCards={setCards}
          checkCard={gameOptions.includes('Triples') ? checkCardTriples : checkCard}
          gameOptions={gameOptions}
        />
      </Grid>
    </Grid>
  );
};

export default MiniGame;
