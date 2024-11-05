import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import PracticePage from './PracticePage/PracticePage';
import Header from './Header';
import { CustomTypography } from '../helpers/CustomTypography';

const MainPage: React.FC = () => {
  const [isPracticePage, setIsPracticePage] = useState<boolean>(false);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        {!isPracticePage && <Header left={''} right={'Log In | Sign Up'} center={'Memory Games'} />}
        {isPracticePage && (
          <Header
            left={'Memory Games'}
            right={'Statistics'}
            center={'Practice'}
            setIsPracticePage={setIsPracticePage}
          />
        )}
      </Grid>
      {isPracticePage && <PracticePage setIsPracticePage={setIsPracticePage} />}
      {!isPracticePage && (
        <Box
          onClick={() => setIsPracticePage(true)}
          sx={{
            position: 'relative',
            width: '50%',
            height: '7rem',
            cursor: 'pointer',
            backgroundColor: '#D2C1BD',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#7B4234',
            mt: '5rem',
          }}
        >
          <CustomTypography variant="h3">Practice</CustomTypography>
        </Box>
      )}
    </Grid>
  );
};

export default MainPage;
