import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../../helpers/helpers';

export interface StarterFlipFindProps {
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  setIsFlipFindGameStarted: Function;
  setGameOptions: Function;
  gameOptions: GameVariation[];
  setDifficultyLevel: Function;
  difficultyLevel: DifficultyLevel;
  setPlayersNum: Function;
  playersNum: PlayersVariation;
}

const StarterFlipFind: React.FC<StarterFlipFindProps> = ({
  setNumOfCards,
  setIsFloatingBackGround,
  setIsFlipFindGameStarted,
  setGameOptions,
  gameOptions,
  difficultyLevel,
  setDifficultyLevel,
  setPlayersNum,
  playersNum,
}) => {
  const handleStart = () => {
    if (difficultyLevel === 'Casual') {
      setNumOfCards(12);
    } else if (difficultyLevel === 'Challenging') {
      setNumOfCards(18);
    } else if (difficultyLevel === 'Hardcore') {
      setNumOfCards(24);
    }
    setIsFloatingBackGround(false);
    setIsFlipFindGameStarted(true);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" mt={'3rem'}>
      <LeftColumn gameOptions={gameOptions} setGameOptions={setGameOptions} />
      <CenterColumn setPlayersNum={setPlayersNum} playersNum={playersNum} handleStart={handleStart} />
      <RightColumn difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
    </Grid>
  );
};

export default StarterFlipFind;
