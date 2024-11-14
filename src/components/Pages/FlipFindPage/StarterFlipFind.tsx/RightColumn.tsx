import { Box, Grid } from '@mui/material';
import { DifficultyLevel, difficultyLevelArr } from '../../../../helpers/helpers';
import { CustomTypography } from '../../../../helpers/CustomTypography';

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
            <Box
              onClick={() => setDifficultyLevel(level)}
              key={index}
              sx={{
                position: 'relative',
                width: '50%',
                height: '4rem',
                cursor: 'pointer',
                backgroundColor: level === difficultyLevel ? '#824131' : '#A48F8A',
                borderRadius: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                color: '#FFFFFF',
                p: '0.5rem',

                mb: '1rem',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CustomTypography variant="h4">{level}</CustomTypography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default RightColumn;
