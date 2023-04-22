const THEMES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type ValueOf<T> = T[keyof T];

export { THEMES };
export type THEME_TYPES = ValueOf<typeof THEMES>;
