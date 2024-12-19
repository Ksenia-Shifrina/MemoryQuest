import { keyframes } from '@mui/system';

export const firstAppearanceAnimation = keyframes`
  0% { transform: scale(0.5) };
  100% { transform: scale(1) };
`;

const createAnimation = (from: string, to: string) => keyframes`
  0% { transform: ${from}; }
  100% { transform: ${to}; }
`;

const centerPosition = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
const leftPosition = 'translateX(-32vw) translateY(1.5rem) rotate(-8deg) scale(0.6)';
const rightPosition = 'translateX(32vw) translateY(1.5rem) rotate(8deg) scale(0)';

export const moveMainLeftFromCenter = createAnimation(centerPosition, leftPosition);
export const moveMainCenterFromLeft = createAnimation(leftPosition, centerPosition);

export const moveGamePageCenterFromRight = createAnimation(rightPosition, centerPosition);
export const moveGamePageRightFromCenter = createAnimation(centerPosition, rightPosition);

// const rightOutsidePostion = 'translateX(55vw) translateY(15vh) rotate(50deg) scale(0)';
// const leftOutsidePostion = 'translateX(-55vw) translateY(15vh) rotate(-50deg) scale(0)';

// export const moveStatisticsLeftToView = createAnimation(rightOutsidePostion, rightPosition);
// export const moveStatisticsRightAway = createAnimation(rightPosition, rightOutsidePostion);

// export const moveLoginLeftAway = createAnimation(leftPosition, leftOutsidePostion);
// export const moveLoginRightToView = createAnimation(leftOutsidePostion, leftPosition);
