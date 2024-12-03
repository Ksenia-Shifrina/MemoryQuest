import { Grid } from '@mui/material';
import { keyframes } from '@mui/system';
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
  setIsFloatingBackGround: Function;
  isFlipFindGameStarted: boolean;
  setIsFlipFindGameStarted: Function;
  setIsConfettiBackground: Function;
  setNicknames: Function;
  nicknames: string[];
  setIsLeftPlayersTurn: Function;
  isLeftPlayersTurn: boolean | null;
}

const FlipFindPage: React.FC<FlipFindPageProps> = ({
  currentPage,
  isMovingMainPageLeft,
  setIsFloatingBackGround,
  isFlipFindGameStarted,
  setIsFlipFindGameStarted,
  setIsConfettiBackground,
  setNicknames,
  nicknames,
  setIsLeftPlayersTurn,
  isLeftPlayersTurn,
}) => {
  const [numOfCards, setNumOfCards] = useState<number>(12);
  const [gameOptions, setGameOptions] = useState<GameOptions[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('Casual');
  const [playerMode, setPlayerMode] = useState<PlayerMode>('Single');

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      top={0}
      left="center"
      mt={'12rem'}
      sx={{
        opacity: currentPage === 'Flip & Find' ? 1 : 0,
        transition: 'opacity 1s ease-in',
        zIndex: 1,
        animation: `${isMovingMainPageLeft ? moveGamePageCenterAnimation : moveGamePageRightAnimation} 1s forwards`,
      }}
    >
      {!isFlipFindGameStarted && (
        <StarterFlipFind
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
          setNumOfCards={setNumOfCards}
          setIsFloatingBackGround={setIsFloatingBackGround}
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
        />
      )}
      {isFlipFindGameStarted && (
        <FlipFindGame
          numOfCards={numOfCards}
          setNumOfCards={setNumOfCards}
          setIsFloatingBackGround={setIsFloatingBackGround}
          gameOptions={gameOptions}
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
          playerMode={playerMode}
          setIsConfettiBackground={setIsConfettiBackground}
          nicknames={nicknames}
          isLeftPlayersTurn={isLeftPlayersTurn !== null ? isLeftPlayersTurn : true}
          setIsLeftPlayersTurn={setIsLeftPlayersTurn}
        />
      )}
    </Grid>
  );
};

export default FlipFindPage;
