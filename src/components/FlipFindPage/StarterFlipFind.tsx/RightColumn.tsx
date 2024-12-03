import { Box, Grid } from '@mui/material';
import { DifficultyLevel, difficultyLevelArr } from '../../../helpers/types';
import { CustomTypography } from '../../../helpers/CustomTypography';
import OptionWrapper from './OptionWrapper';

export interface RightColumnProps {
  difficultyLevel: DifficultyLevel;
  setDifficultyLevel: Function;
}

const RightColumn: React.FC<RightColumnProps> = ({ difficultyLevel, setDifficultyLevel }) => {
  return (
    <Grid item xs={4}>
      <Grid container justifyContent="space-evenly" alignItems="flex-start" direction={'column'}>
        <Box
          sx={{
            position: 'relative',
            width: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#7B4234',
          }}
        >
          <CustomTypography variant="h3" sx={{ fontWeight: 'bold', mb: '2rem' }}>
            Difficulty
          </CustomTypography>

          {difficultyLevelArr.map((level, index) => (
            <OptionWrapper onClick={() => setDifficultyLevel(level)} key={index} isChosen={level === difficultyLevel}>
              <CustomTypography variant="h4">{level}</CustomTypography>
            </OptionWrapper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default RightColumn;
