import { Grid } from '@mui/material';
import { useState } from 'react';
import { DifficultyLevel, GameOptions, PlayerMode } from '../../../helpers/types';
import MultiplayerStarter from './MultiplayerStarter/MultiplayerStarter';
import MainStarter from './MainStarter/MainStarter';

export interface StarterFlipFindProps {
  setNumOfCards: Function;
  setIsFloatingBackground: Function;
  setIsGameStarted: Function;
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
  isCancelledGame: boolean;
  setIsCancelledGame: Function;
}

const StarterFlipFind: React.FC<StarterFlipFindProps> = ({
  setNumOfCards,
  setIsFloatingBackground,
  setIsGameStarted,
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
  isCancelledGame,
  setIsCancelledGame,
}) => {
  const startGame = () => {
    setIsFloatingBackground(false);
    setIsGameStarted(true);
    setIsMultiplayerStarterPage(false);
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
    <Grid container>
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
          isCancelledGame={isCancelledGame}
          setIsCancelledGame={setIsCancelledGame}
        />
      )}
    </Grid>
  );
};

export default StarterFlipFind;
