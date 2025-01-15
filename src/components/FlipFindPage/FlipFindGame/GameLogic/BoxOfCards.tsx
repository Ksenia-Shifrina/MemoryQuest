import Grid from '@mui/material/Grid';
import { keyframes } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import FlippingCardBox from './FlippingCard';
import { FlippingCard, GameOptions } from '../../../../helpers/types';
import ExitGameButton from '../Dashboard/Components/ExitGameButton';

export interface BoxOfCardsProps {
  cards: FlippingCard[];
  setCards: Function;
  checkCard: Function;
  gameOptions: GameOptions[];
  isBoxRotatingLeft: boolean;
  animationRotateLeft: CSSKeyframesRule | string;
  animationRotateRight: CSSKeyframesRule | string;
  closeGame: Function;
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
  closeGame,
}) => {
  const getInitialStyles = () => {
    if (gameOptions.includes('Rotating')) {
      if (cards.length === 16) {
        return {
          width: { md: '24rem', lg: '28rem', xl: '32rem' },
          gridItemMd: 3,
        };
      } else if (cards.length === 25) {
        return {
          width: { md: '30rem', lg: '35rem', xl: '40rem' },
          gridItemMd: 2.4,
        };
      } else if (cards.length === 36) {
        return {
          width: { md: '36rem', lg: '42rem', xl: '48rem' },
          gridItemMd: 2,
        };
      }
    } else {
      if (cards.length === 12) {
        return {
          width: '35%',
          gridItemMd: 3,
        };
      } else if (cards.length === 18 || cards.length === 24) {
        return {
          width: { md: '60%', lg: '50%', xl: '45%' },
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

  useEffect(() => {
    const newStyles = getInitialStyles();
    if (newStyles.width !== boxWidth || newStyles.gridItemMd !== gridItemMd) {
      setBoxWidth(newStyles.width);
      setGridItemMd(newStyles.gridItemMd);
    }
  }, [cards]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        pointerEvents: 'none',
        width: 'fit-content',
        height: 'fit-content',
        mt:
          cards.length === 36
            ? { md: '9rem', lg: '7rem' }
            : cards.length === 25
            ? { md: '9rem', lg: '4rem', xl: '7rem' }
            : cards.length === 16
            ? { md: '12rem', lg: '7rem' }
            : cards.length === 12
            ? { lg: '1rem', xl: '2rem' }
            : cards.length === 18
            ? { xl: '2rem' }
            : { xl: '2rem' },
        mb: '6rem',
        animation: `${fadeIn} 1s ease-in forwards`,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: boxWidth,
          maxWidth: '120rem',
          height: gameOptions.includes('Rotating') ? boxWidth : 'fit-content',
          animation: gameOptions.includes('Rotating')
            ? `${isBoxRotatingLeft ? animationRotateLeft : animationRotateRight} 80s linear infinite`
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
              isBoxRotatingLeft={isBoxRotatingLeft}
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
