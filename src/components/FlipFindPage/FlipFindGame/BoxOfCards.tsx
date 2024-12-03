import Grid from '@mui/material/Grid';
import { keyframes } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import FlippingCardBox from './FlippingCard';
import { FlippingCard, GameOptions } from '../../../helpers/types';

export interface BoxOfCardsProps {
  cards: FlippingCard[];
  setCards: Function;
  checkCard: Function;
  gameOptions: GameOptions[];
  isBoxRotatingLeft: boolean;
  animationRotateLeft: CSSKeyframesRule | string;
  animationRotateRight: CSSKeyframesRule | string;
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
  isBoxRotatingLeft,
  animationRotateLeft,
  animationRotateRight,
}) => {
  const getInitialStyles = () => {
    if (gameOptions.includes('Rotating')) {
      if (cards.length === 16) {
        return {
          width: { sm: '30rem', md: '35rem', lg: '40rem', xl: '40rem' },
          gridItemMd: 3,
        };
      } else if (cards.length === 25) {
        return {
          width: { sm: '30rem', md: '35rem', lg: '50rem', xl: '53rem' },
          gridItemMd: 2.4,
        };
      } else if (cards.length === 36) {
        return {
          width: { sm: '30rem', md: '30rem', lg: '40rem', xl: '60rem' },
          gridItemMd: 2,
        };
      }
    } else {
      if (cards.length === 12) {
        return {
          width: { sm: '60%', lg: '40%' },
          gridItemMd: 3,
        };
      } else if (cards.length === 18) {
        return {
          width: { sm: '60%', lg: '50%' },
          gridItemMd: 2,
        };
      } else if (cards.length === 24) {
        return {
          width: { md: '70%', lg: '60%', xl: '50%' },
          gridItemMd: 2,
        };
      }
    }
    return {
      width: { xs: '70%', sm: '60%', lg: '50%' },
      gridItemMd: 1,
    };
  };

  const { width: initialWidth, gridItemMd: initialGridItemMd } = getInitialStyles();

  const [boxWidth, setBoxWidth] = useState(initialWidth);
  const [gridItemMd, setGridItemMd] = useState<number>(initialGridItemMd);

  const endOfCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newStyles = getInitialStyles();
    if (newStyles.width !== boxWidth || newStyles.gridItemMd !== gridItemMd) {
      setBoxWidth(newStyles.width);
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
        width: 'fit-content',
        height: 'fit-content',
        my: 'auto',
        pt: cards.length === 12 || cards.length === 18 ? '2rem' : '0rem',
        pb: cards.length === 36 ? '3rem' : cards.length === 25 ? '3rem' : '0rem',
        animation: `${fadeIn} 1s ease-in forwards`,
      }}
    >
      <Grid
        container
        ref={endOfCardsRef}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: boxWidth,
          height: gameOptions.includes('Rotating') ? boxWidth : '100%',
          p: cards.length === 25 ? '2rem' : '0',
          animation: gameOptions.includes('Rotating')
            ? `${isBoxRotatingLeft ? animationRotateLeft : animationRotateRight} 60s linear infinite`
            : 'none',
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
              isRotatingLeft={isBoxRotatingLeft}
              animationRotateLeft={animationRotateLeft}
              animationRotateRight={animationRotateRight}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BoxOfCards;
