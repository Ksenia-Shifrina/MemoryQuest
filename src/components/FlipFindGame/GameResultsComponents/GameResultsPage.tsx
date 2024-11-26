import { Box, Grid } from '@mui/material';
import { PlayerStats } from '../FlipFindGame';
import { GameOptions } from '../../../helpers/helpers';
import CardWrapper from '../DashboardComponents/CardWrapper';
import { CustomTypography } from '../../../helpers/CustomTypography';

export interface GameResultsPageProps {
  seconds: number;
  playerStats1: PlayerStats;
  playerStats2: PlayerStats;
  setIsFlipFindGameStarted: Function;
  isMultiplayer: boolean;
  gameOptions: GameOptions[];
  actualNumOfCards: number;
}

const GameResultsPage: React.FC<GameResultsPageProps> = ({
  seconds,
  playerStats1,
  playerStats2,
  setIsFlipFindGameStarted,
  isMultiplayer,
  gameOptions,
  actualNumOfCards,
}) => {
  const finishGame = () => {
    setIsFlipFindGameStarted(false);
  };

  return (
    <Grid container>
      <Grid item md={12} sx={{ direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              position: 'relative',
              width: '45%',
              height: '20rem',
              backgroundColor: '#D2C1BD',
              borderRadius: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color: '#7B4234',
              mt: '2rem',
            }}
          >
            <CustomTypography variant="h2"> It took you...</CustomTypography>
            <CustomTypography variant="h3" sx={{ mt: '2rem' }}>
              {Math.floor(seconds / 60)} minute
              {seconds % 60 === 0 ? '' : seconds % 60} {seconds % 60 === 1 ? ' second' : ' seconds'}
            </CustomTypography>
            <CustomTypography variant="h3" sx={{ mt: '2rem' }}>
              and {playerStats1.attempts} guesses to find{' '}
              {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
              {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
            </CustomTypography>
          </Box>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Grid container sx={{ direction: 'column', justifyContent: 'center', alignItems: 'center', mt: '4rem' }}>
          <Box
            onClick={finishGame}
            sx={{
              position: 'relative',
              width: '20%',
              height: '4rem',
              cursor: 'pointer',
              backgroundColor: '#824131',
              borderRadius: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              color: '#FFFFFF',
              p: '0.5rem',
              mb: '1rem',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CustomTypography variant="h4">Back to Start</CustomTypography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GameResultsPage;
