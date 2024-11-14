import { Grid } from '@mui/material';
import { useState } from 'react';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../helpers/helpers';
import StarterFlipFind from './StarterFlipFind.tsx/StarterFlipFind';
import FlipFindGame from '../../FlipFindGame/FlipFindGame';

export interface FlipFindPageProps {
  isFlipFindPage: boolean;
  isAnimating: boolean;
  setIsFloatingBackGround: Function;
  isFlipFindGameStarted: boolean;
  setIsFlipFindGameStarted: Function;
}

const FlipFindPage: React.FC<FlipFindPageProps> = ({
  isFlipFindPage,
  isAnimating,
  setIsFloatingBackGround,
  isFlipFindGameStarted,
  setIsFlipFindGameStarted,
}) => {
  const [numOfCards, setNumOfCards] = useState<number>(12);
  const [gameOptions, setGameOptions] = useState<GameVariation[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('Casual');
  const [playersNum, setPlayersNum] = useState<PlayersVariation>('Single');

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top={0}
      left={0}
      mt={'12rem'}
      sx={{
        opacity: isFlipFindPage ? 1 : 0,
        // overflow: 'auto',
        transition: 'opacity 1s ease-in',
        animation: isAnimating
          ? 'moveMiniGamesPageCenterAnimation 1s forwards'
          : 'moveMiniGamesPageRightAnimation 1s forwards',
        '@keyframes moveMiniGamesPageCenterAnimation': {
          '0%': {
            transform: 'translateX(50vw) translateY(10vh) rotate(50deg) scale(0)',
          },

          '100%': {
            transform: 'translateX(0) translateY(0) rotate(0) scale(1)',
          },
        },
        '@keyframes moveMiniGamesPageRightAnimation': {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(0) scale(1)',
          },

          '100%': {
            transform: 'translateX(50vw) translateY(10vh) rotate(50deg) scale(0)',
          },
        },
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
          playersNum={playersNum}
          setPlayersNum={setPlayersNum}
        />
      )}
      {isFlipFindGameStarted && (
        <FlipFindGame
          numOfCards={numOfCards}
          setNumOfCards={setNumOfCards}
          setIsFloatingBackGround={setIsFloatingBackGround}
          gameOptions={gameOptions}
          setIsFlipFindGameStarted={setIsFlipFindGameStarted}
        />
      )}
    </Grid>
  );
};

export default FlipFindPage;
