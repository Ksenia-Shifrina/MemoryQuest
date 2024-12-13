import { PlayerStats } from '../FlipFindGame';
import CardWrapper from './CardWrapper';
import { GameOptions } from '../../../../helpers/types';
import { CustomTypography } from '../../../../helpers/CustomTypography';

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
        py: '1.5rem',
      }}
    >
      {isMultiplayer && (
        <CustomTypography sx={{ fontWeight: 'bold', fontSize: { md: '1.5rem', lg: '1.7rem', xl: '2rem' } }}>
          {nickname}
          {isActiveInMultiplayerMode ? `'s turn` : ''}
        </CustomTypography>
      )}

      <CustomTypography
        sx={{ mb: !isMultiplayer ? '0rem' : '0', fontSize: { md: '1.5rem', lg: '1.7rem', xl: '2rem' } }}
      >
        Attempts: {playerStats.attempts}
      </CustomTypography>
      <CustomTypography sx={{ fontSize: { md: '1.5rem', lg: '1.7rem', xl: '2rem' } }}>
        Found {playerStats.score} / {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
        {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
      </CustomTypography>
    </CardWrapper>
  );
};

export default PlayerStatusCard;
