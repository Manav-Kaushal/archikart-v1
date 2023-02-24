import { BasicRoutesEnum } from "@utils/enums/routesEnums";

type Navigation = {
  title: string;
  route: BasicRoutesEnum;
};

export const navigation: Navigation[] = [
  // {
  //   title: "Home",
  //   route: BasicRoutesEnum.Home,
  // },
  {
    title: "About",
    route: BasicRoutesEnum.AboutUs,
  },
  {
    title: "Services",
    route: BasicRoutesEnum.Services,
  },
  {
    title: "Portfolio",
    route: BasicRoutesEnum.Portfolio,
  },
  {
    title: "Contact",
    route: BasicRoutesEnum.Contact,
  },
  {
    title: "Blog",
    route: BasicRoutesEnum.Blog,
  },
];
