import { app } from "./config";

export const classNames = (...classNames: any[]): string => {
  return classNames.filter(Boolean).join(" ");
};

export const getCloudinaryImageUrl = (img: string) => {
  if (img) {
    return `${app.cloudinaryBaseUrl}${img}`;
  }
  return img;
};

export const capitalize = (sentence: string) => {
  const words = sentence.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};

export const checkAllKeysHaveValues = (obj: Record<string, any>): boolean => {
  return Object.values(obj).every(
    (value) => value !== null && value !== undefined
  );
};
