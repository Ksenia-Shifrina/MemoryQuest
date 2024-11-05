import { Box, Grid, keyframes } from '@mui/material';
import { useState } from 'react';
import { CustomTypography } from '../../../helpers/CustomTypography';
import TopRow from './TopRow/TopRow';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../helpers/helpers';
import BottomRow from './BottomRow/BottomRow';

export interface StarterPracticePageProps {
  setIsStandardGameStarted: Function;
  setIsMovingGameStarted: Function;
  setIsColorGameStarted: Function;
  setIsTriplesGameStarted: Function;
  setNumOfCards: Function;
}

const StarterPracticePage: React.FC<StarterPracticePageProps> = ({
  setIsStandardGameStarted,
  setIsMovingGameStarted,
  setIsColorGameStarted,
  setIsTriplesGameStarted,
  setNumOfCards,
}) => {
  const [gameVariation, setGameVariation] = useState<GameVariation>('Standard');
  const [isDisplayGameOptions, setIsDisplayGameOptions] = useState<boolean>(true);

  const [playersNum, setPlayersNum] = useState<PlayersVariation>('Single');

  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('Easy');
  const [isDisplayDifficultyOptions, setIsDisplayDifficultyOptions] = useState<boolean>(true);

  const handleStart = () => {
    if (playersNum === 'Single' && gameVariation === 'Standard') {
      setIsStandardGameStarted(true);
      if (difficultyLevel === 'Easy') {
        setNumOfCards(12);
      } else if (difficultyLevel === 'Medium') {
        setNumOfCards(16);
      } else if (difficultyLevel === 'Hard') {
        setNumOfCards(20);
      }
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" mt={'3rem'}>
      <TopRow
        setIsDisplayGameOptions={setIsDisplayGameOptions}
        isDisplayGameOptions={isDisplayGameOptions}
        gameVariation={gameVariation}
        setPlayersNum={setPlayersNum}
        setIsDisplayDifficultyOptions={setIsDisplayDifficultyOptions}
        isDisplayDifficultyOptions={isDisplayDifficultyOptions}
        difficultyLevel={difficultyLevel}
        playersNum={playersNum}
      />
      <BottomRow
        handleStart={handleStart}
        isDisplayGameOptions={isDisplayGameOptions}
        isDisplayDifficultyOptions={isDisplayDifficultyOptions}
        setDifficultyLevel={setDifficultyLevel}
        setIsDisplayDifficultyOptions={setIsDisplayDifficultyOptions}
        setGameVariation={setGameVariation}
        setIsDisplayGameOptions={setIsDisplayGameOptions}
      />
    </Grid>
  );
};

export default StarterPracticePage;
