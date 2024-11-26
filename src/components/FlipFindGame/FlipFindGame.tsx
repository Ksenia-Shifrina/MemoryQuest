import * as React from 'react';
import { Grid, keyframes } from '@mui/material';
import BoxOfCards, { fadeIn } from './BoxOfCards';
import { useEffect, useState } from 'react';
import { FlippingCard, CardType, GameOptions, PlayerMode } from '../../helpers/helpers';
import GameResultsPage from './GameResultsComponents/GameResultsPage';
import { addBlankCards, addColors, closeAllCards, generateCards, shuffleCards } from './GameLogicFunctions';
import StandardDashboard from './DashboardComponents/StandardDashboard';
import DashboardInMovingMode from './DashboardComponents/DashboardInMovingMode';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import BottomLeftIcon from './BottomLeftIcon';

const createDynamicKeyframes = (startAngle: number, directionIsLeft: boolean) => keyframes`
  0% { transform: rotate(${startAngle}deg); }
  100% { transform: rotate(${directionIsLeft ? startAngle - 360 : startAngle + 360}deg); }
`;

export type PlayerStats = {
  attempts: number;
  score: number;
};

export interface FlipFindGameProps {
  setIsFlipFindGameStarted: Function;
  numOfCards: number;
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  gameOptions: GameOptions[];
  playerMode: PlayerMode;
}

const FlipFindGame: React.FC<FlipFindGameProps> = ({
  setIsFlipFindGameStarted,
  numOfCards,
  setNumOfCards,
  setIsFloatingBackGround,
  gameOptions,
  playerMode,
}) => {
  const [cards, setCards] = useState<FlippingCard[]>([]);
  const [actualNumOfCards, setActualNumOfCards] = React.useState<number>(numOfCards);
  const [openedCards, setOpenedCards] = useState<FlippingCard[]>([]);

  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(0);

  const [playerStats1, setPlayerStats1] = useState<PlayerStats>({ attempts: 0, score: 0 });
  const [playerStats2, setPlayerStats2] = useState<PlayerStats>({ attempts: 0, score: 0 });
  const [isPlayer1, setIsPlayer1] = useState<boolean>(true);

  const [isRotatingLeft, setIsRotatingLeft] = useState<boolean>(true);
  const [startAngle, setStartAngle] = useState(0);
  const [animationDynamicLeft, setAnimationDynamicLeft] = useState(createDynamicKeyframes(startAngle, true));
  const [animationDynamicRight, setAnimationDynamicRight] = useState(createDynamicKeyframes(startAngle, false));

  const rotateLeft = () => {
    setIsRotatingLeft(true);
    setAnimationDynamicLeft(createDynamicKeyframes(startAngle, true));
    setAnimationDynamicRight(createDynamicKeyframes(-startAngle, false));
  };

  const rotateRight = () => {
    setIsRotatingLeft(false);
    setAnimationDynamicRight(createDynamicKeyframes(startAngle, false));
    setAnimationDynamicLeft(createDynamicKeyframes(-startAngle, true));
  };

  useEffect(() => {
    generateCards(numOfCards, gameOptions, setCards);
    shuffleCards(setCards);
    if (gameOptions.includes('Rotating')) {
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
    if (gameOptions.includes('Rotating')) {
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

  const processCorrectCardMatch = (card: FlippingCard) => {
    const timer = setTimeout(() => {
      setCards((prevState) => prevState.map((c) => (c.type === card.type ? { ...c, isVisible: false } : c)));
    }, 900);

    setOpenedCards([]);

    if (playerMode === 'Single' || isPlayer1) {
      setPlayerStats1((prevState) => ({ score: prevState.score++, attempts: prevState.attempts++ }));
    } else {
      setPlayerStats2((prevState) => ({ score: prevState.score++, attempts: prevState.attempts++ }));
    }

    setIsPlayer1(!isPlayer1);

    return () => clearTimeout(timer);
  };

  const processIncorrectCardMatch = (card: FlippingCard) => {
    setCards((prevState) => prevState.map((c) => ({ ...c, isDisabled: true })));

    const timer = setTimeout(() => {
      setCards((prevState) => prevState.map((c) => ({ ...c, isOpen: false, isDisabled: false })));
    }, 800);

    setOpenedCards([]);

    if (playerMode === 'Single' || isPlayer1) {
      setPlayerStats1((prevState) => ({ ...prevState, attempts: prevState.attempts++ }));
    } else {
      setPlayerStats2((prevState) => ({ ...prevState, attempts: prevState.attempts++ }));
    }

    setIsPlayer1(!isPlayer1);

    return () => clearTimeout(timer);
  };

  const isCardMatch = (card: FlippingCard) => card.type === openedCards[0].type;

  const isNotAlreadyOpened = (card: FlippingCard) => openedCards.map((c) => c.id !== card.id);

  const checkCard = (card: FlippingCard, targetNumber: number) => {
    if (openedCards.length === 0) {
      setOpenedCards([card]);
    } else if (isCardMatch(card) && isNotAlreadyOpened(card)) {
      if (openedCards.length + 1 === targetNumber) {
        processCorrectCardMatch(card);
      } else {
        setOpenedCards((prevState) => [...prevState, card]);
      }
    } else if (!isCardMatch(card)) {
      processIncorrectCardMatch(card);
    }
  };

  const closeGame = () => {
    setIsFloatingBackGround(true);
    setIsFlipFindGameStarted(false);
  };

  return (
    <Grid
      container
      sx={{
        overflow: gameOptions.includes('Rotating') ? 'hidden' : 'visible',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100%',
      }}
    >
      {isActiveTimer && (
        // <Grid sx={{ height: '100%' }}>
        <Grid container justifyContent="center" alignItems="center">
          {!gameOptions.includes('Rotating') && (
            <StandardDashboard
              playerStats1={playerStats1}
              playerStats2={playerStats2}
              seconds={seconds}
              actualNumOfCards={actualNumOfCards}
              gameOptions={gameOptions}
              isPlayer1={isPlayer1}
              isMultiplayer={playerMode === 'Multiplayer' ? true : false}
              nickname1={'Ksu'}
              nickname2={'Danil'}
            />
          )}

          {gameOptions.includes('Rotating') && (
            <DashboardInMovingMode
              gameOptions={gameOptions}
              isMultiplayer={playerMode === 'Multiplayer' ? true : false}
              isLeftPlayer={isPlayer1}
              isRotatingLeft={isRotatingLeft}
              rotate={rotateRight}
              playerStats={playerStats1}
              actualNumOfCards={actualNumOfCards}
              nickname={'Ksu'}
              seconds={seconds}
              isLeftCard={true}
            />
          )}

          <BoxOfCards
            cards={cards}
            setCards={setCards}
            checkCard={checkCard}
            gameOptions={gameOptions}
            isRotatingLeft={isRotatingLeft}
            animationDynamicLeft={animationDynamicLeft}
            animationDynamicRight={animationDynamicRight}
          />

          {gameOptions.includes('Rotating') && (
            <DashboardInMovingMode
              gameOptions={gameOptions}
              isMultiplayer={playerMode === 'Multiplayer' ? true : false}
              isLeftPlayer={!isPlayer1}
              isRotatingLeft={isRotatingLeft}
              rotate={rotateLeft}
              playerStats={playerStats2}
              actualNumOfCards={actualNumOfCards}
              nickname={'Danil'}
              seconds={seconds}
              isLeftCard={false}
            />
          )}
          {/* </Grid> */}
          {/* <MeetingRoomRoundedIcon
            onClick={closeGame}
            sx={{
              position: 'fixed',
              // bottom: numOfCards === 12 || numOfCards === 18 ? '2%' : '15%',
              // left: numOfCards === 12 ? '15%' : '10%',
              bottom: '7rem',
              left: '5rem',
              width: '3rem',
              height: '3rem',
              color: '#A55946',
              cursor: 'pointer',
              animation: `${fadeIn} 1s ease-in forwards`,
              transition: 'transform 0.4s',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          /> */}
          {/* <BottomLeftIcon closeGame={closeGame} /> */}
        </Grid>
      )}

      {!isActiveTimer && (
        <GameResultsPage
          seconds={seconds}
          isMultiplayer={playerMode === 'Multiplayer' ? true : false}
          gameOptions={gameOptions}
          actualNumOfCards={actualNumOfCards}
          playerStats1={playerStats1}
          playerStats2={playerStats2}
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
        />
      )}
    </Grid>
  );
};

export default FlipFindGame;
