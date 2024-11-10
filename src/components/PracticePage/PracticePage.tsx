import { Grid } from '@mui/material';
import { useState } from 'react';
import StarterPracticePage from './StarterPracticePage/StarterPracticePage';
import { GameOptions, GameVariation } from '../../helpers/helpers';
import MiniGame from './MiniGame';

export type validNumberOfCards = 12 | 16 | 20;

export interface PracticePageProps {
  isPracticePage: boolean;
  isAnimating: boolean;
  setIsFloatingBackGround: Function;
  isMiniGameStarted: boolean;
  setIsMiniGameStarted: Function;
}

const PracticePage: React.FC<PracticePageProps> = ({
  isPracticePage,
  isAnimating,
  setIsFloatingBackGround,
  isMiniGameStarted,
  setIsMiniGameStarted,
}) => {
  const [numOfCards, setNumOfCards] = useState<validNumberOfCards>(12);
  const [gameOptions, setGameOptions] = useState<GameVariation[]>([]);

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
        opacity: isPracticePage ? 1 : 0,
        transition: 'opacity 1s ease-in',
        animation: isAnimating
          ? 'moveAnotherLeftAnimation 1s ease-in-out'
          : 'moveAnotherToRightAnimation 1s ease-in-out',
        '@keyframes moveAnotherLeftAnimation': {
          '0%': {
            transform: 'translateX(50vw) translateY(10vh) rotate(50deg) scale(0)',
          },

          '100%': {
            transform: 'translateX(0) translateY(0) rotate(0) scale(1)',
          },
        },
        '@keyframes moveAnotherToRightAnimation': {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(0) scale(1)',
          },

          '100%': {
            transform: 'translateX(50vw) translateY(10vh) rotate(50deg) scale(0)',
          },
        },
      }}
    >
      {!isMiniGameStarted && (
        <Grid item xs={12}>
          <StarterPracticePage
            setIsMiniGameStarted={setIsMiniGameStarted}
            setNumOfCards={setNumOfCards}
            setIsFloatingBackGround={setIsFloatingBackGround}
            setGameOptions={setGameOptions}
            gameOptions={gameOptions}
          />
        </Grid>
      )}
      {isMiniGameStarted && (
        <Grid item xs={12}>
          <MiniGame
            numOfCards={numOfCards}
            setIsFloatingBackGround={setIsFloatingBackGround}
            gameOptions={gameOptions}
            setIsMiniGameStarted={setIsMiniGameStarted}
          />{' '}
        </Grid>
      )}
      {/* {isTriplesGameStarted && (
        <Grid item xs={12}>
          <TriplesGame
            setIsTriplesGameStarted={setIsTriplesGameStarted}
            numOfCards={numOfCards}
            setIsFloatingBackGround={setIsFloatingBackGround}
            isTriplesGameStarted={isTriplesGameStarted}
          />{' '}
        </Grid>
      )} */}
    </Grid>
  );
};

export default PracticePage;
