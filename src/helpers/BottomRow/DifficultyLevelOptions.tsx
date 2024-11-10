import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../helpers/CustomTypography';
import { DifficultyLevel, difficultyLevelArr, GameVariation, PlayersVariation } from '../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export interface DifficultyLevelOptionsProps {
  // isDisplayDifficultyOptions: boolean;
  setDifficultyLevel: Function;
  // setIsDisplayDifficultyOptions: Function;
  difficultyLevel: DifficultyLevel;
}

const DifficultyLevelOptions: React.FC<DifficultyLevelOptionsProps> = ({
  // isDisplayDifficultyOptions,
  setDifficultyLevel,
  difficultyLevel,
  // setIsDisplayDifficultyOptions,
}) => {
  const selectDifficultyLevel = (level: DifficultyLevel) => {
    setDifficultyLevel(level);
    // setIsDisplayDifficultyOptions(false);
  };

  return (
    <Grid item xs={3} mx={'2rem'}>
      <Grid container direction={'column'} alignItems={'center'}>
        {difficultyLevelArr.map((level, index) => (
          <Box
            onClick={() => selectDifficultyLevel(level)}
            key={index}
            sx={{
              position: 'relative',
              width: '70%',
              height: '4rem',
              cursor: 'pointer',
              backgroundColor: level === difficultyLevel ? '#824131' : '#A48F8A',
              borderRadius: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              color: '#FFFFFF',

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
  );
};

export default DifficultyLevelOptions;
