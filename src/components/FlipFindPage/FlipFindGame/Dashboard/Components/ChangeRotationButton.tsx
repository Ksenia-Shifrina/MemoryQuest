import { Box, Grid } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { CustomTypography } from '../../../../../helpers/CustomTypography';

export interface ChangeRotationButtonProps {
  isLeftCard: boolean;
  rotate: Function;
  isBoxRotatingLeft: boolean;
}

const ChangeRotationButton: React.FC<ChangeRotationButtonProps> = ({ isLeftCard, rotate, isBoxRotatingLeft }) => {
  return (
    <Grid
      container
      sx={{
        mt: { md: '1.5rem', lg: '2rem' },
        alignItems: 'center',
        justifyContent: 'center',
        visibility: { sm: 'hidden', md: isBoxRotatingLeft === isLeftCard ? 'visible' : 'hidden' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          height: 'fit-content',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomTypography sx={{ color: '#A55946', fontSize: { md: '1.2rem', lg: '1.5rem', xl: '1.8rem' } }}>
          Rotate {isBoxRotatingLeft ? 'right' : 'left'}
        </CustomTypography>

        <Box
          sx={{
            pointerEvents: 'auto',
            mt: { md: '0.5rem', lg: '1rem' },
            width: 'fit-content',
            height: 'fit-content',
            cursor: 'pointer',
            transition: 'transform 0.1s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <RefreshRoundedIcon
            onClick={() => rotate()}
            sx={{
              width: { md: '2.5rem', lg: '3rem', xl: '3.5rem' },
              height: { md: '2.5rem', lg: '3rem', xl: '3.5rem' },
              color: '#A55946',
              transform: isLeftCard ? '' : 'scaleX(-1)',
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default ChangeRotationButton;
