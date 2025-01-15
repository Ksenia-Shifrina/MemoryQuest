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
        minHeight: { md: '8rem', lg: '9rem', xl: '11rem' },
        width: { md: '18rem', lg: '25vw', xl: '25vw' },
        maxWidth: { md: '20rem', lg: '30vw', xl: '26rem' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px',
        flexDirection: 'column',
        px: '1rem',
        mx: '2rem',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CardWrapper;
