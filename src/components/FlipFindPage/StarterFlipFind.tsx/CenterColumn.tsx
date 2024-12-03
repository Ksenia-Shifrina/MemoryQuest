import { Box, Grid } from '@mui/material';
import { PlayerMode } from '../../../helpers/types';
import { CustomTypography } from '../../../helpers/CustomTypography';
import PlayerModeOption from './PlayerModeOption';

export interface CenterColumnProps {
  setPlayerMode: Function;
  playerMode: PlayerMode;
  handleStart: Function;
}

const CenterColumn: React.FC<CenterColumnProps> = ({ setPlayerMode, playerMode, handleStart }) => {
  return (
    <Grid item xs={4}>
      <Grid container justifyContent="center" alignItems="center" direction={'column'}>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Grid item xs={6} pb={'1rem'} width={'40%'}>
            <PlayerModeOption
              playerMode={'Single'}
              setPlayerMode={setPlayerMode}
              isChosen={playerMode === 'Single' ? true : false}
            />
          </Grid>
          <Grid item xs={6} width={'40%'}>
            <PlayerModeOption
              playerMode={'Multiplayer'}
              setPlayerMode={setPlayerMode}
              isChosen={playerMode === 'Multiplayer' ? true : false}
            />
          </Grid>
        </Grid>

        <Box
          onClick={() => handleStart()}
          sx={{
            position: 'relative',
            width: '50%',
            height: '7rem',
            cursor: 'pointer',
            backgroundColor: playerMode === 'Single' ? '#824131' : '#D2C1BD',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: playerMode === 'Single' ? '#FFFFFF' : '#7B4234',
            mt: '14rem',
            mb: '2rem',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CustomTypography variant="h3">{playerMode === 'Multiplayer' ? 'Continue' : `Start!`}</CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CenterColumn;
