import { Box, Grid } from '@mui/material';
import { DifficultyLevel, difficultyLevelArr } from '../../../../helpers/types';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import ColumnWrapper from './Wrappers/ColumnWrapper';
import OptionWrapper from './Wrappers/OptionWrapper';
import { InsideBoxWrapper } from './Wrappers/InsideBoxWrapper';

export interface RightColumnProps {
  difficultyLevel: DifficultyLevel;
  setDifficultyLevel: Function;
}

const RightColumn: React.FC<RightColumnProps> = ({ difficultyLevel, setDifficultyLevel }) => {
  return (
    <ColumnWrapper>
      <InsideBoxWrapper isLeft={false} sx={{ color: '#7B4234' }}>
        <CustomTypography variant="h3" sx={{ fontWeight: 'bold', mb: '2rem' }}>
          Difficulty
        </CustomTypography>

        {difficultyLevelArr.map((level, index) => (
          <OptionWrapper onClick={() => setDifficultyLevel(level)} key={index} isChosen={level === difficultyLevel}>
            <CustomTypography variant="h4">{level}</CustomTypography>
          </OptionWrapper>
        ))}
      </InsideBoxWrapper>
    </ColumnWrapper>
  );
};

export default RightColumn;
