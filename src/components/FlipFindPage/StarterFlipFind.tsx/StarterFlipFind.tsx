import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';
import { DifficultyLevel, GameOptions, PlayerMode } from '../../../helpers/types';
import MultiplayerStarter from './MultiplayerStarter/MultiplayerStarter';

export interface StarterFlipFindProps {
  setNumOfCards: Function;
  setIsFloatingBackGround: Function;
  setIsFlipFindGameStarted: Function;
  setGameOptions: Function;
  gameOptions: GameOptions[];
  setDifficultyLevel: Function;
  difficultyLevel: DifficultyLevel;
  setPlayerMode: Function;
  playerMode: PlayerMode;
  setNicknames: Function;
  setIsLeftPlayersTurn: Function;
  nicknames: string[];
  isLeftPlayersTurn: boolean | null;
}

const StarterFlipFind: React.FC<StarterFlipFindProps> = ({
  setNumOfCards,
  setIsFloatingBackGround,
  setIsFlipFindGameStarted,
  setGameOptions,
  gameOptions,
  difficultyLevel,
  setDifficultyLevel,
  setPlayerMode,
  playerMode,
  setNicknames,
  setIsLeftPlayersTurn,
  nicknames,
  isLeftPlayersTurn,
}) => {
  const [isMultiplayerStarterPage, setIsMultiplayerStarterPage] = useState<boolean>(false);

  const startGame = () => {
    setIsFloatingBackGround(false);
    setIsFlipFindGameStarted(true);
  };

  const handleStart = () => {
    if (difficultyLevel === 'Casual') {
      setNumOfCards(12);
    } else if (difficultyLevel === 'Challenging') {
      setNumOfCards(18);
    } else if (difficultyLevel === 'Hardcore') {
      setNumOfCards(24);
    }
    if (playerMode === 'Single') {
      startGame();
    } else {
      setIsMultiplayerStarterPage(true);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" mt={'3rem'}>
      {!isMultiplayerStarterPage && (
        <Grid container>
          <LeftColumn gameOptions={gameOptions} setGameOptions={setGameOptions} />
          <CenterColumn setPlayerMode={setPlayerMode} playerMode={playerMode} handleStart={handleStart} />
          <RightColumn difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
        </Grid>
      )}
      {isMultiplayerStarterPage && (
        <MultiplayerStarter
          setNicknames={setNicknames}
          nicknames={nicknames}
          setIsLeftPlayersTurn={setIsLeftPlayersTurn}
          setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
          startGame={startGame}
          isLeftPlayersTurn={isLeftPlayersTurn}
        />
      )}
    </Grid>
  );
};

export default StarterFlipFind;
