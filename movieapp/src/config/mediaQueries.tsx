const size = {
  sMax: "768px",
  mMax: "1024px",
  lMax: "1259px",
  xlMin: "1260px",
};

export const mediaQuery = {
  s: `@media (max-width: ${size.sMax})`,
  m: `@media (max-width: ${size.mMax})`,
  l: `@media (max-width: ${size.lMax})`,
  xl: `@media (min-width: ${size.xlMin})`,
};
