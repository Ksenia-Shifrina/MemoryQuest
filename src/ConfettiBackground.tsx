import { Box, Grid } from '@mui/material';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiBackground: React.FC = () => {
  const { width, height } = useWindowSize();

  const confettiProps = {
    width: width,
    height: height,
    numberOfPieces: 500,
    colors: ['#824131', '#A48F8A', '#D2C1BD'],
    initialVelocityX: 10,
    initialVelocityY: 15,
    gravity: 0.05,
    wind: 0,
    recycle: false,
    confettiSource: { x: 0, y: height, w: width, h: 0 },
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Confetti {...confettiProps} />
    </Box>
  );
};

export default ConfettiBackground;
