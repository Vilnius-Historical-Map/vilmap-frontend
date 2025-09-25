import type { ReactElement } from "react";
import { HomePage } from "@pages/homePage/homePage.component";
import { MapPage } from "@pages/mapPage/mapPage.component";
import { NotFoundPage } from "@pages/notFoundPage/notFoundPage.component";

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
  {
    path: '/map',
    element: <MapPage />,
    isPrivate: false,
  },
  {
    path: "/community",
    element: <div>Community</div>,
    isPrivate: false,
  },
  {
    path: "/project", 
    element: <div>Project</div>, 
    isPrivate: false,
  },
  {
    path: "/login",
    element: <div>Login</div>, 
    isPrivate: false,
  },
  {
    path: "*",
    element: <NotFoundPage/>,  
    isPrivate: false,
  }
]