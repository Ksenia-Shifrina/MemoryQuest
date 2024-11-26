import { Box, Grid } from '@mui/material';
import { PlayerMode } from '../../../../helpers/helpers';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface CenterColumnProps {
  setPlayersNum: Function;
  playersNum: PlayerMode;
  handleStart: Function;
}

const CenterColumn: React.FC<CenterColumnProps> = ({ setPlayersNum, playersNum, handleStart }) => {
  return (
    <Grid item xs={4}>
      <Grid container justifyContent="center" alignItems="center" direction={'column'}>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Grid item xs={6} pb={'1rem'} width={'40%'}>
            <Box
              onClick={() => setPlayersNum('Single')}
              sx={{
                position: 'relative',
                width: '100%',
                height: '4rem',
                cursor: 'pointer',
                backgroundColor: playersNum === 'Single' ? '#824131' : '#A48F8A',
                borderRadius: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',

                transition: 'background-color 0.1s ease, transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CustomTypography variant="h4">1 player</CustomTypography>
            </Box>
          </Grid>
          <Grid item xs={6} width={'40%'}>
            <Box
              onClick={() => setPlayersNum('Multiplayer')}
              sx={{
                position: 'relative',
                width: '100%',
                height: '4rem',
                cursor: 'pointer',
                backgroundColor: playersNum === 'Multiplayer' ? '#824131' : '#A48F8A',
                borderRadius: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                transition: 'background-color 0.1s ease, transform 0.2s',

                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CustomTypography variant="h4">2 players</CustomTypography>
            </Box>
          </Grid>
        </Grid>

        <Box
          onClick={() => handleStart()}
          sx={{
            position: 'relative',
            width: '50%',
            height: '7rem',
            cursor: 'pointer',
            backgroundColor: '#D2C1BD',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#7B4234',
            mt: '12rem',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CustomTypography variant="h3">Start!</CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CenterColumn;
