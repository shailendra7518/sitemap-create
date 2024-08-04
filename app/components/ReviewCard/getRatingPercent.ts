export const getRatingPercent = (rating: number) => {
  return `${(rating / 5) * 100}%`;
};
