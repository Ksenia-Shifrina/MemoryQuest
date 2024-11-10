import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import {
  DifficultyLevel,
  difficultyLevelArr,
  GameVariation,
  gameVariationArr,
  PlayersVariation,
} from '../../../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import PlayerOptions from './PlayerOptions';
import StartButton from './StartButton';

export interface CenterColumnProps {
  setPlayersNum: Function;
  playersNum: PlayersVariation;
  handleStart: Function;
}

const CenterColumn: React.FC<CenterColumnProps> = ({ setPlayersNum, playersNum, handleStart }) => {
  return (
    <Grid item xs={4}>
      <Grid container justifyContent="space-evenly" alignItems="center" direction={'column'}>
        <PlayerOptions setPlayersNum={setPlayersNum} playersNum={playersNum} />
        <StartButton handleStart={handleStart} />
      </Grid>
    </Grid>
  );
};

export default CenterColumn;
