import { Box, Grid, Input, TextField } from '@mui/material';
import CoinToss from './CoinToss';
import { CustomTypography } from '../../../../helpers/CustomTypography';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { useState } from 'react';
import NicknameInput from './NicknameInput';

export interface MultiplayerStarterProps {
  setNicknames: Function;
  setIsLeftPlayersTurn: Function;
  nicknames: string[];
  setIsMultiplayerStarterPage: Function;
  startGame: Function;
  isLeftPlayersTurn: boolean | null;
  isCancelledGame: boolean;
  setIsCancelledGame: Function;
}

const MultiplayerStarter: React.FC<MultiplayerStarterProps> = ({
  setNicknames,
  isLeftPlayersTurn,
  setIsLeftPlayersTurn,
  startGame,
  nicknames,
  setIsMultiplayerStarterPage,
  isCancelledGame,
  setIsCancelledGame,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChangeNicknames = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    setNicknames((prevState: string[]) => {
      const updatedNicknames = [...prevState];
      updatedNicknames[index] = event.target.value;
      return updatedNicknames;
    });
  };

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        mt: { md: '1rem', xl: '0rem' },
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            width: '100%',
            height: '17rem',
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Grid item md={5} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <NicknameInput
              nickname={nicknames[0]}
              isThisPlayersTurn={isLeftPlayersTurn === null ? null : isLeftPlayersTurn}
              handleChangeNicknames={handleChangeNicknames}
              isLeftInput={true}
            />
          </Grid>

          <Grid item md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15rem' }}>
            <CustomTypography
              sx={{
                color: '#7B4234',
                width: { md: '100%', lg: '70%' },
                fontSize: { md: '2rem', xl: '2.3rem' },
              }}
            >
              toss the coin & see who starts the game
            </CustomTypography>
          </Grid>

          <Grid item md={5} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <NicknameInput
              nickname={nicknames[1]}
              isThisPlayersTurn={isLeftPlayersTurn === null ? null : !isLeftPlayersTurn}
              handleChangeNicknames={handleChangeNicknames}
              isLeftInput={false}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: 'flex',
            width: '100%',
            height: '20rem',
            // maxHeight: '27rem',
            // minHeight: '20rem',
            justifyContent: 'center',
          }}
        >
          <CoinToss
            startGame={startGame}
            setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
            setIsLeftPlayersTurn={setIsLeftPlayersTurn}
            setIsDisabled={setIsDisabled}
            isDisabled={isDisabled}
            isCancelledGame={isCancelledGame}
            setIsCancelledGame={setIsCancelledGame}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MultiplayerStarter;
