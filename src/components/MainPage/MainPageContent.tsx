import { Box, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import { CustomTypography } from '../../helpers/CustomTypography';
import { gamesPages, Pages } from '../../helpers/types';
import { firstAppearanceAnimation } from './HeaderKeyframes';

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
        mt: '11rem',
        animation: `${
          isMovingMainPageLeft
            ? moveMainPageLeftAnimation
            : isFirstTimeAnimating
            ? firstAppearanceAnimation
            : moveMainPageCenterAnimation
        } 1s forwards`,
      }}
    >
      {gamesPages.map((game) => (
        <Grid item xs={5}>
          <Grid container justifyContent={'center'} alignItems={'center'}>
            <Box
              onClick={game.isCreated ? () => openGamePage(game.name) : undefined}
              sx={{
                flexDirection: 'column',
                width: '70%',
                height: '20rem',
                cursor: game.isCreated ? 'pointer' : 'default',
                backgroundColor: game.isCreated ? '#824131' : '#EAE1DF',
                borderRadius: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: game.isCreated ? '#FFFFFF' : '#824131',
                m: '2rem',
                transition: game.isCreated ? 'transform 0.2s' : 'none',
                '&:hover': {
                  transform: game.isCreated ? 'scale(1.05)' : 'none',
                  backgroundColor: game.isCreated ? '#824131' : '#EAE1DF',
                },
              }}
            >
              <CustomTypography variant={game.isCreated ? 'h2' : 'h3'}>{game.name}</CustomTypography>

              <CustomTypography variant="h5" sx={{ px: '3rem', pt: '1rem' }}>
                {game.description}
              </CustomTypography>

              {!game.isCreated && (
                <CustomTypography
                  variant="h5"
                  sx={{
                    backgroundColor: '#824131',
                    borderRadius: '50px',
                    p: '0.5rem',
                    mt: '1rem',
                    mb: '0.5rem',
                    ml: '20rem',
                    transform: 'rotate(-10deg)',
                    color: '#FFFFFF',
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
