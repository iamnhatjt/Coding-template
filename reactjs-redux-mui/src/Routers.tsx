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
    path: "/test",
    element: <input />,
  },
];

const createRouter = createBrowserRouter(listRouterPaths);

const Routers = () => {
  return <RouterProvider router={createRouter} />;
};

export default Routers;
