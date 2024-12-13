import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../helpers/types';
import { PlayerStats } from '../FlipFindGame';

export interface MultiplayerResultsCardProps {
  nickname: string;
  gameOptions: GameOptions[];
  thisPlayerStats: PlayerStats;
  otherPlayerStats: PlayerStats;
  actualNumOfCards: number;
}

const MultiplayerResultsCard: React.FC<MultiplayerResultsCardProps> = ({
  nickname,
  gameOptions,
  thisPlayerStats,
  otherPlayerStats,
  actualNumOfCards,
}) => {
  return (
    <Grid item md={4} sx={{ direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            width: { md: '100%', xl: '80%' },
            maxWidth: '40rem',
            height: { md: '17rem', lg: '20rem', xl: '25rem' },
            backgroundColor: thisPlayerStats.score > otherPlayerStats.score ? '#824131' : '#D2C1BD',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: thisPlayerStats.score > otherPlayerStats.score ? '#FFFFFF' : '#643529',
            p: { md: '2rem', xl: '3rem' },
          }}
        >
          <CustomTypography variant="h2" sx={{ fontSize: { md: '2rem', lg: '2.5rem', xl: '3rem' } }}>
            {`${nickname}${
              thisPlayerStats.score === otherPlayerStats.score
                ? `, it's a tie!`
                : thisPlayerStats.score > otherPlayerStats.score
                ? ' wins!'
                : ' loses :('
            }`}
          </CustomTypography>
          <CustomTypography
            variant="h3"
            sx={{ mt: { md: '1rem', xl: '2rem' }, fontSize: { md: '2rem', lg: '2.5rem', xl: '3rem' } }}
          >
            Used {thisPlayerStats.attempts} guesses to find
          </CustomTypography>
          <CustomTypography
            variant="h3"
            sx={{ mt: { md: '1rem', xl: '2rem' }, fontSize: { md: '2rem', lg: '2.5rem', xl: '3rem' } }}
          >
            {thisPlayerStats.score}/{gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
            {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
          </CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MultiplayerResultsCard;
