import { Box, Grid } from '@mui/material';
import { PlayerMode } from '../../../../helpers/types';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import ColumnWrapper from './Wrappers/ColumnWrapper';
import PlayerModeButton from './Wrappers/PlayerModeButton';

export interface CenterColumnProps {
  setPlayerMode: Function;
  playerMode: PlayerMode;
  handleStart: Function;
}

const CenterColumn: React.FC<CenterColumnProps> = ({ setPlayerMode, playerMode, handleStart }) => {
  return (
    <ColumnWrapper>
      <Grid
        container
        sx={{
          display: 'flex',
          height: '50vh',
          minHeight: '30rem',
          maxHeight: { md: '30rem', xl: '34rem' },
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <PlayerModeButton
            playerMode={'Single'}
            setPlayerMode={setPlayerMode}
            isChosen={playerMode === 'Single' ? true : false}
          />
          <PlayerModeButton
            playerMode={'Multiplayer'}
            setPlayerMode={setPlayerMode}
            isChosen={playerMode === 'Multiplayer' ? true : false}
          />
        </Grid>

        <Box
          onClick={() => handleStart()}
          sx={{
            position: 'relative',
            width: '90%',
            maxWidth: { md: '21rem', xl: '23rem' },
            height: '6rem',
            cursor: 'pointer',
            backgroundColor: playerMode === 'Single' ? '#824131' : '#D2C1BD',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: playerMode === 'Single' ? '#FFFFFF' : '#7B4234',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CustomTypography variant="h3">{playerMode === 'Multiplayer' ? 'Continue' : `Start!`}</CustomTypography>
        </Box>
      </Grid>
    </ColumnWrapper>
  );
};

export default CenterColumn;
