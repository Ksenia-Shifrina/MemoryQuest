import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../../helpers/types';
import { PlayerStats } from '../../FlipFindGame';
import GameTimeText from './GameTimeText';

export interface MultiplayerGameTimeCardProps {
  gameTime: number;
}

const MultiplayerGameTimeCard: React.FC<MultiplayerGameTimeCardProps> = ({ gameTime }) => {
  return (
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
      <CustomTypography variant="h2" sx={{ fontSize: { md: '1.5rem', lg: '2rem', xl: '3rem' } }}>
        Game Time:
      </CustomTypography>
      <GameTimeText gameTime={gameTime} isMultiplayer={true} inAnyMode={false} />
    </Box>
  );
};

export default MultiplayerGameTimeCard;
