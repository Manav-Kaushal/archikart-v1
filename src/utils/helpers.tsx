export const classNames = (...classNames: string[]): string => {
  return classNames.filter(Boolean).join(" ");
};
