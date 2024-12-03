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
        mb: '2rem',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '50%',
      }}
    >
      <Grid item xs={4}>
        <PlayerStatusCard
          isActiveInMultiplayerMode={isMultiplayer ? isLeftPlayersTurn : false}
          gameOptions={gameOptions}
          playerStats={playerStats1}
          actualNumOfCards={actualNumOfCards}
          nickname={nicknames[0]}
          isMultiplayer={isMultiplayer}
        />
      </Grid>

      <Grid item xs={4} height="8rem">
        <TimerCard seconds={gameTime} isMultiplayer={isMultiplayer} />
      </Grid>

      {isMultiplayer && (
        <Grid item xs={4}>
          <PlayerStatusCard
            isActiveInMultiplayerMode={!isLeftPlayersTurn}
            gameOptions={gameOptions}
            playerStats={playerStats2}
            actualNumOfCards={actualNumOfCards}
            nickname={nicknames[1]}
            isMultiplayer={true}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default StandardDashboard;
