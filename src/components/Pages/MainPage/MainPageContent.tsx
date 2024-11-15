import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../../helpers/CustomTypography';

export interface MainPageContentProps {
  isMainPage: boolean;
  isAnimating: boolean;
  openGamePage: Function;
}

const MainPageContent: React.FC<MainPageContentProps> = ({ isMainPage, isAnimating, openGamePage }) => {
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
        direction: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mt: '14rem',

        animation: isAnimating ? 'moveMainPageLeftAnimation 1s forwards' : 'moveMainPageCenterAnimation 1s forwards',
        '@keyframes moveMainPageLeftAnimation': {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          },

          '100%': {
            transform: 'translateX(-35vw) translateY(10vh) rotate(-10deg) scale(0)',
          },
        },
        '@keyframes moveMainPageCenterAnimation': {
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
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
          <Box
            onClick={() => openGamePage('Flip & Find')}
            sx={{
              flexDirection: 'column',
              width: '60%',
              height: '12rem',
              cursor: 'pointer',
              backgroundColor: '#824131',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FFFFFF',
              m: '2rem',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: '#824131',
              },
            }}
          >
            <CustomTypography variant="h2">Flip & Find</CustomTypography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Grid container justifyContent={'flex-start'} alignItems={'center'}>
          <Box
            sx={{
              flexDirection: 'column',
              width: '60%',
              height: '12rem',
              // cursor: 'pointer',
              backgroundColor: '#EAE1DF',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#824131',
              m: '2rem',
            }}
          >
            <CustomTypography variant="h3">Missing Item</CustomTypography>
            <CustomTypography
              variant="h5"
              sx={{
                backgroundColor: '#824131',
                borderRadius: '50px',
                p: '0.5rem',
                mt: '1.5rem',
                ml: '15rem',
                transform: 'rotate(-10deg)',
                color: '#FFFFFF',
              }}
            >
              Coming soon!
            </CustomTypography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Grid container justifyContent={'flex-end'} alignItems={'center'}>
          <Box
            sx={{
              flexDirection: 'column',
              width: '60%',
              height: '12rem',
              // cursor: 'pointer',
              backgroundColor: '#EAE1DF',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#824131',
              m: '2rem',
            }}
          >
            <CustomTypography variant="h3">Card Recall</CustomTypography>
            <CustomTypography
              variant="h5"
              sx={{
                backgroundColor: '#824131',
                borderRadius: '50px',
                p: '0.5rem',
                mt: '1.5rem',
                ml: '15rem',
                transform: 'rotate(-10deg)',
                color: '#FFFFFF',
              }}
            >
              Coming soon!
            </CustomTypography>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        <Grid container justifyContent={'flex-start'} alignItems={'center'}>
          <Box
            sx={{
              flexDirection: 'column',
              width: '60%',
              height: '12rem',
              // cursor: 'pointer',
              backgroundColor: '#EAE1DF',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#824131',
              m: '2rem',
            }}
          >
            <CustomTypography variant="h3">Sequence Master</CustomTypography>
            <CustomTypography
              variant="h5"
              sx={{
                backgroundColor: '#824131',
                borderRadius: '50px',
                p: '0.5rem',
                mt: '1.5rem',
                ml: '15rem',
                transform: 'rotate(-10deg)',
                color: '#FFFFFF',
              }}
            >
              Coming soon!
            </CustomTypography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPageContent;
