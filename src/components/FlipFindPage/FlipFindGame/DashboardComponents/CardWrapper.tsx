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
        width: { md: '16rem', lg: '18rem', xl: '20rem' },
        // height: { md: '7rem', lg: '8rem', xl: '9rem' },
        height: 'fit-content',
        minHeight: { md: '7rem', lg: '8.5rem', xl: '10rem' },
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
