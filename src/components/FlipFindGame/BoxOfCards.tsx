import Grid from '@mui/material/Grid';
import { FlippingCard, GameOptions } from '../../helpers/helpers';
import { keyframes } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import FlippingCardBox from './FlippingCard';

export interface BoxOfCardsProps {
  cards: FlippingCard[];
  setCards: Function;
  checkCard: Function;
  gameOptions: GameOptions[];
  isRotatingLeft: boolean;
  animationDynamicLeft: CSSKeyframesRule | string;
  animationDynamicRight: CSSKeyframesRule | string;
}

export const fadeIn = keyframes`
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
    if (gameOptions.includes('Rotating')) {
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
          width: { xs: '70rem', md: '30rem', lg: '40rem', xl: '60rem' },
          height: { xs: '70rem', md: '30rem', lg: '40rem', xl: '60rem' },
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
    if (gameOptions.includes('Rotating')) {
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
        // position: 'relative',
        width: 'fit-content',
        my: 'auto',
        p: cards.length === 25 ? '2rem' : '0',
        animation: gameOptions.includes('Rotating')
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
            <FlippingCardBox
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
