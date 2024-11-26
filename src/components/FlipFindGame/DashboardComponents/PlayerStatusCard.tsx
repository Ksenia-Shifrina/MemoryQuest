import { Box } from '@mui/material';
import { CustomTypography } from '../../../helpers/CustomTypography';
import { fadeIn } from '../BoxOfCards';
import { GameOptions } from '../../../helpers/helpers';
import { PlayerStats } from '../FlipFindGame';
import { useEffect, useState } from 'react';
import CardWrapper from './CardWrapper';

export interface PlayerStatusCardProps {
  isActiveInMultiplayerMode: boolean;
  gameOptions: GameOptions[];
  playerStats: PlayerStats;
  actualNumOfCards: number;
  nickname: string;
  isMultiplayer: boolean;
}

const PlayerStatusCard: React.FC<PlayerStatusCardProps> = ({
  isActiveInMultiplayerMode,
  gameOptions,
  playerStats,
  actualNumOfCards,
  nickname,
  isMultiplayer,
}) => {
  return (
    <CardWrapper
      sx={{
        backgroundColor: isActiveInMultiplayerMode ? '#824131' : '#D2C1BD',
        color: isActiveInMultiplayerMode ? '#FFFFFF' : '#643529',
        transform: isActiveInMultiplayerMode ? 'scale(1.1)' : 'none',
        transition: 'background-color 0.3s ease-in-out, transform 0.5s',
      }}
    >
      {isMultiplayer && (
        <CustomTypography variant="h5" sx={{ fontWeight: 'bold' }}>
          {nickname}
        </CustomTypography>
      )}
      <CustomTypography variant="h5" sx={{ mb: !isMultiplayer ? '0rem' : '0' }}>
        Attempts: {playerStats.attempts}
      </CustomTypography>
      <CustomTypography variant="h5">
        Found {playerStats.score} / {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
        {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
      </CustomTypography>
    </CardWrapper>
  );
};

export default PlayerStatusCard;
