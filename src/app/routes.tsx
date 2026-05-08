import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Members } from "./pages/Members";
import { Projects } from "./pages/Projects";
import { Papers } from "./pages/Papers";
import { Awards } from "./pages/Awards";
import { Forums } from "./pages/Forums";
import { Research } from "./pages/Research";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "team", Component: Members },
      { path: "projects", Component: Projects },
      { path: "papers", Component: Papers },
      { path: "awards", Component: Awards },
      { path: "forums", Component: Forums },
      { path: "research", Component: Research },
    ],
  },
]);
