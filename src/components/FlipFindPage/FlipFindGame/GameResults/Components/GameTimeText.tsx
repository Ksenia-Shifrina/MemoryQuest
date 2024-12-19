import { Box } from '@mui/material';
import { CustomTypography } from '../../../../../helpers/CustomTypography';

export interface GameTimeTextProps {
  gameTime: number;
  isMultiplayer: boolean;
  inAnyMode: boolean;
}

const GameTimeText: React.FC<GameTimeTextProps> = ({ gameTime, isMultiplayer, inAnyMode }) => {
  const isZeroMinutes = () => Math.floor(gameTime / 60) === 0;
  const isOneMinute = () => Math.floor(gameTime / 60) === 1;
  const isZeroSeconds = () => gameTime % 60 === 0;
  const minutes = Math.floor(gameTime / 60);
  const seconds = gameTime % 60;

  return (
    <CustomTypography sx={{ mt: '0.5rem', fontSize: { md: '1.5rem', lg: '2rem', xl: '3rem' } }}>
      <Box
        component="span"
        sx={{
          textDecoration: inAnyMode ? 'none' : 'none',
          textDecorationThickness: '2px',
          textUnderlineOffset: '0.7rem',
        }}
      >
        {!isZeroMinutes() && `${minutes}${isZeroSeconds() ? (isOneMinute() ? ' minute' : ' minutes') : ' min '}`}
        {!isZeroSeconds() && `${seconds}${isZeroMinutes() ? ' seconds' : ' sec'}`}
      </Box>

      {isMultiplayer ? '' : ' and'}
    </CustomTypography>
  );
};

export default GameTimeText;
