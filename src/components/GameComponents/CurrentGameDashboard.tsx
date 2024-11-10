import * as React from 'react';
import { CustomTypography } from '../../helpers/CustomTypography';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { GameVariation } from '../../helpers/helpers';

export interface CurrentGameDashboardProps {
  attempts: number;
  seconds: number;
  numOfCards: number;
  gameOptions: GameVariation[];
}

const CurrentGameDashboard: React.FC<CurrentGameDashboardProps> = ({ attempts, seconds, numOfCards, gameOptions }) => {
  const [isHidden, setIsHidden] = React.useState<boolean>(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const iconStyle = {
    width: '2rem',
    height: '2rem',
    color: '#A55946',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
      color: '#7B4234',
      transform: 'scale(1.2)',
    },
  };

  return (
    <Grid container justifyContent="center" alignItems="center" mt={'3rem'}>
      <Grid item xs={6}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={4} width="100%" height="5rem">
            {!isHidden && (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '5rem',
                  backgroundColor: '#D2C1BD',
                  borderRadius: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  color: '#643529',
                }}
              >
                <CustomTypography variant="h6">
                  Total {gameOptions.includes('Triples') ? 'triples' : 'pairs'} to find:{' '}
                  {gameOptions.includes('Triples') ? numOfCards / 3 : numOfCards / 2}
                </CustomTypography>
                <CustomTypography variant="h6">Current attempts: {attempts}</CustomTypography>
              </Box>
            )}
          </Grid>
          <Grid item xs={2}>
            {isHidden && <VisibilityRoundedIcon onClick={toggleVisibility} sx={iconStyle} />}
            {!isHidden && <VisibilityOffRoundedIcon onClick={toggleVisibility} sx={iconStyle} />}
          </Grid>
          <Grid item xs={4} width="100%" height="5rem">
            {!isHidden && (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '5rem',
                  backgroundColor: '#D2C1BD',
                  borderRadius: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#643529',
                }}
              >
                <CustomTypography variant="h4">
                  {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? 0 : ''}
                  {seconds % 60}
                </CustomTypography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CurrentGameDashboard;
