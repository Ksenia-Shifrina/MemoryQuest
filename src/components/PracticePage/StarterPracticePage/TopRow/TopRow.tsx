import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ChosenGame from './ChosenGame';
import PlayerOptions from './PlayerOptions';
import ChosenDifficultyLevel from './ChosenDifficultyLevel';

export interface TopRowProps {
  setIsDisplayGameOptions: Function;
  gameVariation: GameVariation;
  setPlayersNum: Function;
  playersNum: PlayersVariation;
  difficultyLevel: DifficultyLevel;
  isDisplayGameOptions: boolean;
  setIsDisplayDifficultyOptions: Function;
  isDisplayDifficultyOptions: boolean;
}

const TopRow: React.FC<TopRowProps> = ({
  setIsDisplayGameOptions,
  gameVariation,
  setPlayersNum,
  playersNum,
  difficultyLevel,
  isDisplayGameOptions,
  setIsDisplayDifficultyOptions,
  isDisplayDifficultyOptions,
}) => {
  return (
    <Grid item xs={10}>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <ChosenGame
          isDisplayGameOptions={isDisplayGameOptions}
          setIsDisplayGameOptions={setIsDisplayGameOptions}
          gameVariation={gameVariation}
        />
        <PlayerOptions setPlayersNum={setPlayersNum} playersNum={playersNum} />
        <ChosenDifficultyLevel
          setIsDisplayDifficultyOptions={setIsDisplayDifficultyOptions}
          isDisplayDifficultyOptions={isDisplayDifficultyOptions}
          difficultyLevel={difficultyLevel}
        />
      </Grid>
    </Grid>
  );
};

export default TopRow;
