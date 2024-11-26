import * as React from 'react';
import { Grid } from '@mui/material';
import { GameOptions } from '../../../helpers/helpers';
import { PlayerStats } from '../FlipFindGame';
import PlayerStatusCard from './PlayerStatusCard';
import TimerCard from './TimerCard';
import { fadeIn } from '../BoxOfCards';

export interface StandardDashboardProps {
  playerStats1: PlayerStats;
  playerStats2: PlayerStats;
  seconds: number;
  actualNumOfCards: number;
  gameOptions: GameOptions[];
  isPlayer1: boolean;
  isMultiplayer: boolean;
  nickname1: string;
  nickname2: string;
}

const StandardDashboard: React.FC<StandardDashboardProps> = ({
  playerStats1,
  playerStats2,
  seconds,
  actualNumOfCards,
  gameOptions,
  isPlayer1,
  isMultiplayer,
  nickname1,
  nickname2,
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
          isActiveInMultiplayerMode={isMultiplayer ? isPlayer1 : false}
          gameOptions={gameOptions}
          playerStats={playerStats1}
          actualNumOfCards={actualNumOfCards}
          nickname={nickname1}
          isMultiplayer={isMultiplayer}
        />
      </Grid>

      <Grid item xs={4} height="8rem">
        <TimerCard seconds={seconds} isMultiplayer={isMultiplayer} />
      </Grid>

      {isMultiplayer && (
        <Grid item xs={4}>
          <PlayerStatusCard
            isActiveInMultiplayerMode={!isPlayer1}
            gameOptions={gameOptions}
            playerStats={playerStats2}
            actualNumOfCards={actualNumOfCards}
            nickname={nickname2}
            isMultiplayer={true}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default StandardDashboard;
