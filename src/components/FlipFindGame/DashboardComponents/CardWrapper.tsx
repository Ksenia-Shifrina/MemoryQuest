import { Box, BoxProps, SxProps, Theme } from '@mui/material';

interface CardWrapperProps extends BoxProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}
const CardWrapper: React.FC<CardWrapperProps> = ({ children, sx, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: { md: '12rem', lg: '15rem', xl: '18rem' },
        height: { md: '6rem', lg: '7rem', xl: '9rem' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px',
        flexDirection: 'column',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CardWrapper;
