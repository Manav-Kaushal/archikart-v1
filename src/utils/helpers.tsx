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
