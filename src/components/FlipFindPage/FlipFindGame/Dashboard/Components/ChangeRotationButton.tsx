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
      onClick={() => rotate()}
      sx={{
        mt: { md: '1rem', lg: '3rem' },
        alignItems: 'center',
        justifyContent: 'center',
        visibility: { sm: 'hidden', md: isBoxRotatingLeft === isLeftCard ? 'visible' : 'hidden' },
      }}
    >
      <Box
        sx={{
          width: 'fit-content',
          height: 'fit-content',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'transform 0.1s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <RefreshRoundedIcon
          sx={{
            width: { md: '2.5rem', lg: '3rem', xl: '3.5rem' },
            height: { md: '2.5rem', lg: '3rem', xl: '3.5rem' },
            color: '#A55946',
            transform: isLeftCard ? '' : 'scaleX(-1)',
          }}
        />
        <CustomTypography sx={{ color: '#A55946', fontSize: { md: '1rem', lg: '1.5rem', xl: '1.8rem' } }}>
          Change rotation
        </CustomTypography>
      </Box>
    </Grid>
  );
};

export default ChangeRotationButton;
