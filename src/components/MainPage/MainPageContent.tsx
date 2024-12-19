import { Box, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import { CustomTypography } from '../../helpers/CustomTypography';
import { gamesPages, Pages } from '../../helpers/types';
import { firstAppearanceAnimation } from './Header/HeaderKeyframes';

export interface MainPageContentProps {
  currentPage: Pages;
  isMovingMainPageLeft: boolean;
  openGamePage: Function;
  isFirstTimeAnimating: boolean;
}

const moveMainPageLeftAnimation = keyframes`
  0% { transform: translateX(0) translateY(0) rotate(0deg) scale(1) };
  100% { transform: translateX(-50vw) translateY(0vh) rotate(-10deg) scale(0) };
`;

const moveMainPageCenterAnimation = keyframes`
  0% { transform: translateX(-50vw) translateY(0vh) rotate(-10deg) scale(0) };
  100% { transform: translateX(0) translateY(0) rotate(0deg) scale(1) };
`;

const MainPageContent: React.FC<MainPageContentProps> = ({
  currentPage,
  isMovingMainPageLeft,
  openGamePage,
  isFirstTimeAnimating,
}) => {
  return (
    <Grid
      container
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: currentPage === 'Memory Games' ? 1 : 0,
        transition: 'opacity 1s ease-in',
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: { md: '8rem', lg: '9rem', xl: '11rem' },
        animation: `${
          isMovingMainPageLeft
            ? moveMainPageLeftAnimation
            : isFirstTimeAnimating
            ? firstAppearanceAnimation
            : moveMainPageCenterAnimation
        } 1s forwards`,
      }}
    >
      {gamesPages.map((game, index) => (
        <Grid item md={5} key={index}>
          <Grid container justifyContent={'center'} alignItems={'center'}>
            <Box
              onClick={game.isCreated ? () => openGamePage(game.name) : undefined}
              sx={{
                width: 'fit-content',
                maxWidth: { xl: '35rem' },
                minWidth: { md: '20rem' },

                height: { md: '19rem', lg: '20rem', xl: '20rem' },
                maxHeight: { xl: '45rem' },
                // minHeight: { md: '20rem', lg: '27rem', xl: '20rem' },

                flexDirection: 'column',
                cursor: game.isCreated ? 'pointer' : 'default',
                backgroundColor: game.isCreated ? '#824131' : '#EAE1DF',
                borderRadius: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: game.isCreated ? '#FFFFFF' : '#824131',
                m: '1.5rem',
                transition: game.isCreated ? 'transform 0.2s' : 'none',
                '&:hover': {
                  transform: game.isCreated ? 'scale(1.05)' : 'none',
                  backgroundColor: game.isCreated ? '#824131' : '#EAE1DF',
                },
              }}
            >
              <CustomTypography
                sx={{ mt: { md: '0rem', xl: '0rem' }, fontSize: { md: '2.5rem', lg: '2.7rem', xl: '3rem' } }}
              >
                {game.name}
              </CustomTypography>

              <CustomTypography
                variant="h5"
                sx={{ px: '3rem', my: '0.5rem', fontSize: { md: '1.2rem', lg: '1.4rem', xl: '1.5rem' } }}
              >
                {game.description}
              </CustomTypography>

              {!game.isCreated && (
                <CustomTypography
                  variant="h5"
                  sx={{
                    backgroundColor: '#824131',
                    borderRadius: '50px',
                    width: 'fit-content',
                    p: '0.5rem',
                    my: '0.5rem',
                    ml: '50%',
                    transform: 'rotate(-10deg)',
                    color: '#FFFFFF',
                    fontSize: { md: '1.1rem', lg: '1.5rem', xl: '1.5rem' },
                  }}
                >
                  Coming soon!
                </CustomTypography>
              )}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainPageContent;
