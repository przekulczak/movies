export const calculateTotalPages = (itemsCount: number): number => {
  return Math.ceil(itemsCount / 20);
};
