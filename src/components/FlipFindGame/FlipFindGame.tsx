import * as React from 'react';
import { Grid } from '@mui/material';
import CurrentGameDashboard from './CurrentGameDashboard';
import BoxOfCards from './BoxOfCards';
import { useEffect, useState } from 'react';
import { FlippingCardType, ValidCardType, GameVariation } from '../../helpers/helpers';
import GameResultsPage from './GameResultsPage';
import { addBlankCards, addColors, closeAllCards, generateCards, shuffleCards } from './GameLogicFunctions';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

export interface FlipFindGameProps {
  setIsFlipFindGameStarted: Function;
  numOfCards: number;
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  gameOptions: GameVariation[];
}

const FlipFindGame: React.FC<FlipFindGameProps> = ({
  setIsFlipFindGameStarted,
  numOfCards,
  setNumOfCards,
  setIsFloatingBackGround,
  gameOptions,
}) => {
  const [cards, setCards] = useState<FlippingCardType[]>([]);
  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(true);
  const [openedCard, setOpenedCard] = useState<ValidCardType | ''>('');
  const [openedIndexes, setOpenedIndexes] = useState<number[]>([]);
  const [attempts, setAttempts] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [rotateLeft, setRotateLeft] = useState<boolean>(false);

  useEffect(() => {
    generateCards(numOfCards, gameOptions, setCards);
    shuffleCards(setCards);
    if (gameOptions.includes('Moving')) {
      addBlankCards(numOfCards, setNumOfCards, setCards);
    }
    if (gameOptions.includes('Colored')) {
      addColors(setCards);
    }
    closeAllCards(setCards);
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

  useEffect(() => {
    if (cards.length === numOfCards && cards.every((card) => card.isVisible === false)) {
      setIsActiveTimer(false);
      setIsFloatingBackGround(true);
    }
  }, [cards]);

  const checkCard = (cardType: ValidCardType, index: number) => {
    // FIRST CARD OPENED
    if (openedCard === '' && openedIndexes.length === 0) {
      setOpenedCard(cardType);
      setOpenedIndexes([index]);
    }
    // SECOND CARD OPENED CORRECTLY
    else if (cardType === openedCard && index !== openedIndexes[0]) {
      const timer = setTimeout(() => {
        setCards((prevState) =>
          prevState.map((card) => (card.type === cardType ? { ...card, isVisible: false } : card))
        );
      }, 900);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    }
    // SECOND CARD OPENED INCORRECTLY
    else if (cardType !== openedCard && openedCard !== '') {
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
    // FIRST CARD OPENED
    if (openedCard === '' && openedIndexes.length === 0) {
      setOpenedCard(cardType);
      setOpenedIndexes([index]);
    }
    // SECOND CARD OPENED CORRECTLY
    else if (openedIndexes.length === 1 && cardType === openedCard && index !== openedIndexes[0]) {
      setOpenedIndexes((prevState) => [...prevState, index]);
    }
    // SECOND CARD OPENED INCORRECTLY
    else if (openedIndexes.length === 1 && cardType !== openedCard) {
      setCards((prevState) => prevState.map((card) => ({ ...card, isDisabled: true })));
      const timer = setTimeout(() => {
        setCards((prevState) => prevState.map((card) => ({ ...card, isOpen: false, isDisabled: false })));
      }, 800);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));

      return () => clearTimeout(timer);
    }
    // THIRD CARD OPENED CORRECTLY
    else if (
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
    }
    // THIRD CARD OPENED INCORRECTLY
    else if (openedIndexes.length === 2 && cardType !== openedCard) {
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
      {isActiveTimer && (
        <Grid container justifyContent="center" alignItems="center">
          <CurrentGameDashboard
            attempts={attempts}
            seconds={seconds}
            numOfCards={numOfCards}
            gameOptions={gameOptions}
          />

          {gameOptions.includes('Moving') && rotateLeft && (
            <RefreshRoundedIcon
              onClick={() => setRotateLeft(false)}
              sx={{
                position: 'absolute',
                bottom: '40%',
                left: cards.length === 36 ? '10%' : '15%',
                width: '4rem',
                height: '4rem',
                color: '#A55946',
                cursor: 'pointer',
              }}
            />
          )}

          <BoxOfCards
            cards={cards}
            setCards={setCards}
            checkCard={gameOptions.includes('Triples') ? checkCardTriples : checkCard}
            gameOptions={gameOptions}
            rotateLeft={rotateLeft}
          />

          {gameOptions.includes('Moving') && !rotateLeft && (
            <RefreshRoundedIcon
              onClick={() => setRotateLeft(true)}
              sx={{
                position: 'absolute',
                bottom: '40%',
                right: cards.length === 36 ? '10%' : '15%',
                width: '4rem',
                height: '4rem',
                color: '#A55946',
                cursor: 'pointer',
                transform: 'scaleX(-1)',
              }}
            />
          )}
        </Grid>
      )}

      {!isActiveTimer && (
        <GameResultsPage
          seconds={seconds}
          attempts={attempts}
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
          setIsFloatingBackGround={setIsFloatingBackGround}
        />
      )}
    </Grid>
  );
};

export default FlipFindGame;
