import { Box, Grid } from '@mui/material';
import { DifficultyLevel, difficultyLevelArr } from '../../../../../helpers/types';
import { CustomTypography } from '../../../../../helpers/CustomTypography';
import { InsideBoxWrapper } from '../Wrappers/InsideBoxWrapper';
import OptionButton from '../Wrappers/OptionButton';

export interface RightColumnProps {
  difficultyLevel: DifficultyLevel;
  setDifficultyLevel: Function;
}

const RightColumn: React.FC<RightColumnProps> = ({ difficultyLevel, setDifficultyLevel }) => {
  return (
    <Grid item xs={4}>
      <InsideBoxWrapper isLeft={false} sx={{ color: '#7B4234' }}>
        <CustomTypography variant="h3" sx={{ fontWeight: 'bold', mb: '2rem' }}>
          Difficulty
        </CustomTypography>

        {difficultyLevelArr.map((level, index) => (
          <OptionButton onClick={() => setDifficultyLevel(level)} key={index} isChosen={level === difficultyLevel}>
            <CustomTypography variant="h4">{level}</CustomTypography>
          </OptionButton>
        ))}
      </InsideBoxWrapper>
    </Grid>
  );
};

export default RightColumn;
