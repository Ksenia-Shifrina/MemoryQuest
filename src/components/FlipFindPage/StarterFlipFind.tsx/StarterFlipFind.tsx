import { Grid } from '@mui/material';
import { useState } from 'react';
import { DifficultyLevel, GameOptions, PlayerMode } from '../../../helpers/types';
import MultiplayerStarter from './MultiplayerStarter/MultiplayerStarter';
import MainStarter from './MainStarter/MainStarter';

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
  setIsMultiplayerStarterPage: Function;
  isMultiplayerStarterPage: boolean;
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
  setIsMultiplayerStarterPage,
  isMultiplayerStarterPage,
}) => {
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
    <Grid container sx={{ mb: '7rem' }}>
      {!isMultiplayerStarterPage && (
        <MainStarter
          gameOptions={gameOptions}
          setGameOptions={setGameOptions}
          setPlayerMode={setPlayerMode}
          playerMode={playerMode}
          handleStart={handleStart}
          difficultyLevel={difficultyLevel}
          setDifficultyLevel={setDifficultyLevel}
        />
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
