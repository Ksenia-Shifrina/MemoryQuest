import * as React from 'react';
import { CustomTypography } from '../../helpers/CustomTypography';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { FlippingCardType, GameVariation } from '../../helpers/helpers';

import BoxOfCards from './BoxOfCards';

export interface CurrentGameDashboardProps {
  attempts: number;
  seconds: number;
  numOfCards: number;
  gameOptions: GameVariation[];
}

const CurrentGameDashboard: React.FC<CurrentGameDashboardProps> = ({ attempts, seconds, numOfCards, gameOptions }) => {
  const [isHidden, setIsHidden] = React.useState<boolean>(false);
  const [actualNumOfCards, setActualNumOfCards] = React.useState<number>(numOfCards);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const iconStyle = {
    width: '2rem',
    height: '2rem',
    color: '#A55946',
    cursor: 'pointer',
  };

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
    <Grid container justifyContent="space-evenly" alignItems="center" width={'50%'}>
      <Grid item xs={4}>
        <Grid container justifyContent="center">
          {!isHidden && (
            <Box
              sx={{
                position: 'relative',
                width: '90%',
                height: '8rem',
                backgroundColor: '#D2C1BD',
                borderRadius: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: '#643529',
                // p: '0.5rem',
              }}
            >
              <CustomTypography variant="h6">Found: 2 pairs</CustomTypography>
              <CustomTypography variant="h6">
                Total {gameOptions.includes('Triples') ? 'triples' : 'pairs'} to find:{' '}
                {gameOptions.includes('Triples') ? actualNumOfCards / 3 : actualNumOfCards / 2}
              </CustomTypography>
              <CustomTypography variant="h6">Current attempts: {attempts}</CustomTypography>
            </Box>
          )}
        </Grid>
      </Grid>

      <Grid item xs={2} height="8rem">
        <Grid container alignItems={'center'} justifyContent={'center'} height="100%">
          {isHidden && (
            <VisibilityRoundedIcon
              onClick={toggleVisibility}
              sx={{
                ...iconStyle,
                transition: 'transform 0.3s ease, color 0.3s ease',
                '&:hover': {
                  color: '#7B4234',
                  transform: 'scale(1.2)',
                },
              }}
            />
          )}
          {!isHidden && (
            <VisibilityOffRoundedIcon
              onClick={toggleVisibility}
              sx={{
                ...iconStyle,
                transition: 'transform 0.3s ease, color 0.3s ease',
                '&:hover': {
                  color: '#7B4234',
                  transform: 'scale(1.2)',
                },
              }}
            />
          )}
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Grid container justifyContent="center">
          {!isHidden && (
            <Box
              sx={{
                position: 'relative',
                width: '90%',
                height: '8rem',
                backgroundColor: '#D2C1BD',
                borderRadius: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#643529',
                // p: '0.5rem',
              }}
            >
              <CustomTypography variant="h2">
                {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? 0 : ''}
                {seconds % 60}
              </CustomTypography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CurrentGameDashboard;
