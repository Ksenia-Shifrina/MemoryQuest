import { Box, Input } from '@mui/material';
import { CustomTypography } from '../../../helpers/CustomTypography';
import { PlayerMode } from '../../../helpers/types';

export interface PlayerModeOptionProps {
  playerMode: PlayerMode;
  setPlayerMode: Function;
  isChosen: boolean;
}
const PlayerModeOption: React.FC<PlayerModeOptionProps> = ({ playerMode, setPlayerMode, isChosen }) => {
  return (
    <Box
      onClick={() => setPlayerMode(playerMode)}
      sx={{
        position: 'relative',
        width: '100%',
        height: '4rem',
        cursor: 'pointer',
        backgroundColor: isChosen ? '#824131' : '#A48F8A',
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
      <CustomTypography variant="h4">{playerMode === 'Single' ? '1 player' : '2 players'}</CustomTypography>
    </Box>
  );
};

export default PlayerModeOption;
