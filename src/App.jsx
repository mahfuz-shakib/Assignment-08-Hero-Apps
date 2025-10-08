import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";
import My_Installation from "./Pages/My_Installation";
import AppDetails from "./Pages/AppDetails";
import ErrorPage from "./Pages/ErrorPage";
import ErrorApp from "./Pages/ErrorApp";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/home", Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/apps/:id", Component: AppDetails },
      { path: "/myinstallation", Component: My_Installation },
      { path: "*", Component: ErrorPage },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
