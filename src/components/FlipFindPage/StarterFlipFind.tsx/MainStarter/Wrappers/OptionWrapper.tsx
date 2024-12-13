import { Box, BoxProps, SxProps, Theme } from '@mui/material';

interface OptionWrapperProps extends BoxProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  isChosen: boolean;
}
const OptionWrapper: React.FC<OptionWrapperProps> = ({ children, sx, onClick, isChosen }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { md: '15rem', lg: '17rem', xl: '23rem' },
        height: '4rem',
        cursor: 'pointer',
        borderRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#FFFFFF',
        p: '0.5rem',
        mb: '1rem',
        backgroundColor: isChosen ? '#824131' : '#A48F8A',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default OptionWrapper;
