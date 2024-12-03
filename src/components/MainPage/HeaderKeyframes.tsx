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
const leftVisiblePosition = 'translateX(-35vw) translateY(5vh) rotate(-10deg) scale(0.5)';
const rightInvisibleGamePosition = 'translateX(35vw) translateY(10vh) rotate(10deg) scale(0)';
// const rightOutsidePostion = 'translateX(55vw) translateY(15vh) rotate(50deg) scale(0)';
// const rightVisiblePosition = 'translateX(35vw) translateY(5vh) rotate(10deg) scale(0.5)';
// const leftOutsidePostion = 'translateX(-55vw) translateY(15vh) rotate(-50deg) scale(0)';

export const moveMainLeftFromCenter = createAnimation(centerPosition, leftVisiblePosition);
export const moveMainCenterFromLeft = createAnimation(leftVisiblePosition, centerPosition);

export const moveGamePageCenterFromRight = createAnimation(rightInvisibleGamePosition, centerPosition);
export const moveGamePageRightFromCenter = createAnimation(centerPosition, rightInvisibleGamePosition);

// export const moveStatisticsLeftToView = createAnimation(rightOutsidePostion, rightVisiblePosition);
// export const moveStatisticsRightAway = createAnimation(rightVisiblePosition, rightOutsidePostion);

// export const moveLoginLeftAway = createAnimation(leftVisiblePosition, leftOutsidePostion);
// export const moveLoginRightToView = createAnimation(leftOutsidePostion, leftVisiblePosition);
