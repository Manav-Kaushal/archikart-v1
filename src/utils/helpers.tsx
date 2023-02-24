export const classNames = (...classNames: any[]): string => {
  return classNames.filter(Boolean).join(" ");
};
