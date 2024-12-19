import { Grid } from '@mui/material';
import LeftColumn from './Columns/LeftColumn';
import CenterColumn from './Columns/CenterColumn';
import RightColumn from './Columns/RightColumn';
import { DifficultyLevel, GameOptions, PlayerMode } from '../../../../helpers/types';

export interface MainStarterProps {
  gameOptions: GameOptions[];
  setGameOptions: Function;
  setPlayerMode: Function;
  playerMode: PlayerMode;
  handleStart: Function;
  difficultyLevel: DifficultyLevel;
  setDifficultyLevel: Function;
}

const MainStarter: React.FC<MainStarterProps> = ({
  gameOptions,
  setGameOptions,
  setPlayerMode,
  playerMode,
  handleStart,
  difficultyLevel,
  setDifficultyLevel,
}) => {
  return (
    <Grid container sx={{ mt: { md: '2rem', xl: '0rem' } }}>
      <LeftColumn gameOptions={gameOptions} setGameOptions={setGameOptions} />
      <CenterColumn setPlayerMode={setPlayerMode} playerMode={playerMode} handleStart={handleStart} />
      <RightColumn difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
    </Grid>
  );
};

export default MainStarter;
