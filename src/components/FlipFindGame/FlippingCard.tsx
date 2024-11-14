import React, { useEffect, useRef, useState } from 'react';
import { Box, css, Grid, keyframes } from '@mui/material';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import PetsIcon from '@mui/icons-material/Pets';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AnchorRoundedIcon from '@mui/icons-material/AnchorRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import BackHandRoundedIcon from '@mui/icons-material/BackHandRounded';
import BakeryDiningRoundedIcon from '@mui/icons-material/BakeryDiningRounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import BeachAccessRoundedIcon from '@mui/icons-material/BeachAccessRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import { FlippingCardType, GameVariation } from '../../helpers/helpers';

export interface FlippingCardProps {
  card: FlippingCardType;
  setCards: Function;
  checkCard: Function;
  index: number;
  gameOptions: GameVariation[];
  isRotatingLeft: boolean;
  animationDynamicLeft: CSSKeyframesRule | string;
  animationDynamicRight: CSSKeyframesRule | string;
}

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform:  scale(1.1); },
  100% { transform:  scale(0); }
`;

const rotateLeft = keyframes`
  from { transform: rotate(0); }
  100% { transform:  rotate(-360deg); }
`;

const rotateRight = keyframes`
  from { transform: rotate(0); }
  100% { transform:  rotate(360deg); }
`;

const FlippingCard: React.FC<FlippingCardProps> = ({
  card,
  setCards,
  checkCard,
  index,
  gameOptions,
  isRotatingLeft,
  animationDynamicLeft,
  animationDynamicRight,
}) => {
  const handleClick = () => {
    setCards((prevState: FlippingCardType[]) =>
      prevState.map((card, i) => (i === index ? { ...card, isOpen: true } : card))
    );

    checkCard(card.type, index);
  };

  const iconStyle = {
    width: { xs: '2rem', sm: '3rem', md: '3rem', lg: '3rem' },
    height: { xs: '2rem', sm: '3rem', md: '3rem', lg: '3rem' },
  };

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Box
        className={`${card.isDisabled ? 'disabled' : ''}`}
        sx={{
          perspective: '1000px',
          width: { xs: '3rem', sm: '5rem', md: '6rem', lg: '7rem' },
          height: { xs: '3rem', sm: '5rem', md: '6rem', lg: '7rem' },
          position: 'relative',
          cursor: card.type === 'Blank' ? 'none' : 'pointer',
          transformStyle: 'preserve-3d',
          animation: card.isVisible ? 'none' : `${scaleAnimation} 0.8s forwards`,
          py: '1rem',
          visibility: card.type === 'Blank' ? 'hidden' : 'visible',
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            animation: gameOptions.includes('Moving')
              ? `${isRotatingLeft ? animationDynamicRight : animationDynamicLeft} 60s linear infinite`
              : 'none',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
              transform: card.isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: '#A55946',
                backfaceVisibility: 'hidden',
                transition: 'transform 0.4s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <PsychologyAltRoundedIcon sx={iconStyle} />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: card.color,
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                transition: 'transform 0.4s',
              }}
            >
              {card.type === 'Pet' && <PetsIcon sx={iconStyle} />}
              {card.type === 'Snowflake' && <AcUnitRoundedIcon sx={iconStyle} />}
              {card.type === 'Anchor' && <AnchorRoundedIcon sx={iconStyle} />}
              {card.type === 'Plane' && <AirplanemodeActiveRoundedIcon sx={iconStyle} />}
              {card.type === 'Clock' && <AccessAlarmRoundedIcon sx={iconStyle} />}
              {card.type === 'Phone' && <PhoneEnabledRoundedIcon sx={iconStyle} />}
              {card.type === 'Hand' && <BackHandRoundedIcon sx={iconStyle} />}
              {card.type === 'Croissant' && <BakeryDiningRoundedIcon sx={iconStyle} />}
              {card.type === 'Moon' && <BedtimeRoundedIcon sx={iconStyle} />}
              {card.type === 'Umbrella' && <BeachAccessRoundedIcon sx={iconStyle} />}
              {card.type === 'Sun' && <WbSunnyRoundedIcon sx={iconStyle} />}
              {card.type === 'Cake' && <CakeRoundedIcon sx={iconStyle} />}
              {card.type === 'Car' && <TimeToLeaveRoundedIcon sx={iconStyle} />}
              {card.type === 'Smile' && <TagFacesRoundedIcon sx={iconStyle} />}
              {card.type === 'Flower' && <LocalFloristRoundedIcon sx={iconStyle} />}
              {card.type === 'SpoonAndFork' && <RestaurantRoundedIcon sx={iconStyle} />}
              {card.type === 'Heart' && <FavoriteRoundedIcon sx={iconStyle} />}
              {card.type === 'Burger' && <LunchDiningRoundedIcon sx={iconStyle} />}
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default FlippingCard;
