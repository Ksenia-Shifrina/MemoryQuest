import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../helpers/CustomTypography';

export interface MainPageContentProps {
  isMainPage: boolean;
  isAnimating: boolean;
  openPracticePage: Function;
}

const MainPageContent: React.FC<MainPageContentProps> = ({ isMainPage, isAnimating, openPracticePage }) => {
  return (
    <Grid
      container
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: isMainPage ? 1 : 0,
        transition: 'opacity 1s ease-in',
        zIndex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '12rem',

        animation: isAnimating ? 'moveLeftMainAnimation 1s ease-in-out' : 'moveToCenterMainAnimation 1s ease-in-out',
        '@keyframes moveLeftMainAnimation': {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          },

          '100%': {
            transform: 'translateX(-35vw) translateY(10vh) rotate(-10deg) scale(0)',
          },
        },
        '@keyframes moveToCenterMainAnimation': {
          '0%': {
            transform: 'translateX(-35vw) translateY(10vh) rotate(-10deg) scale(0) ',
          },

          '100%': {
            transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          },
        },
      }}
    >
      <Grid item xs={5}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          {' '}
          <Box
            sx={{
              width: '50%',
              height: '7rem',
              cursor: 'pointer',
              backgroundColor: '#D2C1BD',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#7B4234',
              mt: '5rem',
            }}
          >
            <CustomTypography variant="h3">Campaign</CustomTypography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Box
            onClick={() => openPracticePage()}
            sx={{
              width: '50%',
              height: '7rem',
              cursor: 'pointer',
              backgroundColor: '#D2C1BD',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#7B4234',
              mt: '5rem',
            }}
          >
            <CustomTypography variant="h3">Mini-games</CustomTypography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPageContent;
