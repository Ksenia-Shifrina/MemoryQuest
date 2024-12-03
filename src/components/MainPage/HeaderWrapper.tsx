import { Box, BoxProps, SxProps, Theme } from '@mui/material';

interface HeaderWrapperProps extends BoxProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}
const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children, sx }) => {
  return (
    <Box
      position={'absolute'}
      sx={{
        top: 0,
        left: 'center',
        width: 'fit-content',
        height: '100%',
        color: '#7B4234',
        backgroundColor: 'transparent',
        mt: '2rem',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderWrapper;
