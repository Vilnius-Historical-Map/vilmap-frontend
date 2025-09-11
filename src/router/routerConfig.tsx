import type { ReactElement } from "react";
import { HomePage } from "@pages/homePage.component";

 interface IRoute {
   path: string;
   element: ReactElement;
   isPrivate: boolean;
}

export const RoutesConfig: IRoute[] = [
  {
    path: "/",
    element: <HomePage/>,
    isPrivate: false,
  },
]