import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../helpers/CustomTypography';
import { DifficultyLevel, difficultyLevelArr, GameVariation, PlayersVariation } from '../../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export interface RightColumnProps {
  difficultyLevel: DifficultyLevel;
  setDifficultyLevel: Function;
}

const RightColumn: React.FC<RightColumnProps> = ({ difficultyLevel, setDifficultyLevel }) => {
  return (
    <Grid item xs={4}>
      <Grid container justifyContent="space-evenly" alignItems="center" direction={'column'}>
        <Grid item xs={2}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '5rem',
              borderRadius: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              color: '#7B4234',
            }}
          >
            <CustomTypography variant="h3" sx={{ fontWeight: 'bold' }}>
              Difficulty
            </CustomTypography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          {difficultyLevelArr.map((level, index) => (
            <Box
              onClick={() => setDifficultyLevel(level)}
              key={index}
              sx={{
                position: 'relative',
                width: '100%',
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RightColumn;
