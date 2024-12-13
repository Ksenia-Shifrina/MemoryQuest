import { Box, BoxProps, Grid, SxProps, Theme } from '@mui/material';

interface WrapperProps extends BoxProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  isLeft: boolean;
}

export const InsideBoxWrapper: React.FC<WrapperProps> = ({ children, isLeft, sx }) => {
  return (
    <Grid
      container
      sx={{
        alignItems: isLeft ? 'flex-end' : 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: { md: '85%', lg: '70%', xl: '50%' },
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          ...sx,
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
