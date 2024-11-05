import { Grid } from '@mui/material';
import StandardGame from '../Games/StandardGame';
import { useState } from 'react';
import Header from '../Header';
import StarterPracticePage from './StarterPracticePage/StarterPracticePage';
import FloatingIconsBackground from './FloatingIconsBackground';

export type validNumberOfCards = 12 | 16 | 20;

export interface PracticePageProps {
  setIsPracticePage: Function;
}

const PracticePage: React.FC<PracticePageProps> = ({ setIsPracticePage }) => {
  const [isStandardGameStarted, setIsStandardGameStarted] = useState<boolean>(false);
  const [isMovingGameStarted, setIsMovingGameStarted] = useState<boolean>(false);
  const [isColorGameStarted, setIsColorGameStarted] = useState<boolean>(false);
  const [isTriplesGameStarted, setIsTriplesGameStarted] = useState<boolean>(false);
  const [numOfCards, setNumOfCards] = useState<validNumberOfCards>(12);

  return (
    <Grid container justifyContent="center" alignItems="center">
      {!isStandardGameStarted && !isMovingGameStarted && !isColorGameStarted && !isTriplesGameStarted && (
        <Grid item xs={12}>
          <FloatingIconsBackground />
          <StarterPracticePage
            setIsStandardGameStarted={setIsStandardGameStarted}
            setIsMovingGameStarted={setIsMovingGameStarted}
            setIsColorGameStarted={setIsColorGameStarted}
            setIsTriplesGameStarted={setIsTriplesGameStarted}
            setNumOfCards={setNumOfCards}
          />
        </Grid>
      )}
      {isStandardGameStarted && (
        <Grid item xs={12}>
          <StandardGame setIsStandardGameStarted={setIsStandardGameStarted} numOfCards={numOfCards} />{' '}
        </Grid>
      )}
    </Grid>
  );
};

export default PracticePage;
