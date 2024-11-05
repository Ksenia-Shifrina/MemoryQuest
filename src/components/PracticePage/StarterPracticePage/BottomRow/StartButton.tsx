import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import { DifficultyLevel, GameVariation, PlayersVariation } from '../../../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

export interface StartButtonProps {
  handleStart: Function;
}

const StartButton: React.FC<StartButtonProps> = ({ handleStart }) => {
  return (
    <Grid item xs={3} mx={'2rem'}>
      <Grid container direction={'column'} alignItems={'center'}>
        <Box
          onClick={() => handleStart()}
          sx={{
            position: 'relative',
            width: '70%',
            height: '7rem',
            cursor: 'pointer',
            backgroundColor: '#D2C1BD',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#7B4234',

            mt: '9rem',
            transition: 'transform 0.4s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CustomTypography variant="h3">Start!</CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StartButton;
