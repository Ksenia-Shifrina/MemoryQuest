import Grid from '@mui/material/Grid';
import FlippingCard from './FlippingCard';
import { FlippingCardType, GameVariation } from '../../helpers/helpers';
import { css, keyframes, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export interface BoxOfCardsProps {
  cards: FlippingCardType[];
  setCards: Function;
  checkCard: Function;
  gameOptions: GameVariation[];
  rotateLeft: boolean;
}

export const rotateRightAnimation = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

export const rotateLeftAnimation = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(-360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0 ; }
  to { opacity: 1; }
`;

const BoxOfCards: React.FC<BoxOfCardsProps> = ({ cards, setCards, checkCard, gameOptions, rotateLeft }) => {
  const elementRef = useRef(null);
  const [currentRotation, setCurrentRotation] = useState(0);

  // useEffect(() => {
  //   if (elementRef.current) {
  //     // Extract the current rotation angle using computed styles
  //     const style = window.getComputedStyle(elementRef.current);
  //     const matrix = style.transform;
  //     console.log(matrix);

  //     if (matrix !== 'none') {
  //       const values = matrix.split('(')[1].split(')')[0].split(',');
  //       // console.log(values);
  //       const a = parseFloat(values[0]);
  //       const b = parseFloat(values[1]);
  //       const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  //       setCurrentRotation(angle);
  //       // console.log('a:' + a, 'b:' + b);
  //     } else {
  //       setCurrentRotation(0);
  //     }
  //   }
  // }, [rotateLeft]);

  useEffect(() => {
    let animationFrame: number;

    const updateRotation = () => {
      setCurrentRotation((prevRotation) => {
        const newRotation = rotateLeft ? prevRotation - 1 : prevRotation + 1;
        return newRotation % 360; // Keep the angle between 0 and 359 degrees
      });
      animationFrame = requestAnimationFrame(updateRotation);
    };

    if (rotateLeft !== null) {
      animationFrame = requestAnimationFrame(updateRotation);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [rotateLeft]);

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

  useEffect(() => {
    const newStyles = getInitialStyles();
    if (newStyles.width !== boxWidth || newStyles.height !== boxHeight || newStyles.gridItemMd !== gridItemMd) {
      setBoxWidth(newStyles.width);
      setBoxHeight(newStyles.height);
      setGridItemMd(newStyles.gridItemMd);
    }
  }, [cards]);

  const endOfCardsRef = useRef<HTMLDivElement | null>(null);

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
      //
      ref={elementRef}
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        width: gameOptions.includes('Moving') ? '100vh' : '100%',
        height: gameOptions.includes('Moving')
          ? cards.length === 16
            ? '70vh'
            : cards.length === 25
            ? '90vh'
            : '100vh'
          : '100%',
        mt:
          cards.length === 12
            ? '5rem'
            : cards.length === 18
            ? '4rem'
            : cards.length === 24
            ? '3rem'
            : cards.length === 36
            ? '2rem'
            : cards.length === 25
            ? '1rem'
            : '0',
        mb: cards.length === 25 ? '1rem' : '0',
        overflow: gameOptions.includes('Moving') ? 'hidden' : 'auto',
        // animation: `${fadeIn} 1s ease-in forwards`,
        animation: gameOptions.includes('Moving')
          ? css`
              ${rotateLeft ? rotateLeftAnimation : rotateRightAnimation} 60s
          linear infinite;
            `
          : 'none',
        transform: `rotate(${currentRotation}deg)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <Grid
        container
        ref={endOfCardsRef}
        justifyContent="center"
        alignItems="center"
        sx={{
          // animation: gameOptions.includes('Moving')
          //   ? `${rotateLeft ? rotateLeftAnimation : rotateRightAnimation} 60s linear infinite`
          //   : 'none',
          // transform: `rotate(${currentRotation}deg)`,
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
              rotateLeft={rotateLeft}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BoxOfCards;
