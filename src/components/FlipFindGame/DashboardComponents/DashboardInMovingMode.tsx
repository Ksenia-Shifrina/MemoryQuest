import { Box } from '@mui/material';
import { GameOptions, PlayerMode } from '../../../helpers/helpers';
import { CustomTypography } from '../../../helpers/CustomTypography';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { PlayerStats } from '../FlipFindGame';
import { fadeIn } from '../BoxOfCards';
import PlayerStatusCard from './PlayerStatusCard';
import TimerCard from './TimerCard';
import RotatingButton from './RotatingButton';

export interface DashboardInMovingModeProps {
  gameOptions: GameOptions[];
  isMultiplayer: boolean;
  isLeftPlayer: boolean;
  isRotatingLeft: boolean;
  rotate: Function;
  playerStats: PlayerStats;
  actualNumOfCards: number;
  nickname: string;
  seconds: number;
  isLeftCard: boolean;
}
const DashboardInMovingMode: React.FC<DashboardInMovingModeProps> = ({
  gameOptions,
  isMultiplayer,
  isLeftPlayer,
  isRotatingLeft,
  rotate,
  playerStats,
  actualNumOfCards,
  nickname,
  seconds,
  isLeftCard,
}) => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: '75%',
        left: isLeftCard ? '7rem' : '',
        right: !isLeftCard ? '7rem' : '',
        width: { md: '12rem', lg: '10rem', xl: '18rem' },
        height: { md: '6rem', lg: '5rem', xl: '9rem' },
        animation: `${fadeIn} 1s ease-in forwards`,
      }}
    >
      {isMultiplayer && (
        <PlayerStatusCard
          isMultiplayer={true}
          isActiveInMultiplayerMode={isLeftPlayer}
          gameOptions={gameOptions}
          playerStats={playerStats}
          actualNumOfCards={actualNumOfCards}
          nickname={nickname}
        />
      )}

      {!isMultiplayer && (
        <Box>
          {isLeftCard && (
            <PlayerStatusCard
              isMultiplayer={false}
              isActiveInMultiplayerMode={false}
              gameOptions={gameOptions}
              playerStats={playerStats}
              actualNumOfCards={actualNumOfCards}
              nickname={nickname}
            />
          )}
          {!isLeftCard && <TimerCard seconds={seconds} isMultiplayer={false} />}
        </Box>
      )}

      {isRotatingLeft === isLeftCard && <RotatingButton isLeftCard={isLeftCard} rotate={rotate} />}
    </Box>
  );
};

export default DashboardInMovingMode;
