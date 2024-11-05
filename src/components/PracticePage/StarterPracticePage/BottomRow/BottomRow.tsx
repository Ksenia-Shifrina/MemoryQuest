import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import GameOptions from './GameOptions';
import StartButton from './StartButton';
import DifficultyLevelOptions from './DifficultyLevelOptions';

export interface BottomRowProps {
  handleStart: Function;
  setDifficultyLevel: Function;
  setGameVariation: Function;
  isDisplayGameOptions: boolean;
  isDisplayDifficultyOptions: boolean;
  setIsDisplayDifficultyOptions: Function;
  setIsDisplayGameOptions: Function;
}

const BottomRow: React.FC<BottomRowProps> = ({
  handleStart,
  setDifficultyLevel,
  setGameVariation,
  isDisplayGameOptions,
  isDisplayDifficultyOptions,
  setIsDisplayDifficultyOptions,
  setIsDisplayGameOptions,
}) => {
  return (
    <Grid item xs={10}>
      <Grid container justifyContent="space-evenly" alignItems="flex-start">
        <GameOptions
          isDisplayGameOptions={isDisplayGameOptions}
          setGameVariation={setGameVariation}
          setIsDisplayGameOptions={setIsDisplayGameOptions}
        />
        <StartButton handleStart={handleStart} />
        <DifficultyLevelOptions
          isDisplayDifficultyOptions={isDisplayDifficultyOptions}
          setDifficultyLevel={setDifficultyLevel}
          setIsDisplayDifficultyOptions={setIsDisplayDifficultyOptions}
        />
      </Grid>
    </Grid>
  );
};

export default BottomRow;
