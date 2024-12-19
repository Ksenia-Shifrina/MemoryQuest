import { Grid } from '@mui/material';
import { Box, keyframes } from '@mui/system';
import { useState } from 'react';
import { DifficultyLevel, GameOptions, Pages, PlayerMode } from '../../helpers/types';
import StarterFlipFind from './StarterFlipFind.tsx/StarterFlipFind';
import FlipFindGame from './FlipFindGame/FlipFindGame';

const moveGamePageCenterAnimation = keyframes`
  0% { transform: translateX(50vw) translateY(0vh) rotate(10deg) scale(0) };
  100% { transform: translateX(0) translateY(0) rotate(0) scale(1) };
`;

const moveGamePageRightAnimation = keyframes`
  0% { transform: translateX(0) translateY(0) rotate(0) scale(1) };
  100% { transform: translateX(50vw) translateY(0vh) rotate(10deg) scale(0) };
`;

export interface FlipFindPageProps {
  currentPage: Pages;
  isMovingMainPageLeft: boolean;
  setIsFloatingBackground: Function;
  isFlipFindGameStarted: boolean;
  setIsFlipFindGameStarted: Function;
  setIsConfettiBackground: Function;
  setNicknames: Function;
  nicknames: string[];
  setIsLeftPlayersTurn: Function;
  isLeftPlayersTurn: boolean | null;
  setIsMultiplayerStarterPage: Function;
  isMultiplayerStarterPage: boolean;
  isCancelledGame: boolean;
  setIsCancelledGame: Function;
}

const FlipFindPage: React.FC<FlipFindPageProps> = ({
  currentPage,
  isMovingMainPageLeft,
  setIsFloatingBackground,
  isFlipFindGameStarted,
  setIsFlipFindGameStarted,
  setIsConfettiBackground,
  setNicknames,
  nicknames,
  setIsLeftPlayersTurn,
  isLeftPlayersTurn,
  setIsMultiplayerStarterPage,
  isMultiplayerStarterPage,
  isCancelledGame,
  setIsCancelledGame,
}) => {
  const [numOfCards, setNumOfCards] = useState<number>(12);
  const [gameOptions, setGameOptions] = useState<GameOptions[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('Casual');
  const [playerMode, setPlayerMode] = useState<PlayerMode>('Single');

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        opacity: currentPage === 'Flip & Find' ? 1 : 0,
        transition: 'opacity 1s ease-in',
        zIndex: 1,
        animation: `${isMovingMainPageLeft ? moveGamePageCenterAnimation : moveGamePageRightAnimation} 1s forwards`,
      }}
    >
      <Box sx={{ height: { md: '12rem', lg: '13rem', xl: '15rem' }, width: '100vw' }} />
      {!isFlipFindGameStarted && (
        <StarterFlipFind
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
          setNumOfCards={setNumOfCards}
          setIsFloatingBackground={setIsFloatingBackground}
          setGameOptions={setGameOptions}
          gameOptions={gameOptions}
          difficultyLevel={difficultyLevel}
          setDifficultyLevel={setDifficultyLevel}
          playerMode={playerMode}
          setPlayerMode={setPlayerMode}
          setNicknames={setNicknames}
          setIsLeftPlayersTurn={setIsLeftPlayersTurn}
          nicknames={nicknames}
          isLeftPlayersTurn={isLeftPlayersTurn}
          setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
          isMultiplayerStarterPage={isMultiplayerStarterPage}
          isCancelledGame={isCancelledGame}
          setIsCancelledGame={setIsCancelledGame}
        />
      )}
      {isFlipFindGameStarted && (
        <FlipFindGame
          numOfCards={numOfCards}
          setNumOfCards={setNumOfCards}
          setIsFloatingBackground={setIsFloatingBackground}
          gameOptions={gameOptions}
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
          playerMode={playerMode}
          setIsConfettiBackground={setIsConfettiBackground}
          nicknames={nicknames}
          isLeftPlayersTurn={isLeftPlayersTurn !== null ? isLeftPlayersTurn : true}
          setIsLeftPlayersTurn={setIsLeftPlayersTurn}
          setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
        />
      )}
    </Grid>
  );
};

export default FlipFindPage;
