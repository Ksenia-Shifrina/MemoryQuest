import { Box } from '@mui/material';
import { CustomTypography } from '../helpers/CustomTypography';

export interface SmallScreenMessageProps {}

const SmallScreenMessage: React.FC<SmallScreenMessageProps> = ({}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          width: 'fit-content',
          height: 'fit-content',
          backgroundColor: '#D2C1BD',
          borderRadius: '25px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#7B4234',
          p: '2rem',
          mx: '2rem',
          mt: '5rem',
        }}
      >
        <CustomTypography sx={{ fontSize: '3rem' }}>Thank you for visiting</CustomTypography>
        <CustomTypography sx={{ fontSize: '3rem' }}>Memory Quest!</CustomTypography>
        <CustomTypography sx={{ fontSize: '2rem', mt: '3rem' }}>
          Please open it on a larger screen for the best experience :){' '}
        </CustomTypography>
      </Box>
    </Box>
  );
};

export default SmallScreenMessage;
