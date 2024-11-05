import * as React from 'react';
import { Grid } from '@mui/material';
import CurrentGameDashboard from '../GameComponents/CurrentGameDashboard';
import Header from '../Header';
import BoxOfCards from '../GameComponents/BoxOfCards';
import { useEffect, useState } from 'react';
import { FlippingCardType, getRandomInteger, shuffleArray, ValidCardType, validCards } from '../../helpers/helpers';

export interface StandardGameProps {
  setIsStandardGameStarted: Function;
  numOfCards: number;
}

const StandardGame: React.FC<StandardGameProps> = ({ setIsStandardGameStarted, numOfCards }) => {
  const [cards, setCards] = useState<FlippingCardType[]>([]);
  const [openedCard, setOpenedCard] = useState<ValidCardType | ''>('');
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(true);

  useEffect(() => {
    if (cards.length === numOfCards && cards.every((card) => card.isVisible === false)) {
      setIsActiveTimer(false);
      setIsStandardGameStarted(false);
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
    if (openedCard === '' && openedIndex === null) {
      setOpenedCard(cardType);
      setOpenedIndex(index);
    } else if (cardType === openedCard && index !== openedIndex) {
      const timer = setTimeout(() => {
        setCards((prevState) =>
          prevState.map((card) => (card.type === cardType ? { ...card, isVisible: false } : card))
        );
      }, 800);

      setOpenedCard('');
      setOpenedIndex(null);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    } else if (cardType !== openedCard && openedCard !== '') {
      setCards((prevState) => prevState.map((card) => ({ ...card, isDisabled: true })));
      const timer = setTimeout(() => {
        setCards((prevState) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
      }, 900);

      setOpenedCard('');
      setOpenedIndex(null);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <CurrentGameDashboard attempts={attempts} seconds={seconds} />
      </Grid>
      <Grid item xs={12} md={11} lg={5}>
        <BoxOfCards cards={cards} setCards={setCards} checkCard={checkCard} />
      </Grid>
    </Grid>
  );
};

export default StandardGame;
