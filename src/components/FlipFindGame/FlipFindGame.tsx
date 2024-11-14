import * as React from 'react';
import { Grid, keyframes } from '@mui/material';
import CurrentGameDashboard from './CurrentGameDashboard';
import BoxOfCards from './BoxOfCards';
import { useEffect, useState } from 'react';
import { FlippingCardType, ValidCardType, GameVariation, PlayersVariation } from '../../helpers/helpers';
import GameResultsPage from './GameResultsPage';
import { addBlankCards, addColors, closeAllCards, generateCards, shuffleCards } from './GameLogicFunctions';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import MultiplayerDashboard from './MultiplayerDashboard';

export interface FlipFindGameProps {
  setIsFlipFindGameStarted: Function;
  numOfCards: number;
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  gameOptions: GameVariation[];
  playersNum: PlayersVariation;
}

const createDynamicKeyframes = (startAngle: number, direction: string) => keyframes`
  0% { transform: rotate(${startAngle}deg); }
  100% { transform: rotate(${direction === 'left' ? startAngle - 360 : startAngle + 360}deg); }
`;

const FlipFindGame: React.FC<FlipFindGameProps> = ({
  setIsFlipFindGameStarted,
  numOfCards,
  setNumOfCards,
  setIsFloatingBackGround,
  gameOptions,
  playersNum,
}) => {
  const [cards, setCards] = useState<FlippingCardType[]>([]);
  const [openedCard, setOpenedCard] = useState<ValidCardType | ''>('');
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

  useEffect(() => {
    const updateInterval = 100;
    const angleIncrement = isRotatingLeft ? -3 / 5 : 3 / 5;

    const updateAngle = () => {
      setStartAngle((prevAngle) => (prevAngle + angleIncrement) % 360);
    };

    const timer = setInterval(updateAngle, updateInterval);
    return () => clearInterval(timer);
  }, [isRotatingLeft]);

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
      setTogglePlayers(!togglePlayers);
      const timer = setTimeout(() => {
        setCards((prevState) =>
          prevState.map((card) => (card.type === cardType ? { ...card, isVisible: false } : card))
        );
      }, 900);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));
      if (playersNum === 'Single') {
        setScore((prevState) => (prevState += 1));
      } else if (togglePlayers) {
        setScore((prevState) => (prevState += 1));
      } else {
        setScore2((prevState) => (prevState += 1));
      }

      return () => clearTimeout(timer);
    }
    // SECOND CARD OPENED INCORRECTLY
    else if (cardType !== openedCard && openedCard !== '') {
      setTogglePlayers(!togglePlayers);
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
      setTogglePlayers(!togglePlayers);
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
      setTogglePlayers(!togglePlayers);

      const timer = setTimeout(() => {
        setCards((prevState) =>
          prevState.map((card) => (card.type === cardType ? { ...card, isVisible: false } : card))
        );
      }, 900);

      setOpenedCard('');
      setOpenedIndexes([]);
      setAttempts((prevState) => (prevState += 1));
      if (playersNum === 'Single') {
        setScore((prevState) => (prevState += 1));
      } else if (togglePlayers) {
        setScore((prevState) => (prevState += 1));
      } else {
        setScore2((prevState) => (prevState += 1));
      }

      return () => clearTimeout(timer);
    }
    // THIRD CARD OPENED INCORRECTLY
    else if (openedIndexes.length === 2 && cardType !== openedCard) {
      setTogglePlayers(!togglePlayers);
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

  return (
    <Grid container justifyContent="center" alignItems="center">
      {isActiveTimer && (
        <Grid container justifyContent="center" alignItems="center">
          {playersNum === 'Single' && (
            <CurrentGameDashboard
              attempts={attempts}
              seconds={seconds}
              numOfCards={numOfCards}
              gameOptions={gameOptions}
              score={score}
            />
          )}

          {playersNum === 'Multiplayer' && (
            <MultiplayerDashboard
              attempts={attempts}
              attempts2={attempts2}
              seconds={seconds}
              numOfCards={numOfCards}
              gameOptions={gameOptions}
              score={score}
              score2={score2}
              togglePlayers={togglePlayers}
            />
          )}

          {gameOptions.includes('Moving') && isRotatingLeft && (
            <RefreshRoundedIcon
              onClick={rotateRight}
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
            isRotatingLeft={isRotatingLeft}
            animationDynamicLeft={animationDynamicLeft}
            animationDynamicRight={animationDynamicRight}
          />

          {gameOptions.includes('Moving') && !isRotatingLeft && (
            <RefreshRoundedIcon
              onClick={rotateLeft}
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
