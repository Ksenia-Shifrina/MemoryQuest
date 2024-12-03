import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../helpers/types';
import { PlayerStats } from '../FlipFindGame';
import GameTimeContent from './GameTimeContent';

export interface SinglePlayerResultsCardProps {
  gameTime: number;
  actualNumOfCards: number;
  playerStats: PlayerStats;
  gameOptions: GameOptions[];
}

const SinglePlayerResultsCard: React.FC<SinglePlayerResultsCardProps> = ({
  gameTime,
  actualNumOfCards,
  playerStats,
  gameOptions,
}) => {
  return (
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

          <GameTimeContent gameTime={gameTime} isMultiplayer={false} />

          <CustomTypography variant="h3" sx={{ mt: '2rem' }}>
            {playerStats.attempts} guesses to find{' '}
            {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
            {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
          </CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SinglePlayerResultsCard;
