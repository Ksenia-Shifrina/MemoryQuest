import { Box, Input } from '@mui/material';
import { CustomTypography } from '../../../../../helpers/CustomTypography';
import { PlayerMode } from '../../../../../helpers/types';

export interface PlayerModeButtonProps {
  playerMode: PlayerMode;
  setPlayerMode: Function;
  isChosen: boolean;
}
const PlayerModeButton: React.FC<PlayerModeButtonProps> = ({ playerMode, setPlayerMode, isChosen }) => {
  return (
    <Box
      onClick={() => setPlayerMode(playerMode)}
      sx={{
        position: 'relative',
        width: '60%',
        maxWidth: { lg: '15rem', xl: '17rem' },
        height: '4rem',
        cursor: 'pointer',
        backgroundColor: isChosen ? '#824131' : '#A48F8A',
        borderRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        mb: '1rem',
        transition: 'background-color 0.1s ease, transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CustomTypography variant="h4">{playerMode === 'Single' ? '1 player' : '2 players'}</CustomTypography>
    </Box>
  );
};

export default PlayerModeButton;
