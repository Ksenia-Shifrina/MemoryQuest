import * as React from 'react';
import { CustomTypography } from '../../helpers/CustomTypography';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { FlippingCardType, GameVariation, PlayersVariation } from '../../helpers/helpers';

import BoxOfCards from './BoxOfCards';

export interface MultiplayerDashboardProps {
  attempts: number;
  attempts2: number;
  seconds: number;
  numOfCards: number;
  gameOptions: GameVariation[];
  score: number;
  score2: number;
  togglePlayers: boolean;
}

const MultiplayerDashboard: React.FC<MultiplayerDashboardProps> = ({
  attempts,
  attempts2,
  seconds,
  numOfCards,
  gameOptions,
  score,
  score2,
  togglePlayers,
}) => {
  const [actualNumOfCards, setActualNumOfCards] = React.useState<number>(numOfCards);

  React.useEffect(() => {
    if (gameOptions.includes('Moving')) {
      if (numOfCards === 16) {
        setActualNumOfCards(12);
      } else if (numOfCards === 25) {
        setActualNumOfCards(18);
      } else if (numOfCards === 36) {
        setActualNumOfCards(24);
      }
    }
  }, [numOfCards]);

  return (
    <Grid container justifyContent="center" alignItems="center" width={'50%'}>
      <Grid item xs={4}>
        <Grid container justifyContent="center">
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '8rem',
              backgroundColor: togglePlayers ? '#824131' : '#D2C1BD',
              borderRadius: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color: togglePlayers ? '#FFFFFF' : '#643529',
              transform: togglePlayers ? 'scale(1.1)' : 'none',
              transition: 'background-color 0.3s ease-in-out, transform 0.5s',
            }}
          >
            <CustomTypography variant="h5" sx={{ fontWeight: 'bold' }}>
              Ksu
            </CustomTypography>
            <CustomTypography variant="h5">
              Found {score} out of {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
              {gameOptions.includes('Triples') ? (score === 1 ? 'triple' : 'triples') : score === 1 ? 'pair' : 'pairs'}
            </CustomTypography>
            <CustomTypography variant="h5">Attempts: {attempts}</CustomTypography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={4} height="8rem">
        <Grid container justifyContent="center">
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '8rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#7B4234',
            }}
          >
            <CustomTypography variant="h2">
              {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? 0 : ''}
              {seconds % 60}
            </CustomTypography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Grid container justifyContent="center">
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '8rem',
              backgroundColor: !togglePlayers ? '#824131' : '#D2C1BD',
              borderRadius: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color: !togglePlayers ? '#FFFFFF' : '#643529',
              transform: !togglePlayers ? 'scale(1.1)' : 'none',
              transition: 'background-color 0.3s ease-in-out, transform 0.5s',
            }}
          >
            <CustomTypography variant="h5" sx={{ fontWeight: 'bold' }}>
              Danil
            </CustomTypography>
            <CustomTypography variant="h5">
              Found {score2} out of {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}{' '}
              {gameOptions.includes('Triples') ? 'triples' : 'pairs'}
            </CustomTypography>
            <CustomTypography variant="h5">Attempts: {attempts2}</CustomTypography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MultiplayerDashboard;
