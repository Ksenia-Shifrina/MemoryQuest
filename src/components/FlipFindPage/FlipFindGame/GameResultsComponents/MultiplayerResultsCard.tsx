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
            width: '100%',
            height: '20rem',
            backgroundColor: thisPlayerStats.score > otherPlayerStats.score ? '#824131' : '#D2C1BD',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: thisPlayerStats.score > otherPlayerStats.score ? '#FFFFFF' : '#643529',
            mt: '2rem',
          }}
        >
          <CustomTypography variant="h2">
            {`${nickname}${
              thisPlayerStats.score === otherPlayerStats.score
                ? `, it's a tie!`
                : thisPlayerStats.score > otherPlayerStats.score
                ? ' wins!'
                : ' loses :('
            }`}
          </CustomTypography>
          <CustomTypography variant="h3" sx={{ mt: '2rem' }}>
            Used {thisPlayerStats.attempts} guesses to find
          </CustomTypography>
          <CustomTypography variant="h3" sx={{ mt: '2rem' }}>
            {thisPlayerStats.score}/{gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
            {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
          </CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MultiplayerResultsCard;
