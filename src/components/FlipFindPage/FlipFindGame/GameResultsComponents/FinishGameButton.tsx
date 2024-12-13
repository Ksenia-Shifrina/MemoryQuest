import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../helpers/types';
import { PlayerStats } from '../FlipFindGame';

export interface FinishGameButtonProps {
  finishGame: Function;
}

const FinishGameButton: React.FC<FinishGameButtonProps> = ({ finishGame }) => {
  return (
    <Grid item md={12}>
      <Grid container sx={{ direction: 'column', justifyContent: 'center', alignItems: 'center', mt: '4rem' }}>
        <Box
          onClick={() => finishGame()}
          sx={{
            position: 'relative',
            width: 'fit-content',
            height: 'fit-content',
            cursor: 'pointer',
            backgroundColor: '#824131',
            borderRadius: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#FFFFFF',
            p: '0.9rem',
            px: { md: '1.5rem', lg: '2rem', xl: '2.5rem' },
            mb: '1rem',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CustomTypography variant="h4" sx={{ fontSize: { md: '2rem', lg: '2.5rem', xl: '3rem' } }}>
            Play Again
          </CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FinishGameButton;
