import * as React from 'react';
import { Box, Grid, keyframes } from '@mui/material';
import BoxOfCards from './GameLogic/BoxOfCards';
import { useEffect, useState } from 'react';
import GameResultsPage from './GameResults/GameResultsPage';
import { addBlankCards, addColors, closeAllCards, generateCards, shuffleCards } from './GameLogic/GameLogicFunctions';
import StandardDashboard from './Dashboard/StandardDashboard';
import RotatingModeDashboard from './Dashboard/RotatingModeDashboard';
import ExitGameButton from './Dashboard/Components/ExitGameButton';
import { FlippingCard, GameOptions, PlayerMode } from '../../../helpers/types';

const createDynamicKeyframes = (startAngle: number, isDirectionLeft: boolean) => keyframes`
  0% { transform: rotate(${startAngle}deg); }
  100% { transform: rotate(${isDirectionLeft ? startAngle - 360 : startAngle + 360}deg); }
`;

export type PlayerStats = {
  attempts: number;
  score: number;
};

export interface FlipFindGameProps {
  setIsGameStarted: Function;
  numOfCards: number;
  setNumOfCards: Function;
  setIsFloatingBackground: Function;
  gameOptions: GameOptions[];
  playerMode: PlayerMode;
  setIsConfettiBackground: Function;
  nicknames: string[];
  isLeftPlayersTurn: boolean;
  setIsLeftPlayersTurn: Function;
  setIsMultiplayerStarterPage: Function;
}

const FlipFindGame: React.FC<FlipFindGameProps> = ({
  setIsGameStarted,
  numOfCards,
  setNumOfCards,
  setIsFloatingBackground,
  gameOptions,
  playerMode,
  setIsConfettiBackground,
  nicknames,
  isLeftPlayersTurn,
  setIsLeftPlayersTurn,
  setIsMultiplayerStarterPage,
}) => {
  const [cards, setCards] = useState<FlippingCard[]>([]);
  const [actualNumOfCards, setActualNumOfCards] = React.useState<number>(numOfCards);
  const [openedCards, setOpenedCards] = useState<FlippingCard[]>([]);

  const [isActiveTimer, setIsActiveTimer] = useState<boolean>(true);
  const [gameTime, setGameTime] = useState<number>(0);

  const [playerStats1, setPlayerStats1] = useState<PlayerStats>({ attempts: 0, score: 0 });
  const [playerStats2, setPlayerStats2] = useState<PlayerStats>({ attempts: 0, score: 0 });

  const [isBoxRotatingLeft, setIsBoxRotatingLeft] = useState<boolean>(false);
  const [startAngle, setStartAngle] = useState(0);
  const [animationRotateLeft, setAnimationRotateLeft] = useState(createDynamicKeyframes(startAngle, true));
  const [animationRotateRight, setAnimationRotateRight] = useState(createDynamicKeyframes(startAngle, false));

  const rotateLeft = () => {
    setIsBoxRotatingLeft(true);
    setAnimationRotateLeft(createDynamicKeyframes(startAngle, true));
    setAnimationRotateRight(createDynamicKeyframes(-startAngle, false));
  };

  const rotateRight = () => {
    setIsBoxRotatingLeft(false);
    setAnimationRotateRight(createDynamicKeyframes(startAngle, false));
    setAnimationRotateLeft(createDynamicKeyframes(-startAngle, true));
  };

  useEffect(() => {
    generateCards(numOfCards, gameOptions, setCards);
    shuffleCards(setCards);
    if (gameOptions.includes('Rotating')) {
      addBlankCards(numOfCards, setNumOfCards, setCards);
    }
    if (gameOptions.includes('Coloured')) {
      addColors(setCards);
    }
    closeAllCards(setCards, actualNumOfCards);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActiveTimer) {
      interval = setInterval(() => {
        setGameTime((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActiveTimer]);

  useEffect(() => {
    if (cards.length === numOfCards && cards.every((card) => card.isVisible === false)) {
      setIsActiveTimer(false);
      setIsConfettiBackground(true);
      setIsLeftPlayersTurn(null);
    }
  }, [cards]);

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

  useEffect(() => {
    const updateInterval = 50;
    const angleIncrement = isBoxRotatingLeft ? -0.225 : 0.225;

    const updateAngle = () => {
      setStartAngle((prevAngle) => (prevAngle + angleIncrement) % 360);
    };

    const timer = setInterval(updateAngle, updateInterval);
    return () => clearInterval(timer);
  }, [isBoxRotatingLeft]);

  const processCorrectCardMatch = (card: FlippingCard) => {
    const timer = setTimeout(() => {
      setCards((prevState) => prevState.map((c) => (c.type === card.type ? { ...c, isVisible: false } : c)));
    }, 900);

    setOpenedCards([]);

    if (playerMode === 'Single' || isLeftPlayersTurn) {
      setPlayerStats1((prevState) => ({ score: prevState.score + 1, attempts: prevState.attempts + 1 }));
    } else {
      setPlayerStats2((prevState) => ({ score: prevState.score + 1, attempts: prevState.attempts + 1 }));
    }

    setIsLeftPlayersTurn(!isLeftPlayersTurn);

    return () => clearTimeout(timer);
  };

  const processIncorrectCardMatch = (card: FlippingCard) => {
    setCards((prevState) => prevState.map((c) => ({ ...c, isDisabled: true })));

    const timer = setTimeout(() => {
      setCards((prevState) => prevState.map((c) => ({ ...c, isOpen: false, isDisabled: false })));
    }, 800);

    setOpenedCards([]);

    if (playerMode === 'Single' || isLeftPlayersTurn) {
      setPlayerStats1((prevState) => ({ ...prevState, attempts: prevState.attempts + 1 }));
    } else {
      setPlayerStats2((prevState) => ({ ...prevState, attempts: prevState.attempts + 1 }));
    }

    setIsLeftPlayersTurn(!isLeftPlayersTurn);

    return () => clearTimeout(timer);
  };

  const isCardMatch = (card: FlippingCard) => card.type === openedCards[0].type;

  const isAlreadyOpened = (card: FlippingCard) => openedCards.some((c) => c.id === card.id);

  const checkCard = (card: FlippingCard, targetNumber: number) => {
    if (openedCards.length === 0) {
      setOpenedCards([card]);
    } else if (isCardMatch(card) && !isAlreadyOpened(card)) {
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
    setIsFloatingBackground(true);
    setIsGameStarted(false);
    setIsLeftPlayersTurn(null);
    setIsMultiplayerStarterPage(false);
  };

  return (
    <Grid container>
      {isActiveTimer && (
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid container justifyContent="center" alignItems="center" flexDirection="column">
            {!gameOptions.includes('Rotating') && (
              <StandardDashboard
                playerStats1={playerStats1}
                playerStats2={playerStats2}
                gameTime={gameTime}
                actualNumOfCards={actualNumOfCards}
                gameOptions={gameOptions}
                isLeftPlayersTurn={isLeftPlayersTurn}
                isMultiplayer={playerMode === 'Multiplayer' ? true : false}
                nicknames={nicknames}
              />
            )}

            <BoxOfCards
              cards={cards}
              setCards={setCards}
              checkCard={checkCard}
              gameOptions={gameOptions}
              isBoxRotatingLeft={isBoxRotatingLeft}
              animationRotateLeft={animationRotateLeft}
              animationRotateRight={animationRotateRight}
              closeGame={closeGame}
            />

            {gameOptions.includes('Rotating') && (
              <Box>
                <RotatingModeDashboard
                  gameOptions={gameOptions}
                  isMultiplayer={playerMode === 'Multiplayer' ? true : false}
                  isLeftPlayersTurn={isLeftPlayersTurn}
                  isBoxRotatingLeft={isBoxRotatingLeft}
                  rotate={rotateRight}
                  playerStats={playerStats1}
                  actualNumOfCards={actualNumOfCards}
                  nickname={nicknames[0]}
                  gameTime={gameTime}
                  isLeftCard={true}
                  numOfCards={numOfCards}
                />

                <RotatingModeDashboard
                  gameOptions={gameOptions}
                  isMultiplayer={playerMode === 'Multiplayer' ? true : false}
                  isLeftPlayersTurn={!isLeftPlayersTurn}
                  isBoxRotatingLeft={isBoxRotatingLeft}
                  rotate={rotateLeft}
                  playerStats={playerStats2}
                  actualNumOfCards={actualNumOfCards}
                  nickname={nicknames[1]}
                  gameTime={gameTime}
                  isLeftCard={false}
                  numOfCards={numOfCards}
                />
              </Box>
            )}

            <ExitGameButton closeGame={closeGame} numOfCards={cards.length} gameOptions={gameOptions} />
          </Grid>
        </Grid>
      )}

      {!isActiveTimer && (
        <GameResultsPage
          gameTime={gameTime}
          isMultiplayer={playerMode === 'Multiplayer' ? true : false}
          gameOptions={gameOptions}
          actualNumOfCards={actualNumOfCards}
          playerStats1={playerStats1}
          playerStats2={playerStats2}
          setIsGameStarted={setIsGameStarted}
          setIsConfettiBackground={setIsConfettiBackground}
          setIsFloatingBackground={setIsFloatingBackground}
          nickname1={nicknames[0]}
          nickname2={nicknames[1]}
        />
      )}
    </Grid>
  );
};

export default FlipFindGame;
