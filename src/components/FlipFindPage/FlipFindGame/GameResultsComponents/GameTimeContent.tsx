import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { GameOptions } from '../../../../helpers/types';
import { PlayerStats } from '../FlipFindGame';

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
    <CustomTypography variant="h3" sx={{ mt: '2rem' }}>
      {!isZeroMinutes() && `${minutes}${isZeroSeconds() ? (isOneMinute() ? ' minute' : ' minutes') : ' min '}`}
      {!isZeroSeconds() && `${seconds}${isZeroMinutes() ? ' seconds' : ' sec'}`}
      {isMultiplayer ? '' : ' and'}
    </CustomTypography>
  );
};

export default GameTimeContent;
