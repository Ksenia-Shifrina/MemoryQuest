import { Grid } from '@mui/material';
import { useState } from 'react';
import { DifficultyLevel, GameOptions, GameVariation, PlayersVariation } from '../../../helpers/helpers';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn/CenterColumn';
import RightColumn from './RightColumn';

export interface StarterPracticePageProps {
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  setIsMiniGameStarted: Function;
  setGameOptions: Function;
  gameOptions: GameVariation[];
}

const StarterPracticePage: React.FC<StarterPracticePageProps> = ({
  setNumOfCards,
  setIsFloatingBackGround,
  setIsMiniGameStarted,
  setGameOptions,
  gameOptions,
}) => {
  const [playersNum, setPlayersNum] = useState<PlayersVariation>('Single');
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('Casual');

  const handleStart = () => {
    if (playersNum === 'Single' && gameOptions.includes('Triples')) {
      if (difficultyLevel === 'Casual') {
        setNumOfCards(15);
      } else if (difficultyLevel === 'Challenging') {
        setNumOfCards(18);
      } else if (difficultyLevel === 'Hardcore') {
        setNumOfCards(21);
      }
    } else {
      if (difficultyLevel === 'Casual') {
        setNumOfCards(12);
      } else if (difficultyLevel === 'Challenging') {
        setNumOfCards(18);
      } else if (difficultyLevel === 'Hardcore') {
        setNumOfCards(24);
      }
    }
    setIsFloatingBackGround(false);
    setIsMiniGameStarted(true);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" mt={'3rem'}>
      <LeftColumn gameOptions={gameOptions} setGameOptions={setGameOptions} />
      <CenterColumn setPlayersNum={setPlayersNum} playersNum={playersNum} handleStart={handleStart} />
      <RightColumn difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
    </Grid>
  );
};

export default StarterPracticePage;
