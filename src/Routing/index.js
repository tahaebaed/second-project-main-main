import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Notfound from "../Pages/Notfound";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProjectsSection from "../Pages/ProjectsSection";
import ServicesPage from "../Pages/ServicesPage";
import Contact from "../Pages/Contact";
import App from "../App";

 const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "projects", Component: ProjectsSection },
      { path: "services", Component: ServicesPage },
    ],
  },
  {
    path: "*",
    Component: Notfound,
  },
]);

 const Routing = () => {
  return <RouterProvider router={routes} />
}

export default Routing;
