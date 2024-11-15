import Grid from '@mui/material/Grid';
import FlippingCard from './FlippingCard';
import { FlippingCardType, GameVariation } from '../../helpers/helpers';
import { css, keyframes, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';

export interface BoxOfCardsProps {
  cards: FlippingCardType[];
  setCards: Function;
  checkCard: Function;
  gameOptions: GameVariation[];
  isRotatingLeft: boolean;
  animationDynamicLeft: CSSKeyframesRule | string;
  animationDynamicRight: CSSKeyframesRule | string;
}

const fadeIn = keyframes`
  from { opacity: 0 ; }
  to { opacity: 1; }
`;

const BoxOfCards: React.FC<BoxOfCardsProps> = ({
  cards,
  setCards,
  checkCard,
  gameOptions,
  isRotatingLeft,
  animationDynamicLeft,
  animationDynamicRight,
}) => {
  const getInitialStyles = () => {
    if (gameOptions.includes('Moving')) {
      if (cards.length === 16) {
        return {
          width: { xs: '70rem', sm: '70rem', lg: '40rem' },
          height: { xs: '70rem', sm: '70rem', lg: '40rem' },
          gridItemMd: 3,
        };
      } else if (cards.length === 25) {
        return {
          width: { xs: '70rem', sm: '70rem', lg: '50rem' },
          height: { xs: '70rem', sm: '70rem', lg: '50rem' },
          gridItemMd: 2.4,
        };
      } else if (cards.length === 36) {
        return {
          width: { xs: '70rem', sm: '70rem', lg: '60rem' },
          height: { xs: '70rem', sm: '70rem', lg: '60rem' },
          gridItemMd: 2,
        };
      }
    } else {
      if (cards.length === 12) {
        return {
          width: { xs: '70%', sm: '60%', lg: '40%' },
          height: '100%',
          gridItemMd: 3,
        };
      } else if (cards.length === 18) {
        return {
          width: { xs: '70%', sm: '60%', lg: '50%' },
          height: '100%',
          gridItemMd: 2,
        };
      } else if (cards.length === 24) {
        return {
          width: { md: '70%', lg: '60%', xl: '50%' },
          height: '100%',
          gridItemMd: 2,
        };
      }
    }
    return {
      width: { xs: '70%', sm: '60%', lg: '50%' },
      height: '100%',
      gridItemMd: 1,
    };
  };

  const { width: initialWidth, height: initialHeight, gridItemMd: initialGridItemMd } = getInitialStyles();

  const [boxWidth, setBoxWidth] = useState(initialWidth);
  const [boxHeight, setBoxHeight] = useState(initialHeight);
  const [gridItemMd, setGridItemMd] = useState<number>(initialGridItemMd);

  const endOfCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newStyles = getInitialStyles();
    if (newStyles.width !== boxWidth || newStyles.height !== boxHeight || newStyles.gridItemMd !== gridItemMd) {
      setBoxWidth(newStyles.width);
      setBoxHeight(newStyles.height);
      setGridItemMd(newStyles.gridItemMd);
    }
  }, [cards]);

  useEffect(() => {
    if (gameOptions.includes('Moving')) {
      setTimeout(() => {
        if (endOfCardsRef.current) {
          endOfCardsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
          });
        }
      }, 100);
    }
  }, [gameOptions]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        width: 'fit-content',
        my: 'auto',
        // mb: cards.length === 25 ? '1rem' : '0',
        overflow: gameOptions.includes('Moving') ? 'hidden' : 'auto',
        animation: gameOptions.includes('Moving')
          ? `${isRotatingLeft ? animationDynamicLeft : animationDynamicRight} 60s linear infinite`
          : 'none',
      }}
    >
      <Grid
        container
        ref={endOfCardsRef}
        justifyContent="center"
        alignItems="center"
        sx={{
          animation: `${fadeIn} 1s ease-in forwards`,
          width: boxWidth,
          height: boxHeight,
        }}
      >
        {cards.map((card, index) => (
          <Grid item key={index} md={gridItemMd} justifyContent="center" alignItems="center">
            <FlippingCard
              card={card}
              setCards={setCards}
              index={index}
              checkCard={checkCard}
              gameOptions={gameOptions}
              isRotatingLeft={isRotatingLeft}
              animationDynamicLeft={animationDynamicLeft}
              animationDynamicRight={animationDynamicRight}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BoxOfCards;
