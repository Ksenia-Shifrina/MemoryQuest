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
  const inRotatingMode = gameOptions.includes('Rotating');
  const inColouredMode = gameOptions.includes('Coloured');
  const inAnyMode = gameOptions.includes('Coloured') || gameOptions.includes('Rotating');
  const inTriplesMode = gameOptions.includes('Triples');

  return (
    <Grid item md={12} sx={{ direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            width: { md: '60%', xl: '55%' },
            maxWidth: { md: '35rem', lg: '40rem', xl: '55rem' },
            height: 'fit-content',
            backgroundColor: '#D2C1BD',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#7B4234',
            py: '3rem',
          }}
        >
          <CustomTypography
            sx={{
              fontSize: { md: '2.5rem', lg: '2.5rem', xl: '3.5rem' },
              fontWeight: 'bold',
            }}
          >
            {' '}
            It took you...
          </CustomTypography>

          <GameTimeContent gameTime={gameTime} isMultiplayer={false} />

          <CustomTypography
            sx={{ mt: { md: '0.5rem', lg: '1rem', xl: '2rem' }, fontSize: { md: '2rem', lg: '2.5rem', xl: '3.5rem' } }}
          >
            {playerStats.attempts} guesses to find {inTriplesMode ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
            {inTriplesMode ? 'triples' : 'pairs'}
          </CustomTypography>

          {inAnyMode && (
            <CustomTypography sx={{ mt: '2rem', fontSize: { md: '2rem', lg: '2.5rem', xl: '3.5rem' } }}>
              in{' '}
              {inColouredMode && (
                <Box
                  component="span"
                  sx={{
                    textDecoration: 'underline wavy',
                    textDecorationThickness: '3px',
                    textUnderlineOffset: '0.5rem',
                  }}
                >
                  colored
                </Box>
              )}
              {inColouredMode && inRotatingMode ? ' and ' : ''}
              {inRotatingMode && (
                <Box
                  component="span"
                  sx={{
                    textDecoration: 'underline dotted',
                    textDecorationThickness: '5px',
                    textUnderlineOffset: '0.5rem',
                  }}
                >
                  rotating
                </Box>
              )}
              {inColouredMode && inRotatingMode ? ' modes' : ' mode'}
            </CustomTypography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SinglePlayerResultsCard;
