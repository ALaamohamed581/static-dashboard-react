import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Layout from "../compoents/Layout";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,

      children: [{ path: "/", element: <Main /> }],
    },
  ];
  return createBrowserRouter(routes);
};

export default Routes;
