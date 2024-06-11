import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
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

const Routers = () => {
  return <RouterProvider router={createRouter} />;
};

export default Routers;
