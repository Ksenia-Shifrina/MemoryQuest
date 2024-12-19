import { PlayerStats } from '../../FlipFindGame';
import CardWrapper from './CardWrapper';
import { GameOptions } from '../../../../../helpers/types';
import { CustomTypography } from '../../../../../helpers/CustomTypography';

export interface PlayerScoreCardProps {
  isActiveInMultiplayerMode: boolean;
  gameOptions: GameOptions[];
  playerStats: PlayerStats;
  actualNumOfCards: number;
  nickname: string;
  isMultiplayer: boolean;
}

const PlayerScoreCard: React.FC<PlayerScoreCardProps> = ({
  isActiveInMultiplayerMode,
  gameOptions,
  playerStats,
  actualNumOfCards,
  nickname,
  isMultiplayer,
}) => {
  const singlePlayerTextFontSize = { md: '1.5rem', lg: '1.8rem', xl: '2rem' };
  const multiplayerTextFontSize = { md: '1.2rem', lg: '1.3rem', xl: '1.5rem' };
  const nicknameFontSize = { md: '1.4rem', lg: '1.6rem', xl: '1.8rem' };

  return (
    <CardWrapper
      sx={{
        backgroundColor: isActiveInMultiplayerMode ? '#824131' : '#D2C1BD',
        color: isActiveInMultiplayerMode ? '#FFFFFF' : '#643529',
        transform: isActiveInMultiplayerMode ? 'scale(1.05)' : 'none',
        transition: 'background-color 0.3s ease-in-out, transform 0.5s',
        py: '1.5rem',
      }}
    >
      {isMultiplayer && (
        <CustomTypography sx={{ fontWeight: 'bold', fontSize: nicknameFontSize }}>
          {nickname}
          {isActiveInMultiplayerMode ? `'s turn` : ''}
        </CustomTypography>
      )}

      <CustomTypography sx={{ fontSize: isMultiplayer ? multiplayerTextFontSize : singlePlayerTextFontSize }}>
        Attempts: {playerStats.attempts}
      </CustomTypography>

      <CustomTypography sx={{ fontSize: isMultiplayer ? multiplayerTextFontSize : singlePlayerTextFontSize }}>
        Found {playerStats.score} / {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
        {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
      </CustomTypography>
    </CardWrapper>
  );
};

export default PlayerScoreCard;
