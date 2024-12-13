import { Box, BoxProps, Grid, SxProps, Theme } from '@mui/material';
import { GameOptions, GameOptionsWithExplanations } from '../../../../helpers/types';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { useState } from 'react';
import ColumnWrapper from './Wrappers/ColumnWrapper';
import { InsideBoxWrapper } from './Wrappers/InsideBoxWrapper';
import OptionWrapper from './Wrappers/OptionWrapper';

export interface LeftColumnProps {
  gameOptions: GameOptions[];
  setGameOptions: Function;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ gameOptions, setGameOptions }) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleChangeGameOption = (option: GameOptions) => {
    if (!gameOptions.includes(option)) {
      setGameOptions((prevState: GameOptions[]) => [...prevState, option]);
    } else {
      const updatedArray = gameOptions.filter((o) => o !== option);
      setGameOptions(updatedArray);
    }
  };

  return (
    <ColumnWrapper>
      <InsideBoxWrapper isLeft={true} sx={{ color: '#7B4234' }}>
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

            <QuestionMarkRoundedIcon
              onMouseEnter={() => setHoveredOption(option.explanationText)}
              onMouseLeave={() => setHoveredOption(null)}
              sx={{
                width: '1rem',
                height: '1rem',
                ml: '0.3rem',
                mb: '1.5rem',
              }}
            />
          </OptionWrapper>
        ))}
      </InsideBoxWrapper>

      <InsideBoxWrapper isLeft={true}>
        {hoveredOption && (
          <CustomTypography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: '#7B4234',
              maxWidth: { md: '15rem', lg: '17rem', xl: '23rem' },
              mt: '0.5rem',
            }}
          >
            {hoveredOption}
          </CustomTypography>
        )}
      </InsideBoxWrapper>
    </ColumnWrapper>
  );
};

export default LeftColumn;
