const BUTTONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

const BADGES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCES: "success",
  ERROR: "error",
  WARNING: "warning",
} as const;

const CONTAINERS = {
  EXTRA_SMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FULL: "full",
} as const;

const COLUMNS = {
  ONE: "one",
  TWO: "two",
  THREE: "three",
  FOUR: "four",
  FIVE: "five",
  SIX: "six",
  SMALL: "small",
} as const;

const SKELETONS = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FULL: "full",
} as const;

const TEXTS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  PARAGRAPH: "p",
  FOOTNOTE: "footnote",
} as const;

type ValueOf<T> = T[keyof T];

export { BADGES };
export { BUTTONS };
export { CONTAINERS };
export { COLUMNS };
export { SKELETONS };
export { TEXTS };

export type BADGES_TYPES = ValueOf<typeof BADGES>;
export type BUTTONS_TYPES = ValueOf<typeof BUTTONS>;
export type CONTAINERS_TYPES = ValueOf<typeof CONTAINERS>;
export type COLUMNS_TYPES = ValueOf<typeof COLUMNS>;
export type SKELETONS_TYPES = ValueOf<typeof SKELETONS>;
export type TEXTS_TYPES = ValueOf<typeof TEXTS>;
