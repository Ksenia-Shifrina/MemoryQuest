import { Box, Grid } from '@mui/material';
import { PlayerStats } from '../FlipFindGame';
import { fadeIn } from '../GameLogic/BoxOfCards';
import { GameOptions } from '../../../../helpers/types';
import MultiplayerResultsCard from './Components/MultiplayerResultsCard';
import MultiplayerGameTimeCard from './Components/MultiplayerGameTimeCard';
import FinishGameButton from './Components/FinishGameButton';
import SinglePlayerResultsCard from './Components/SinglePlayerResultsCard';

export interface GameResultsPageProps {
  gameTime: number;
  playerStats1: PlayerStats;
  playerStats2: PlayerStats;
  setIsGameStarted: Function;
  isMultiplayer: boolean;
  gameOptions: GameOptions[];
  actualNumOfCards: number;
  setIsConfettiBackground: Function;
  setIsFloatingBackground: Function;
  nickname1: string;
  nickname2: string;
}

const GameResultsPage: React.FC<GameResultsPageProps> = ({
  gameTime,
  playerStats1,
  playerStats2,
  setIsGameStarted,
  isMultiplayer,
  gameOptions,
  actualNumOfCards,
  setIsConfettiBackground,
  setIsFloatingBackground,
  nickname1,
  nickname2,
}) => {
  const finishGame = () => {
    setIsGameStarted(false);
    setIsConfettiBackground(false);
    setIsFloatingBackground(true);
  };

  return (
    <Grid
      container
      sx={{
        animation: `${fadeIn} 1s ease-in forwards`,
        mb: '7rem',
        justifyContent: 'center',
      }}
    >
      {!isMultiplayer ? (
        <SinglePlayerResultsCard
          gameTime={gameTime}
          actualNumOfCards={actualNumOfCards}
          playerStats={playerStats1}
          gameOptions={gameOptions}
        />
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 2fr',
            flexDirectionirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xl: '3rem' },
            gap: 5,
          }}
        >
          <MultiplayerResultsCard
            nickname={nickname1}
            gameOptions={gameOptions}
            thisPlayerStats={playerStats1}
            otherPlayerStats={playerStats2}
            actualNumOfCards={actualNumOfCards}
          />

          <MultiplayerGameTimeCard gameTime={gameTime} />

          <MultiplayerResultsCard
            nickname={nickname2}
            gameOptions={gameOptions}
            thisPlayerStats={playerStats2}
            otherPlayerStats={playerStats1}
            actualNumOfCards={actualNumOfCards}
          />
        </Box>
      )}

      <FinishGameButton finishGame={finishGame} />
    </Grid>
  );
};

export default GameResultsPage;
