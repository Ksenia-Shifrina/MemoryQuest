import { Box, Grid } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { CustomTypography } from '../../../../helpers/CustomTypography';

export interface RotatingButtonProps {
  isLeftCard: boolean;
  rotate: Function;
  isBoxRotatingLeft: boolean;
}

const RotatingButton: React.FC<RotatingButtonProps> = ({ isLeftCard, rotate, isBoxRotatingLeft }) => {
  return (
    <Grid
      container
      onClick={() => rotate()}
      sx={{
        mt: '3rem',
        alignItems: 'center',
        justifyContent: 'center',
        visibility: isBoxRotatingLeft === isLeftCard ? 'visible' : 'hidden',
      }}
    >
      <Box
        sx={{
          width: 'fit-content',
          height: 'fit-content',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <RefreshRoundedIcon
          sx={{
            width: { md: '3rem', lg: '3.5rem', xl: '4rem' },
            height: { md: '3rem', lg: '3.5rem', xl: '4rem' },
            color: '#A55946',
            transform: isLeftCard ? '' : 'scaleX(-1)',
          }}
        />
        <CustomTypography variant="h6" sx={{ color: '#A55946' }}>
          Change rotation
        </CustomTypography>
      </Box>
    </Grid>
  );
};

export default RotatingButton;
