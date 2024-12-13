import { Grid } from '@mui/material';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';
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
    <Grid container sx={{ height: 'fit-content', width: '100%' }}>
      <LeftColumn gameOptions={gameOptions} setGameOptions={setGameOptions} />
      <CenterColumn setPlayerMode={setPlayerMode} playerMode={playerMode} handleStart={handleStart} />
      <RightColumn difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel} />
    </Grid>
  );
};

export default MainStarter;
