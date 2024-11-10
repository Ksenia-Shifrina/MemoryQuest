import { Box, Grid } from '@mui/material';
import { CustomTypography } from '../../helpers/CustomTypography';
import { GameVariation } from '../../helpers/helpers';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

export interface ChosenGameProps {
  // isDisplayGameOptions: boolean;
  // setIsDisplayGameOptions: Function;
  gameVariation: GameVariation;
}

const ChosenGame: React.FC<ChosenGameProps> = ({ gameVariation }) => {
  return (
    <Grid item xs={3} mx={'2rem'}>
      <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Box
          // onClick={() => setIsDisplayGameOptions(!isDisplayGameOptions)}
          sx={{
            position: 'relative',
            width: '70%',
            height: '5rem',
            // cursor: 'pointer',
            // backgroundColor: '#824131',
            borderRadius: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#7B4234',
            // color: '#FFFFFF',

            // transition: 'transform 0.2s',
            // '&:hover': {
            //   transform: 'scale(1.05)',
            // },
          }}
        >
          <CustomTypography variant="h3" sx={{ fontWeight: 'bold' }}>
            Optional
          </CustomTypography>
          {/* {!isDisplayGameOptions && <ArrowDropDownRoundedIcon sx={{ width: '4rem', height: '4rem', m: '0', p: '0' }} />}
          {isDisplayGameOptions && <ArrowDropUpRoundedIcon sx={{ width: '4rem', height: '4rem', m: '0', p: '0' }} />} */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChosenGame;
