import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../../helpers/types';
import { PlayerStats } from '../../FlipFindGame';

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
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        maxWidth: { lg: '35rem', xl: '40rem' },
        backgroundColor: thisPlayerStats.score > otherPlayerStats.score ? '#824131' : '#D2C1BD',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: thisPlayerStats.score > otherPlayerStats.score ? '#FFFFFF' : '#643529',
        p: { md: '2rem', xl: '3rem' },
        mx: '1rem',
        mt: { lg: '1rem', xl: 0 },
      }}
    >
      <CustomTypography
        sx={{
          fontSize: { md: '1.5rem', lg: '2rem', xl: '2.5rem' },
        }}
      >
        {`${nickname}${
          thisPlayerStats.score === otherPlayerStats.score
            ? `, it's a tie!`
            : thisPlayerStats.score > otherPlayerStats.score
            ? ' won!'
            : ' lost :('
        }`}
      </CustomTypography>

      <CustomTypography
        variant="h3"
        sx={{ mt: { md: '1rem', xl: '2rem' }, fontSize: { md: '1.5rem', lg: '2rem', xl: '2.5rem' } }}
      >
        Used {thisPlayerStats.attempts} guesses to find
      </CustomTypography>

      <CustomTypography
        variant="h3"
        sx={{ mt: { md: '1rem', xl: '2rem' }, fontSize: { md: '1.5rem', lg: '2rem', xl: '2.5rem' } }}
      >
        {thisPlayerStats.score}/{gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
        {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
      </CustomTypography>
    </Box>
  );
};

export default MultiplayerResultsCard;
