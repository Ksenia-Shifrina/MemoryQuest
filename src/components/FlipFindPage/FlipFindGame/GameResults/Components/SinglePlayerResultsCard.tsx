import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../../helpers/types';
import { PlayerStats } from '../../FlipFindGame';
import GameTimeText from './GameTimeText';

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
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: '#D2C1BD',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#7B4234',
            pt: '2.5rem',
            pb: '3rem',
            px: '4rem',
          }}
        >
          <CustomTypography
            sx={{
              fontSize: { md: '2rem', lg: '2.5rem', xl: '3.5rem' },
              fontWeight: 'bold',
              pb: '1rem',
            }}
          >
            {' '}
            It took you...
          </CustomTypography>

          <GameTimeText gameTime={gameTime} isMultiplayer={false} inAnyMode={inAnyMode} />

          <CustomTypography sx={{ mt: '0.5rem', fontSize: { md: '1.5rem', lg: '2rem', xl: '3rem' } }}>
            {playerStats.attempts} guesses to find {inTriplesMode ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
            {inTriplesMode ? 'triples' : 'pairs'}
          </CustomTypography>

          {inAnyMode && (
            <CustomTypography
              sx={{
                mt: '0.5rem',
                fontSize: { md: '1.5rem', lg: '2rem', xl: '3rem' },
              }}
            >
              in{' '}
              {inColouredMode && (
                <Box
                  component="span"
                  sx={{
                    textDecoration: 'underline dotted',
                    textDecorationThickness: { md: '4px', xl: '5px' },
                    textUnderlineOffset: { md: '0.5rem', xl: '0.9rem' },
                  }}
                >
                  coloured
                </Box>
              )}
              {inColouredMode && inRotatingMode ? ' and ' : ''}
              {inRotatingMode && (
                <Box
                  component="span"
                  sx={{
                    textDecoration: 'underline wavy',
                    textDecorationThickness: { md: '2px', xl: '3px' },
                    textUnderlineOffset: { md: '0.5rem', xl: '0.9rem' },
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
