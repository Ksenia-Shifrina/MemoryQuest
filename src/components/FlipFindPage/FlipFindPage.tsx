import { Grid } from '@mui/material';
import { Box, keyframes } from '@mui/system';
import { useEffect, useState } from 'react';
import { DifficultyLevel, GameOptions, Pages, PlayerMode } from '../../helpers/types';
import StarterFlipFind from './StarterFlipFind.tsx/StarterFlipFind';
import FlipFindGame from './FlipFindGame/FlipFindGame';

export const moveGamePageCenterAnimation = keyframes`
  0% { transform: translateX(50vw) translateY(0vh) rotate(10deg) scale(0) };
  100% { transform: translateX(0) translateY(0) rotate(0) scale(1) };
`;

export const moveGamePageRightAnimation = keyframes`
  0% { transform: translateX(0) translateY(0) rotate(0) scale(1) };
  100% { transform: translateX(50vw) translateY(0vh) rotate(10deg) scale(0) };
`;

export interface FlipFindPageProps {
  currentPage: Pages;
  setIsFloatingBackground: Function;
  isGameStarted: boolean;
  setIsGameStarted: Function;
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
  setIsFloatingBackground,
  isGameStarted,
  setIsGameStarted,
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

  const isOpenFlipFind = currentPage === 'Flip & Find' ? true : false;

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        opacity: currentPage === 'Flip & Find' ? 1 : 0,
        transition: 'opacity 1s ease-in',
        zIndex: 1,
        animation: `${isOpenFlipFind ? moveGamePageCenterAnimation : moveGamePageRightAnimation} 1s forwards`,
      }}
    >
      <Box sx={{ height: { md: '12rem', lg: '13rem', xl: '15rem' }, width: '100vw' }} />
      {isGameStarted ? (
        <FlipFindGame
          numOfCards={numOfCards}
          setNumOfCards={setNumOfCards}
          setIsFloatingBackground={setIsFloatingBackground}
          gameOptions={gameOptions}
          setIsGameStarted={setIsGameStarted}
          playerMode={playerMode}
          setIsConfettiBackground={setIsConfettiBackground}
          nicknames={nicknames}
          isLeftPlayersTurn={isLeftPlayersTurn !== null ? isLeftPlayersTurn : true}
          setIsLeftPlayersTurn={setIsLeftPlayersTurn}
          setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
        />
      ) : (
        <StarterFlipFind
          setIsGameStarted={setIsGameStarted}
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
    </Grid>
  );
};

export default FlipFindPage;
