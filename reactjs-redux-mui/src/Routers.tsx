import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const listRouterPaths: RouteObject[] = [
  // with no wrapper
  {
    path: "/login",
    element: <div>Hello world</div>,
  },
  //With wrapper
  {
    path: "/",
    element: <div>this will be wrapper element</div>,
  },
];

const createRouter = createBrowserRouter(listRouterPaths);

const Routers: React.FC = () => {
  return <RouterProvider router={createRouter} />;
};

export default Routers;
