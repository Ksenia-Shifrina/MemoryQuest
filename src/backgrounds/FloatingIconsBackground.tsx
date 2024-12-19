import React, { memo, useMemo, useState } from 'react';
import { Box, keyframes, useMediaQuery } from '@mui/system';
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
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';

const allIcons = [
  PsychologyAltRoundedIcon,
  PetsIcon,
  AcUnitRoundedIcon,
  AnchorRoundedIcon,
  AirplanemodeActiveRoundedIcon,
  AccessAlarmRoundedIcon,
  PhoneEnabledRoundedIcon,
  BackHandRoundedIcon,
  BakeryDiningRoundedIcon,
  BedtimeRoundedIcon,
  BeachAccessRoundedIcon,
  WbSunnyRoundedIcon,
  CakeRoundedIcon,
  TimeToLeaveRoundedIcon,
  EmojiEmotionsRoundedIcon,
  LocalFloristRoundedIcon,
  RestaurantRoundedIcon,
  FavoriteRoundedIcon,
  LunchDiningRoundedIcon,
];

const float1 = keyframes`
  0% { transform: translateY(0) translateX(0); }
  25% { transform: rotate(-20deg) translateY(-100px) translateX(200px); }
  50% { transform:  translateY(-150px) translateX(-250px); }
  75% { transform: rotate(600deg) translateY(200px) translateX(300px); }
  100% { transform:  translateY(0) translateX(0); }
`;

const float2 = keyframes`
  0% { transform: translateY(0) translateX(0); }
  20% { transform: rotate(30deg) translateY(200px) translateX(-200px); }
  40% { transform:  translateY(-250px) translateX(250px); }
  60% { transform: rotate(80deg) translateY(300px) translateX(-300px); }
  80% { transform:  translateY(-150px) translateX(200px); }
  100% { transform: rotate(360deg) translateY(0) translateX(0); }
`;

const float3 = keyframes`
  0% { transform: translateY(0) translateX(0); }
  25% { transform: rotate(-15deg) translateY(-200px) translateX(150px); }
  50% { transform:  translateY(250px) translateX(-250px); }
  75% { transform: rotate(90deg) translateY(-100px) translateX(300px); }
  100% { transform: translateY(0) translateX(0); }
`;

export interface FloatingIconsBackgroundProps {
  isFloatingBackGround: boolean;
}

const FloatingIconsBackground: React.FC<FloatingIconsBackgroundProps> = memo(({ isFloatingBackGround }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isLargeScreen = useMediaQuery('(max-width:1536px)');

  const generateIcons1 = () => {
    console.log(isSmallScreen, isLargeScreen);
    if (isSmallScreen) {
      return allIcons.slice(0, 2);
    } else if (isLargeScreen) {
      return allIcons.slice(0, 3);
    } else {
      return allIcons.slice(0, 6);
    }
  };

  const generateIcons2 = () => {
    if (isSmallScreen) {
      return allIcons.slice(3, 5);
    } else if (isLargeScreen) {
      return allIcons.slice(4, 8);
    } else {
      return allIcons.slice(7, 13);
    }
  };

  const generateIcons3 = () => {
    if (isSmallScreen) {
      return allIcons.slice(6, 8);
    } else if (isLargeScreen) {
      return allIcons.slice(9, 11);
    } else {
      return allIcons.slice(13, allIcons.length);
    }
  };

  const [iconsGroup1] = useState(generateIcons1());
  const [iconsGroup2] = useState(generateIcons2());
  const [iconsGroup3] = useState(generateIcons3());

  const iconGroups = useMemo(() => {
    return [iconsGroup1, iconsGroup2, iconsGroup3].map((icons, groupIndex) =>
      icons.map((IconComponent, iconIndex) => (
        <Box
          key={`${groupIndex}-${iconIndex}`}
          sx={{
            position: 'absolute',
            animation: `${groupIndex === 0 ? float1 : groupIndex === 1 ? float2 : float3} 30s ease-in-out infinite`,
            animationDelay: `${-iconIndex * 2}s`,
            bottom: `${Math.random() * 20}vh`,
            left: `${Math.random() * 100}vw`,
            width: '3rem',
            height: '3rem',
            borderRadius: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: '#885345',
          }}
        >
          <IconComponent
            sx={{
              width: { xs: '1.5rem', md: '2rem', lg: '2rem' },
              height: { xs: '1.5rem', md: '2rem', lg: '2rem' },
            }}
          />
        </Box>
      ))
    );
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: isFloatingBackGround ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      {iconGroups}
    </Box>
  );
});

export default FloatingIconsBackground;
