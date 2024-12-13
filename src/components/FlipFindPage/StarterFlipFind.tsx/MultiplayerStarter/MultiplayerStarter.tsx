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
}

const MultiplayerStarter: React.FC<MultiplayerStarterProps> = ({
  setNicknames,
  isLeftPlayersTurn,
  setIsLeftPlayersTurn,
  startGame,
  nicknames,
  setIsMultiplayerStarterPage,
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
        height: '100vh',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          height: '80vh',
          maxHeight: '60rem',
          minHeight: '45rem',
          alignItems: 'flex-start',
          flexDirection: 'column',
          transform: { md: 'translateY(30%)', lg: 'translateY(32%)', xl: 'translateY(35%)' },
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            width: '100%',
            height: { md: '40vh', lg: '38vh', xl: '35vh' },
            maxHeight: '20rem',
            minHeight: '20rem',
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
            height: '27vh',
            maxHeight: '22rem',
            minHeight: '18rem',
            justifyContent: 'center',
          }}
        >
          <CoinToss
            startGame={startGame}
            setIsMultiplayerStarterPage={setIsMultiplayerStarterPage}
            setIsLeftPlayersTurn={setIsLeftPlayersTurn}
            setIsDisabled={setIsDisabled}
            isDisabled={isDisabled}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MultiplayerStarter;
