import { Grid } from '@mui/material';
import { PlayerStats } from '../FlipFindGame';
import { fadeIn } from '../BoxOfCards';
import { GameOptions } from '../../../../helpers/types';
import MultiplayerResultsCard from './MultiplayerResultsCard';
import MultiplayerGameTimeCard from './MultiplayerGameTimeCard';
import FinishGameButton from './FinishGameButton';
import SinglePlayerResultsCard from './SinglePlayerResultsCard';

export interface GameResultsPageProps {
  gameTime: number;
  playerStats1: PlayerStats;
  playerStats2: PlayerStats;
  setIsFlipFindGameStarted: Function;
  isMultiplayer: boolean;
  gameOptions: GameOptions[];
  actualNumOfCards: number;
  setIsConfettiBackground: Function;
  setIsFloatingBackGround: Function;
  nickname1: string;
  nickname2: string;
}

const GameResultsPage: React.FC<GameResultsPageProps> = ({
  gameTime,
  playerStats1,
  playerStats2,
  setIsFlipFindGameStarted,
  isMultiplayer,
  gameOptions,
  actualNumOfCards,
  setIsConfettiBackground,
  setIsFloatingBackGround,
  nickname1,
  nickname2,
}) => {
  const finishGame = () => {
    setIsFlipFindGameStarted(false);
    setIsConfettiBackground(false);
    setIsFloatingBackGround(true);
  };

  return (
    <Grid container sx={{ animation: `${fadeIn} 1s ease-in forwards` }}>
      {!isMultiplayer && (
        <SinglePlayerResultsCard
          gameTime={gameTime}
          actualNumOfCards={actualNumOfCards}
          playerStats={playerStats1}
          gameOptions={gameOptions}
        />
      )}

      {isMultiplayer && (
        <Grid container sx={{ direction: 'row', justifyContent: 'center', alignItems: 'center', my: '2rem' }}>
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
        </Grid>
      )}

      <FinishGameButton finishGame={finishGame} />
    </Grid>
  );
};

export default GameResultsPage;
