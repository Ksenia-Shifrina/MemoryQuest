import { Box } from '@mui/material';
import { PlayerStats } from '../FlipFindGame';
import { fadeIn } from '../GameLogic/BoxOfCards';
import PlayerScoreCard from './Components/PlayerScoreCard';
import TimerCard from './Components/TimerCard';
import ChangeRotationButton from './Components/ChangeRotationButton';
import { GameOptions } from '../../../../helpers/types';

export interface RotatingModeDashboardProps {
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
const RotatingModeDashboard: React.FC<RotatingModeDashboardProps> = ({
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
  const getSpacingX = (numOfCards: number) => {
    if (numOfCards === 36) {
      return { md: '0vw', lg: '0vw', xl: '3vw' };
    } else if (numOfCards === 25) {
      return { md: '0vw', lg: '0vw', xl: '2vw' };
    } else {
      return { md: '4vw', lg: '4vw', xl: '7vw' };
    }
  };

  const getSpacingY = (numOfCards: number) => {
    if (numOfCards === 36) {
      return { md: '58%', lg: '54%', xl: '54%' };
    } else if (numOfCards === 25) {
      return { md: '55%', lg: '50%', xl: '48%' };
    } else {
      return { md: '52%', lg: '42%', xl: '42%' };
    }
  };

  return (
    <Box
      sx={{
        pointerEvents: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: getSpacingY(numOfCards),
        left: isLeftCard ? getSpacingX(numOfCards) : '',
        right: !isLeftCard ? getSpacingX(numOfCards) : '',
        width: 'fit-content',
        height: 'fit-content',
        animation: `${fadeIn} 1s ease-in forwards`,
      }}
    >
      {!isMultiplayer && !isLeftCard ? (
        <TimerCard seconds={gameTime} isMultiplayer={false} />
      ) : (
        <PlayerScoreCard
          isMultiplayer={isMultiplayer}
          isActiveInMultiplayerMode={isMultiplayer ? isLeftPlayersTurn : false}
          gameOptions={gameOptions}
          playerStats={playerStats}
          actualNumOfCards={actualNumOfCards}
          nickname={nickname}
        />
      )}

      <ChangeRotationButton isLeftCard={isLeftCard} rotate={rotate} isBoxRotatingLeft={isBoxRotatingLeft} />
    </Box>
  );
};

export default RotatingModeDashboard;
