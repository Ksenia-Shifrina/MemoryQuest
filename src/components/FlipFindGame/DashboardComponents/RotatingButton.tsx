import { Box } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { CustomTypography } from '../../../helpers/CustomTypography';

export interface RotatingButtonProps {
  isLeftCard: boolean;
  rotate: Function;
}

const RotatingButton: React.FC<RotatingButtonProps> = ({ isLeftCard, rotate }) => {
  return (
    <Box
      onClick={() => rotate()}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.4s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: isLeftCard ? '' : 'scaleX(-1)',
        }}
      >
        <RefreshRoundedIcon
          sx={{
            width: { md: '3rem', lg: '3.5rem', xl: '4rem' },
            height: { md: '3rem', lg: '3.5rem', xl: '4rem' },
            color: '#A55946',
            mt: '3rem',
          }}
        />
      </Box>
      <CustomTypography variant="h6" sx={{ color: '#A55946' }}>
        Change rotation
      </CustomTypography>
    </Box>
  );
};

export default RotatingButton;
