import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../helpers/types';
import { PlayerStats } from '../FlipFindGame';
import GameTimeContent from './GameTimeContent';

export interface MultiplayerGameTimeCardProps {
  gameTime: number;
}

const MultiplayerGameTimeCard: React.FC<MultiplayerGameTimeCardProps> = ({ gameTime }) => {
  return (
    <Grid item md={3} sx={{ direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            height: 'fit-content',
            backgroundColor: 'transparent',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#7B4234',
          }}
        >
          <CustomTypography variant="h2" sx={{ fontSize: { md: '2rem', lg: '2.5rem', xl: '3.5rem' } }}>
            Game Time:
          </CustomTypography>
          <GameTimeContent gameTime={gameTime} isMultiplayer={true} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MultiplayerGameTimeCard;
