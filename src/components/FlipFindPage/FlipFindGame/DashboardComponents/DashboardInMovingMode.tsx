import { Box } from '@mui/material';
import { PlayerStats } from '../FlipFindGame';
import { fadeIn } from '../BoxOfCards';
import PlayerStatusCard from './PlayerStatusCard';
import TimerCard from './TimerCard';
import RotatingButton from './RotatingButton';
import { GameOptions } from '../../../../helpers/types';

export interface DashboardInMovingModeProps {
  gameOptions: GameOptions[];
  isMultiplayer: boolean;
  isLeftPlayersTurn: boolean;
  isBoxRotatingLeft: boolean;
  rotate: Function;
  playerStats: PlayerStats;
  actualNumOfCards: number;
  nickname: string;
  gameTime: number;
  isLeftCard: boolean;
  numOfCards: number;
}
const DashboardInMovingMode: React.FC<DashboardInMovingModeProps> = ({
  gameOptions,
  isMultiplayer,
  isLeftPlayersTurn,
  isBoxRotatingLeft,
  rotate,
  playerStats,
  actualNumOfCards,
  nickname,
  gameTime,
  isLeftCard,
  numOfCards,
}) => {
  return (
    <Box
      sx={{
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: numOfCards === 36 ? '65%' : numOfCards === 25 ? '55%' : '45%',
        left: isLeftCard ? '7rem' : '',
        right: !isLeftCard ? '7rem' : '',
        // width: { md: '12rem', lg: '10rem', xl: '18rem' },
        // height: { md: '6rem', lg: '5rem', xl: '18rem' },
        width: 'fit-content',
        height: 'fit-content',
        animation: `${fadeIn} 1s ease-in forwards`,
      }}
    >
      {isMultiplayer && (
        <PlayerStatusCard
          isMultiplayer={true}
          isActiveInMultiplayerMode={isLeftPlayersTurn}
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
          {!isLeftCard && <TimerCard seconds={gameTime} isMultiplayer={false} />}
        </Box>
      )}

      <RotatingButton isLeftCard={isLeftCard} rotate={rotate} isBoxRotatingLeft={isBoxRotatingLeft} />
    </Box>
  );
};

export default DashboardInMovingMode;
