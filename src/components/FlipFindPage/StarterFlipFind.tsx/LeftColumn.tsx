import { Box, Grid } from '@mui/material';
import { GameOptions, GameOptionsWithExplanations } from '../../../helpers/types';
import { CustomTypography } from '../../../helpers/CustomTypography';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import OptionWrapper from './OptionWrapper';

export interface LeftColumnProps {
  gameOptions: GameOptions[];
  setGameOptions: Function;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ gameOptions, setGameOptions }) => {
  const handleChangeGameOption = (option: GameOptions) => {
    if (!gameOptions.includes(option)) {
      setGameOptions((prevState: GameOptions[]) => [...prevState, option]);
    } else {
      const updatedArray = gameOptions.filter((o) => o !== option);
      setGameOptions(updatedArray);
    }
  };

  return (
    <Grid item xs={4}>
      <Grid container justifyContent="center" alignItems="flex-end" direction={'column'}>
        <Box
          sx={{
            position: 'relative',
            width: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: '#7B4234',
          }}
        >
          <CustomTypography variant="h3" sx={{ fontWeight: 'bold', mb: '2rem' }}>
            Extras
          </CustomTypography>

          {GameOptionsWithExplanations.map((option, index) => (
            <OptionWrapper
              onClick={() => handleChangeGameOption(option.type)}
              isChosen={gameOptions.includes(option.type)}
              key={index}
            >
              <CustomTypography variant="h4" sx={{ textAlign: 'center', ml: '1.3rem' }}>
                {option.type}
              </CustomTypography>

              <Box
                sx={{
                  '&:hover .explanation-text': {
                    visibility: 'visible',
                    opacity: 1,
                  },
                }}
              >
                <QuestionMarkRoundedIcon
                  sx={{
                    width: '1rem',
                    height: '1rem',
                    ml: '0.3rem',
                    mb: '1.5rem',
                  }}
                />
                <CustomTypography
                  variant="h6"
                  sx={{
                    width: '10rem',
                    position: 'absolute',
                    top: '-20%',
                    right: '-80%',
                    color: '#7B4234',
                    visibility: 'hidden',
                    opacity: 0,
                    transition: 'visibility 0s, opacity 0.2s ease-in-out',
                  }}
                  className="explanation-text"
                >
                  {option.explanationText}
                </CustomTypography>
              </Box>
            </OptionWrapper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftColumn;
