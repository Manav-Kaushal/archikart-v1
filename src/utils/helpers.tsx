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
  // Split the sentence into words
  const words = sentence.split(" ");

  // Capitalize the first letter of each word and join them back into a sentence
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
};
