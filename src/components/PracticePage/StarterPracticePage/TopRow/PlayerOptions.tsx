import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export interface PlayerOptionsProps {
  setPlayersNum: Function;
  playersNum: PlayersVariation;
}

const PlayerOptions: React.FC<PlayerOptionsProps> = ({ setPlayersNum, playersNum }) => {
  return (
    <Grid item xs={3} mx={'2rem'}>
      <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={6} pb={'1rem'} width={'60%'}>
          <Box
            onClick={() => setPlayersNum('Single')}
            sx={{
              position: 'relative',
              width: '100%',
              height: '5rem',
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
        <Grid item xs={6} width={'60%'}>
          <Box
            onClick={() => setPlayersNum('Multiplayer')}
            sx={{
              position: 'relative',
              width: '100%',
              height: '5rem',
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
    </Grid>
  );
};

export default PlayerOptions;
