export const applyEffect = (props) => {
  const { board, card, offsetX, offsetY } = props;
  const { width, height } = board;

  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
  const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

  card.transition = "none";
  card.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

export const removeEffect = (props) => {
  const { card } = props();

  card.transition = "transform .5s ease-in-out";
  card.transform = "rotateX(0deg) rotateY(0deg)";
};
