import { BoxProps, Grid, SxProps, Theme } from '@mui/material';

interface ColumnWrapperProps extends BoxProps {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const ColumnWrapper: React.FC<ColumnWrapperProps> = ({ children }) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        height: '100vh',
      }}
    >
      <Grid
        container
        sx={{
          height: '40vh',
          maxHeight: '40rem',
          minHeight: '30rem',
          flexDirection: 'column',
          alignItems: 'flex-end',
          transform: { md: 'translateY(45%)', xl: 'translateY(50%)' },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default ColumnWrapper;
