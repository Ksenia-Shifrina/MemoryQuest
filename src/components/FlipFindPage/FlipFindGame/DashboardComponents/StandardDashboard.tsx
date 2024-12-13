import * as React from 'react';
import { Grid } from '@mui/material';
import { PlayerStats } from '../FlipFindGame';
import PlayerStatusCard from './PlayerStatusCard';
import TimerCard from './TimerCard';
import { fadeIn } from '../BoxOfCards';
import { GameOptions } from '../../../../helpers/types';

export interface StandardDashboardProps {
  playerStats1: PlayerStats;
  playerStats2: PlayerStats;
  gameTime: number;
  actualNumOfCards: number;
  gameOptions: GameOptions[];
  isLeftPlayersTurn: boolean;
  isMultiplayer: boolean;
  nicknames: string[];
}

const StandardDashboard: React.FC<StandardDashboardProps> = ({
  playerStats1,
  playerStats2,
  gameTime,
  actualNumOfCards,
  gameOptions,
  isLeftPlayersTurn,
  isMultiplayer,
  nicknames,
}) => {
  return (
    <Grid
      container
      sx={{
        animation: `${fadeIn} 1s ease-in forwards`,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        mb: '2rem',
      }}
    >
      <PlayerStatusCard
        isActiveInMultiplayerMode={isMultiplayer ? isLeftPlayersTurn : false}
        gameOptions={gameOptions}
        playerStats={playerStats1}
        actualNumOfCards={actualNumOfCards}
        nickname={nicknames[0]}
        isMultiplayer={isMultiplayer}
      />

      {!isMultiplayer && <Grid item xs={1} />}

      <TimerCard seconds={gameTime} isMultiplayer={isMultiplayer} />

      {isMultiplayer && (
        <PlayerStatusCard
          isActiveInMultiplayerMode={!isLeftPlayersTurn}
          gameOptions={gameOptions}
          playerStats={playerStats2}
          actualNumOfCards={actualNumOfCards}
          nickname={nicknames[1]}
          isMultiplayer={true}
        />
      )}
    </Grid>
  );
};

export default StandardDashboard;
