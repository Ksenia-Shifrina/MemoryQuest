import * as React from 'react';
import { Grid, keyframes } from '@mui/material';
import CurrentGameDashboard from './CurrentGameDashboard';
import BoxOfCards from './BoxOfCards';
import { useEffect, useState } from 'react';
import { FlippingCardType, CardType, GameVariation, PlayersVariation } from '../../helpers/helpers';
import GameResultsPage from './GameResultsPage';
import { addBlankCards, addColors, closeAllCards, generateCards, shuffleCards } from './GameLogicFunctions';
import MultiplayerDashboard from './MultiplayerDashboard';
import RotatingBoxDashboard from './RotatingBoxDashboard';

const createDynamicKeyframes = (startAngle: number, direction: string) => keyframes`
  0% { transform: rotate(${startAngle}deg); }
  100% { transform: rotate(${direction === 'left' ? startAngle - 360 : startAngle + 360}deg); }
`;

export interface FlipFindGameProps {
  setIsFlipFindGameStarted: Function;
  numOfCards: number;
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  gameOptions: GameVariation[];
  playersNum: PlayersVariation;
}

const FlipFindGame: React.FC<FlipFindGameProps> = ({
  setIsFlipFindGameStarted,
  numOfCards,
  setNumOfCards,
  setIsFloatingBackGround,
  gameOptions,
  playersNum,
}) => {
  const [cards, setCards] = useState<FlippingCardType[]>([]);
  const [actualNumOfCards, setActualNumOfCards] = React.useState<number>(numOfCards);
  const [openedCard, setOpenedCard] = useState<CardType | ''>('');
  const [openedIndexes, setOpenedIndexes] = useState<number[]>([]);

  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(0);

  const [attempts, setAttempts] = useState<number>(0);
  const [attempts2, setAttempts2] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  const [togglePlayers, setTogglePlayers] = useState<boolean>(true);

  const [isRotatingLeft, setIsRotatingLeft] = useState<boolean>(false);
  const [startAngle, setStartAngle] = useState(0);
  const [animationDynamicLeft, setAnimationDynamicLeft] = useState(createDynamicKeyframes(startAngle, 'left'));
  const [animationDynamicRight, setAnimationDynamicRight] = useState(createDynamicKeyframes(startAngle, 'right'));

  const rotateLeft = () => {
    setIsRotatingLeft(true);
    setAnimationDynamicLeft(createDynamicKeyframes(startAngle, 'left'));
    setAnimationDynamicRight(createDynamicKeyframes(-startAngle, 'right'));
  };

  const rotateRight = () => {
    setIsRotatingLeft(false);
    setAnimationDynamicRight(createDynamicKeyframes(startAngle, 'right'));
    setAnimationDynamicLeft(createDynamicKeyframes(-startAngle, 'left'));
  };

  // CREATE NEEDED CARDS AND START THE GAME
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

  // START TIMER
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActiveTimer) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActiveTimer]);

  // STOP TIMER
  useEffect(() => {
    if (cards.length === numOfCards && cards.every((card) => card.isVisible === false)) {
      setIsActiveTimer(false);
      setIsFloatingBackGround(true);
    }
  }, [cards]);

  // EXCLUDE BLANK CARDS FROM CALCULATIONS FOR ROTATING BOX
  useEffect(() => {
    if (gameOptions.includes('Moving')) {
      if (numOfCards === 16) {
        setActualNumOfCards(12);
      } else if (numOfCards === 25) {
        setActualNumOfCards(18);
      } else if (numOfCards === 36) {
        setActualNumOfCards(24);
      }
    }
  }, [numOfCards]);

  // TRACK ROTATING ANGLE FOR SMOOTH CHANGE OF DIRECTION FOR ROTATING BOX
  useEffect(() => {
    const updateInterval = 100;
    const angleIncrement = isRotatingLeft ? -3 / 5 : 3 / 5;

    const updateAngle = () => {
      setStartAngle((prevAngle) => (prevAngle + angleIncrement) % 360);
    };

    const timer = setInterval(updateAngle, updateInterval);
    return () => clearInterval(timer);
  }, [isRotatingLeft]);

  // STANDARD CHECK WHEN OPENING A CARD
  const checkCard = (cardType: CardType, index: number) => {
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
      if (playersNum === 'Single') {
        setScore((prevState) => (prevState += 1));
        setAttempts((prevState) => (prevState += 1));
      } else if (togglePlayers) {
        setScore((prevState) => (prevState += 1));
        setAttempts((prevState) => (prevState += 1));
      } else {
        setScore2((prevState) => (prevState += 1));
        setAttempts2((prevState) => (prevState += 1));
      }
      setTogglePlayers(!togglePlayers);

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
      if (togglePlayers) {
        setAttempts((prevState) => (prevState += 1));
      } else {
        setAttempts2((prevState) => (prevState += 1));
      }
      setTogglePlayers(!togglePlayers);

      return () => clearTimeout(timer);
    }
  };

  // CHECK WHEN OPENING A CARD IN TRIPLES GAME
  const checkCardTriples = (cardType: CardType, index: number) => {
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
      if (togglePlayers) {
        setAttempts((prevState) => (prevState += 1));
      } else {
        setAttempts2((prevState) => (prevState += 1));
      }
      setTogglePlayers(!togglePlayers);

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
      if (playersNum === 'Single') {
        setScore((prevState) => (prevState += 1));
        setAttempts((prevState) => (prevState += 1));
      } else if (togglePlayers) {
        setScore((prevState) => (prevState += 1));
        setAttempts((prevState) => (prevState += 1));
      } else {
        setScore2((prevState) => (prevState += 1));
        setAttempts2((prevState) => (prevState += 1));
      }
      setTogglePlayers(!togglePlayers);

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
      if (togglePlayers) {
        setAttempts((prevState) => (prevState += 1));
      } else {
        setAttempts2((prevState) => (prevState += 1));
      }
      setTogglePlayers(!togglePlayers);

      return () => clearTimeout(timer);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      {isActiveTimer && (
        <Grid container justifyContent="center" alignItems="center">
          {!gameOptions.includes('Moving') && playersNum === 'Single' && (
            <CurrentGameDashboard
              attempts={attempts}
              seconds={seconds}
              actualNumOfCards={actualNumOfCards}
              gameOptions={gameOptions}
              score={score}
            />
          )}

          {!gameOptions.includes('Moving') && playersNum === 'Multiplayer' && (
            <MultiplayerDashboard
              attempts={attempts}
              attempts2={attempts2}
              seconds={seconds}
              actualNumOfCards={actualNumOfCards}
              gameOptions={gameOptions}
              score={score}
              score2={score2}
              togglePlayers={togglePlayers}
            />
          )}

          {gameOptions.includes('Moving') && (
            <RotatingBoxDashboard
              gameOptions={gameOptions}
              playersNum={playersNum}
              isLeftPlayer={togglePlayers}
              isRotatingLeft={isRotatingLeft}
              rotate={rotateRight}
              attempts={attempts}
              actualNumOfCards={actualNumOfCards}
              score={score}
              nickname={'Ksu'}
              seconds={seconds}
              isLeft={true}
            />
          )}

          <BoxOfCards
            cards={cards}
            setCards={setCards}
            checkCard={gameOptions.includes('Triples') ? checkCardTriples : checkCard}
            gameOptions={gameOptions}
            isRotatingLeft={isRotatingLeft}
            animationDynamicLeft={animationDynamicLeft}
            animationDynamicRight={animationDynamicRight}
          />

          {gameOptions.includes('Moving') && (
            <RotatingBoxDashboard
              gameOptions={gameOptions}
              playersNum={playersNum}
              isLeftPlayer={!togglePlayers}
              isRotatingLeft={isRotatingLeft}
              rotate={rotateLeft}
              attempts={attempts2}
              actualNumOfCards={actualNumOfCards}
              score={score2}
              nickname={'Danil'}
              seconds={seconds}
              isLeft={false}
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
