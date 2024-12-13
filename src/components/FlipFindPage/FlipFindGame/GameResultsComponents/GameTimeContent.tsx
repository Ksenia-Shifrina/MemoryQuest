import { Box } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface GameTimeContentProps {
  gameTime: number;
  isMultiplayer: boolean;
}

const GameTimeContent: React.FC<GameTimeContentProps> = ({ gameTime, isMultiplayer }) => {
  const isZeroMinutes = () => Math.floor(gameTime / 60) === 0;
  const isOneMinute = () => Math.floor(gameTime / 60) === 1;
  const isZeroSeconds = () => gameTime % 60 === 0;
  const minutes = Math.floor(gameTime / 60);
  const seconds = gameTime % 60;

  return (
    <CustomTypography
      sx={{ mt: { md: '0.5rem', lg: '1rem', xl: '1.5rem' }, fontSize: { md: '2rem', lg: '2.5rem', xl: '3.5rem' } }}
    >
      <Box
        component="span"
        sx={{
          textDecoration: isMultiplayer ? 'none' : 'underline ',
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

export default GameTimeContent;
